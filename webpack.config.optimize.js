module.exports = {
    entry: "./test/src/test.js",
    output: {
        path: "test/dist",
        filename: "test.min.js"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: "template-string-optimize!babel?presets[]=es2015"
            }
        ]
    }
};
