const path = require('path');

module.exports = {
    entry: './test/src/test.js',
    output: {
        path: path.resolve(__dirname, './test/dist'),
        filename: 'test.optimize.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                use: [
                    'template-string-optimize-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        ]
    }
};
