const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: 'google-chrome',
    host: 'localhost',
    port: 3000,
    overlay: {
      warnings: true,
      errors: true,
    },
    progress: true,
  },
}
