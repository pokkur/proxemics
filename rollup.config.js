import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default [
    {
        entry: 'src/index.js',
        dest: 'lib/index.js',
        format: 'umd',
        moduleName: 'Proxemics',
        plugins: [babel()]
    },
    {
        entry: 'src/index.js',
        dest: 'dist/proxemics.js',
        format: 'umd',
        moduleName: 'Proxemics',
        plugins: [babel(), uglify()]
    }
]
