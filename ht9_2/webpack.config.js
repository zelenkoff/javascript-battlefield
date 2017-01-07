const NODE_ENV = process.env.NODE_ENV || 'es6';
const webpack = require('webpack');

if (NODE_ENV === 'es6') {
    module.exports = {
        entry: './es6',
        output: {
            filename: 'build.js'
        },

        watch: true,

        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel?presets[]=es2015'
            }]
        }
    }
} else if (NODE_ENV === 'es5') {
    module.exports = {
        entry: './es5',
        output: {
            filename: 'build.js'
        },

        watch: true
    }
}