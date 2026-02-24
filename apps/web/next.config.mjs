import nextra from 'nextra'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const withNextra = nextra({
  contentDirBasePath: '/docs',
})

export default withNextra({
  transpilePackages: ['@froglet/ui'],
  webpack(config) {
    // Exact-match alias so that @froglet/ui/styles is NOT swallowed
    config.resolve.alias['@froglet/ui$'] = path.resolve(
      __dirname,
      '../../packages/froglet-ui/src/index.ts'
    )
    config.resolve.alias['@froglet/ui/styles'] = path.resolve(
      __dirname,
      '../../packages/froglet-ui/dist/index.css'
    )
    return config
  },
})
