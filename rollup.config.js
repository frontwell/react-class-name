const dedent     = require('string-dedent')
const typescript = require('@rollup/plugin-typescript')

const banner = dedent`
  /*!
  * MIT License
  * Copyright (c) 2023 Richard King <richrdkng@gmail.com> (https://richrdkng.com)
  * https://github.com/reactory/class-name/blob/master/LICENSE
  */
`

/** @type {import('rollup').RollupOptions} */
module.exports = {
  input: 'src/index.ts',

  output: {
    banner,
    sourcemap: true,
    format:    'cjs',

    dir: '.dist',
  },

  plugins: [
    typescript(),
  ],
}
