import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.11:0',
  releaseNotes: {
    en_US:
      'Updates wisp to v0.5.11. Ephemeral events (NIP-16) are now delivered to live subscribers in real time instead of being dropped. The Spider now detects and reconnects half-open upstream relay connections, probing quiet relays before reconnecting, and its startup no longer blocks the relay. Connection reaping is more robust, reliably reclaiming idle and half-open client connections. Carries forward every prior fix.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
