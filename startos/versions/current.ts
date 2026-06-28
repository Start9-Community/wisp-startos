import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.7:0',
  releaseNotes: {
    en_US:
      'Updates wisp to v0.5.7. Fixes a crash (SIGSEGV) on shutdown when a query was still streaming as the relay stopped, for example during a backup: the connection worker tore down storage while a query was still reading it. Storage was never at risk (crash-safe writes), but the unclean shutdown is gone. Carries forward every prior fix.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
