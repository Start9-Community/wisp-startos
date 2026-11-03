import { sdk } from '../sdk'
import { wispToml } from '../fileModels/wisp.toml'

// Seed wisp.toml on every init so schema defaults (fixed host/port/storage, and
// security.trust_proxy = true) are written on install and applied on upgrade.
// trust_proxy makes wisp key its per-IP limits by the real client address the
// StartOS proxy forwards, rather than by the proxy itself (see the file model).
//
// max_connections_per_ip is still seeded high when the operator has not set one:
// per-IP limits now see real addresses, but many users can share one address
// (Tor exits, CGNAT), and wisp's default of 10 would refuse them. The Limits
// action still wins on later runs. (0 is not "unlimited" in wisp, it rejects
// every connection, so we use a large number.)
export const seedFiles = sdk.setupOnInit(async (effects) => {
  const current = await wispToml.read().once()
  const seedPerIp = current?.security?.max_connections_per_ip === undefined
  await wispToml.merge(
    effects,
    seedPerIp ? { security: { max_connections_per_ip: 100000 } } : {},
  )
})
