const path = require('path')
const root = path.resolve(__dirname, './')

module.exports = {
    entry: `${root}/src/index.js`,
    output: {
        path: `${root}/lib`,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                'useBuiltIns': 'usage'
                            }
                        ]
                    ]
                }
            }
        ]
    }
}
