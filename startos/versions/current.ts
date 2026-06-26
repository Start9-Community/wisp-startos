import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.6:0',
  releaseNotes: {
    en_US:
      'Updates wisp to v0.5.6. WebSocket upgrades rejected by the connection limiter now return HTTP 429 (per-IP cap) or 503 (server full) instead of HTTP 500, so external uptime monitors no longer report the relay as down when only a single connection is being rejected (the relay info document keeps returning 200 throughout). The rejected client IP is logged for diagnosis. Carries forward every prior fix.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
