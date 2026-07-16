import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.13:0',
  releaseNotes: {
    en_US:
      'Updates wisp to v0.5.13. Advertises NIP-51 (lists) support and adds relay support for Marmot MLS KeyPackage events. Reduces lock contention under load by sharding the rate limiters and reusing broadcast buffers, improving throughput on busy relays. Carries forward every prior fix.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
