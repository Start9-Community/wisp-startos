import { sdk } from '../sdk'
import { wispToml } from '../fileModels/wisp.toml'

export const seedFiles = sdk.setupOnInit(async (effects) => {
  await wispToml.merge(effects, {})
})
