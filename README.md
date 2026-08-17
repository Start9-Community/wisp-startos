<p align="center">
  <img src="icon.png" alt="Wisp Logo" width="21%">
</p>

# Wisp on StartOS

> Everything not listed in this document should behave the same as upstream
> Wisp. If a feature, setting, or behavior is not mentioned here, the upstream
> documentation is accurate and fully applicable — see the Documentation
> section of `instructions.md` for links.

[Wisp](https://github.com/privkeyio/wisp) is a Nostr relay: clients connect over a websocket to publish and read events, and it stores them in an embedded database. This package runs it with its whole configuration exposed as actions, and with the one setting that would silently break it behind a reverse proxy corrected.

- **Upstream repo:** <https://github.com/privkeyio/wisp>
- **Wrapper repo:** <https://github.com/Start9-Community/wisp-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

One image, built here.

| Property      | Value                                 |
| ------------- | ------------------------------------- |
| Image         | Built from this repo's `Dockerfile`   |
| Architectures | x86_64, aarch64                       |
| Command       | The relay, against the managed config |

| Subcontainer | Purpose                                  |
| ------------ | ---------------------------------------- |
| `wisp-relay` | The only daemon — the one to `attach` to |

## Volume and Data Layout

Two volumes, and the second is mounted as a single file.

| Volume   | Mount Point     | Purpose                      |
| -------- | --------------- | ---------------------------- |
| `main`   | `/data`         | The event database           |
| `config` | The config file | The configuration, read-only |

| Path        | Written by | Holds                           |
| ----------- | ---------- | ------------------------------- |
| `wisp`      | Wisp       | The LMDB database — every event |
| `wisp-lock` | Wisp       | LMDB's lock file                |

**The database is a file, not a directory.** Wisp opens LMDB in the mode where the path names the data file itself and a lock file appears beside it — which is why the storage path points at a file inside the mounted volume rather than at a directory of its own.

**The configuration is mounted read-only into the container.** The package owns that file entirely; the relay reads it and never writes it.

## File Models

One model, and it is the whole configuration surface.

| File        | Format | Modelled                | Written by       |
| ----------- | ------ | ----------------------- | ---------------- |
| `wisp.toml` | TOML   | Yes — `FileHelper.toml` | Init and actions |

The model covers every section the relay understands: the server binding, the advertised metadata, storage, limits, timeouts, rate limits, authentication, security, the spider, negentropy sync, and management.

Two fields are **pinned** with `z.literal(...).catch(...)` — the bind address and the port, and the storage path — because the interface and the mount are built on exactly those values. A hand-edit is repaired on read.

**Lists are stored as comma-joined strings**, not TOML arrays, because Wisp's parser only understands flat scalars under a section header. The actions take proper lists and join them on the way in.

**Public keys are accepted as `npub` or hex and stored as hex.** The package decodes bech32 itself, so a key copied out of a Nostr client works without conversion.

### The per-IP connection limit

Wisp defaults to allowing ten connections per source IP. **Behind the StartOS reverse proxy every client shares one source address**, so that default would cap the entire relay — internet-wide — at ten connections.

The package therefore seeds a very high per-IP value on install, and **only when the operator has not set one**, so the Limits action still wins on later runs. Abuse protection comes from the global connection cap and the event and query rate limits instead, which is the same choice the other Nostr relays on StartOS make.

**Zero is not "unlimited" here** — Wisp reads it as a limit of zero and rejects every connection — which is why the seeded value is a large number rather than 0.

## Dependencies

None.

A relay's clients come to it, and the optional spider reaches out to other relays to pull events in. Nothing else is needed.

## Network Access and Interfaces

One interface.

| Interface | Id          | Type | Port | Description                   |
| --------- | ----------- | ---- | ---- | ----------------------------- |
| Websocket | `websocket` | api  | 7777 | What Nostr clients connect to |

Bound over the websocket protocol and not masked.

**Whether anyone may use it is a configuration question, not a network one.** By default a relay accepts events from anyone who can reach it; the access controls — requiring authentication, requiring it to write, and the address allow and block lists — are what narrow that, and they are actions.

## Installation and First-Run Flow

Install writes the configuration with its defaults, including the corrected per-IP limit. There is no task and no credential.

**The relay is usable immediately and accepts events from anyone who reaches it.** If that is not what you want, set the access controls before publishing the address.

The metadata a relay advertises — its name, description, admin key and contact — is empty until you set it, so clients see an unnamed relay until then.

**Every action takes effect on the next start**, and each one says so: the relay reads its configuration once, at start.

## Actions

Four actions, all in one group, all runnable at any status.

### Relay Information

The public metadata your relay advertises: name, description, admin public key, and contact — plus the relay's own URL, which authentication uses.

### Limits

The whole quantitative surface: maximum connections, connections per address, subscriptions, filters, message size, content length, event tags, events per minute, the default and maximum query limits, the idle timeout, and a minimum proof-of-work difficulty for accepted events.

- **The per-address limit is the one with a trap** — see [File Models](#file-models).
- **Proof of work is the strongest anti-spam lever here**, and it costs legitimate clients too.

### Access Control

Whether authentication is required at all, whether it is required to write, which keys may manage the relay, and address allow and block lists.

- **Requiring authentication to write is the usual choice** for a personal relay: anyone may read, only you may publish.
- The allow and block lists are entered as lists and stored joined.

### Spider Sync

The optional spider: whether it runs, which relays to pull from, whose events to pull, and how often.

- **Off by default.** Turning it on makes your relay fetch events from other relays and store them, which is how a personal relay stays populated with the people you follow.
- **It defaults to a known set of public relays** when none are given, so an enabled spider always has somewhere to sync from.
- Keys are given as `npub` or hex.

## Tasks

None. This package raises no tasks, so the service is never held on a prompt and its ordinary controls are always available.

## Health Checks

One check, on the only daemon.

| Check     | Displayed as | Method                 |
| --------- | ------------ | ---------------------- |
| `primary` | "Relay"      | Port 7777 is listening |

It reports that the relay is accepting connections. **It says nothing about the spider**: an unreachable source relay or a sync that never completes shows a green check, and is visible in the service logs.

## Backups and Restore

Both volumes are copied — `sdk.Backups.ofVolumes('main', 'config')`. That is the event database and the configuration.

**The database is the relay.** For a personal relay it may be the only copy of your own notes that you control, which is the reason to run one at all — so this backup is worth taking seriously.

**LMDB is copied as files**, so a backup taken while the relay is writing is only as consistent as LMDB's own recovery from that state.

A restored instance comes back with the same events, the same metadata and the same access rules. Clients need no change: the relay's identity to them is its address, not anything in the backup.

## Limitations and Differences

1. **The per-address connection limit is seeded high on purpose.** Behind the proxy every client shares one address, and the upstream default would cap the whole relay at ten connections.
2. **Zero does not mean unlimited** in any of the limit fields — it means zero.
3. **Every setting applies on the next start.** There is no live reload.
4. **The relay accepts events from anyone by default.** Access control is opt-in.
5. **Lists are stored as joined strings**, a consequence of the relay's own parser.
6. **The bind address, port, and storage path are pinned** and repaired if edited.
7. **The database is backed up as files**, not as a logical export.

---

## Quick Reference for AI Consumers

```yaml
package_id: wisp
image: built from ./Dockerfile
architectures:
  - x86_64
  - aarch64
subcontainers:
  - wisp-relay
volumes:
  main: /data # LMDB data file at /data/wisp (MDB_NOSUBDIR) plus /data/wisp-lock
  config: mounted as the wisp.toml file itself, read-only
file_models:
  - wisp.toml # the entire configuration; server host/port and storage path are z.literal-pinned
startos_managed_env_vars: [] # everything is wisp.toml
dependencies: []
interfaces:
  websocket: { type: api, port: 7777, protocol: ws }
actions:
  - configure-info
  - configure-limits
  - configure-access
  - configure-spider
tasks: []
health_checks:
  - primary # displayed "Relay"; says nothing about the spider
```
