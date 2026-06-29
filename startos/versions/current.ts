import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.8:0',
  releaseNotes: {
    en_US:
      'Updates wisp to v0.5.8. Fixes a crash (SIGSEGV) that hit the relay every few hours during normal operation under connection churn: a finished connection could be freed while the event loop still had a pending read for it, so the next read touched freed memory. Connections are now removed from the event loop before being freed. Storage was never at risk. Carries forward every prior fix.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
