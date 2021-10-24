import { join } from 'path'
import { readdir } from 'fs/promises'
import { rollup } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'

export async function main() {
  const handlerDir = join(process.cwd(), 'src/handler')
  const handlerFiles = await readdir(handlerDir)

  const bundle = await rollup({
    input: handlerFiles
      .filter(
        (handlerFile) =>
          handlerFile.includes('.js') && !handlerFile.includes('.test.js')
      )
      .map((handlerFile) => join(handlerDir, handlerFile)),
    plugins: [
      json(),
      resolve({ preferBuiltins: true, exportConditions: ['node'] }),
      commonjs(),
    ],
  })

  try {
    bundle.write({
      dir: join(process.cwd(), 'build'),
      entryFileNames: '[name]/handler.js',
      format: 'cjs',
      sourcemap: true,
    })
  } finally {
    await bundle.close()
  }
}
