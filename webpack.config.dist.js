const path = require('path')
const root = path.resolve(__dirname, './')

module.exports = {
    mode: 'production',
    entry: `${root}/src/index.js`,
    output: {
        path: `${root}/dist`,
        filename: 'proxemics.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'Proxemics'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
