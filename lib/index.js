"use strict";
var acorn = require("acorn");
var escodegen = require("escodegen");
var isObject = function (item) {
    return Object.prototype.toString.call(item) === '[object Object]';
};
var acornOptions = {
    sourceType: 'module'
};
function traverse(input) {
    if (Array.isArray(input)) {
        input.forEach(traverse);
    }
    else if (isObject(input)) {
        for (var key in input) {
            if (typeof input[key] === 'string') {
                input[key] = input[key].replace(/(\n\s+)/g, '');
            }
            else {
                traverse(input[key]);
            }
        }
    }
}
module.exports = function (source) {
    this.cacheable && this.cacheable();
    var tree = acorn.parse(source, acornOptions);
    traverse(tree);
    return escodegen.generate(tree);
};
