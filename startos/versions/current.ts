import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.9:0',
  releaseNotes: {
    en_US:
      'Updates wisp to v0.5.9 (folds in v0.5.8). Fixes two crashes: (1) a SIGSEGV every few hours during normal operation under connection churn, where a finished connection could be freed while the event loop still had a pending read for it; connections are now removed from the event loop before being freed. (2) A SIGSEGV on shutdown when a query was still being served, where connection buffers a query was reading were freed before in-flight handlers finished; the worker pool now drains before any buffers are freed. Storage was never at risk in either case. Carries forward every prior fix.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
