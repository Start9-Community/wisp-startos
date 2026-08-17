# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **`max_connections_per_ip` is seeded high deliberately.** Behind the StartOS reverse proxy every client shares the proxy's source IP, so wisp's default of 10 would cap the entire relay — internet-wide — at 10 connections. Same choice nostr-rs-relay and strfry make here; abuse protection is the global `max_connections` plus the event and query rate limits. **`0` is not "unlimited" in wisp — it rejects every connection**, which is why the seed is a large number.
- **`server.host`/`server.port` and `storage.path` are `z.literal` pins** — the interface and the mounts are built on exactly those values, so a hand-edit is repaired on read.
- **`wisp.toml` is mounted read-only** as a single file. The package owns it; the relay only reads it, and every setting applies on the next start — say so in every action's warning.
