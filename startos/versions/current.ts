import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.12:0',
  releaseNotes: {
    en_US:
      'Updates wisp to v0.5.12. Fixes the Spider pinning a CPU core for each quiet upstream relay it stays connected to (a busy-spin in the encrypted read path); idle connections now sleep properly. Also bounds how long the Spider will wait on connecting to an unreachable or stalling relay, so it can no longer delay shutdown long enough for StartOS to force-kill the service. Carries forward every prior fix.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
