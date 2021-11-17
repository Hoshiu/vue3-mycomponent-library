/* eslint-disable @typescript-eslint/no-var-requires */
const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const isLib = process.env.TYPE === 'lib'

module.exports = {
  configureWebpack(config) {
    console.log(config.plugins)
  },
  chainWebpack(config) {
    if (!isLib) {
      config.plugin('monaco').use(new MonacoEditorWebpackPlugin())
    }
    config.plugin('circular').use(new CircularDependencyPlugin())
  },
}
