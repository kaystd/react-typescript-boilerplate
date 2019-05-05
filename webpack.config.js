const path = require('path')

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader'],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: ['source-map-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    },
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
