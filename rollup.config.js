import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default [
    // for node
    {
        input: 'src/index.js',
        output: {
            file: 'lib/index.js',
            format: 'umd',
            name: 'Proxemics'
        },
        plugins: [
            babel({
                babelrc: false,
                comments: false
            })
        ]
    },

    // for browser
    {
        input: 'src/index.js',
        output: {
            file: 'dist/proxemics.min.js',
            format: 'umd',
            name: 'Proxemics'
        },
        plugins: [
            resolve({
                jsnext: true,
                main: true,
                browser: true
            }),
            commonjs(),
            babel({
                babelrc: false,
                comments: false,
                exclude: 'node_modules/**',
                runtimeHelpers: true,
                presets: [
                    [
                        '@babel/env',
                        {
                            targets: {
                                browsers: '> .5%, not dead'
                            },
                            modules: 'false',
                            debug: true
                        }
                    ]
                ],
                plugins: [
                    [
                        '@babel/transform-runtime',
                        {
                            corejs: 2,
                            helpers: true,
                            regenerator: true,
                            useESModules: false
                        }
                    ]
                ]
            }),
            uglify()
        ]
    }
]
