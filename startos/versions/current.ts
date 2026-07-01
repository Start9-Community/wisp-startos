import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.10:0',
  releaseNotes: {
    en_US:
      'Updates wisp to v0.5.10. No behavior change from v0.5.9: wisp now builds against the upstream http.zig library instead of a temporary fork, since both crash fixes from v0.5.8 and v0.5.9 have been merged upstream. Carries forward every prior fix.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
