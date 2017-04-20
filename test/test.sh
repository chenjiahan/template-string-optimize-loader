#!/bin/sh
npm run lib

mkdir node_modules/template-string-optimize-loader
cp -r ./package.json ./node_modules/template-string-optimize-loader
cp -r ./lib ./node_modules/template-string-optimize-loader

webpack
webpack --config webpack.config.optimize.js
