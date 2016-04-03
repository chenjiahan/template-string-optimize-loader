module.exports = {
    entry: "./test/src/test.js",
    output: {
        path: "test/dist",
        filename: "test.js"
    },
    module: {
        loaders: [
            // { test: /\.js$/, loader: "babel?presets[]=es2015"},
            { test: /\.js$/, loader: "template-string-optimize!babel?presets[]=es2015"}
        ]
    }
};
