const acorn = require('acorn');
const escodegen = require('escodegen');

module.exports = function(source) {
    this.cacheable && this.cacheable();
    const tree = acorn.parse(source, { sourceType: 'module' });
    traverse(tree);
    return escodegen.generate(tree);
};

function isObject(item) {
    return Object.prototype.toString.call(item) === '[object Object]';
}

function traverse(input) {
    if (Array.isArray(input)) {
        input.forEach(item => traverse(item));
    } 
    else if (isObject(input)) {
        for (let key in input) {
            if (typeof input[key] === 'string') {
                input[key] = input[key].replace(/(\n\s+)/g, '');
            }
            traverse(input[key]);
        }
    }
}
