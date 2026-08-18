# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

**Bugs and feature requests are GitHub issues on this repo** — file them as you find them.
Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **`max_connections_per_ip` is seeded high deliberately.** Behind the StartOS reverse proxy every client shares the proxy's source IP, so wisp's default of 10 would cap the entire relay — internet-wide — at 10 connections. Same choice nostr-rs-relay and strfry make here; abuse protection is the global `max_connections` plus the event and query rate limits. **`0` is not "unlimited" in wisp — it rejects every connection**, which is why the seed is a large number.
- **`server.host`/`server.port` and `storage.path` are `z.literal` pins** — the interface and the mounts are built on exactly those values, so a hand-edit is repaired on read.
- **`wisp.toml` is mounted read-only** as a single file. The package owns it; the relay only reads it, and every setting applies on the next start — say so in every action's warning.
