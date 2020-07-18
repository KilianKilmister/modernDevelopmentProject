import license from 'rollup-plugin-license'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'dist/main.js',
  output: {
    dir: 'docs/scripts',
    format: 'esm'
  },
  preserveEntrySignatures: false,
  plugins: [
    commonjs(),
    resolve(),
    license({
      banner: `
DO NOT EDIT THIS FILE
The code in this file is generated from files in ./src/
`
    }),
    license({
      banner: `
Copyright (c) 2020-${new Date().getFullYear()}, Kilian Hefti. (MIT Licensed)
https://modernjavascriptdevelopment.github.io/ModernJavaScriptDevelopment/#/
`
    })
  ]
}
