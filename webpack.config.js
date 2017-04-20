const path = require('path');

module.exports = {
    entry: './test/src/test.js',
    output: {
        path: path.resolve(__dirname, './test/dist'),
        filename: 'test.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
};
