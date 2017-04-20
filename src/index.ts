import acorn = require('acorn');
import escodegen = require('escodegen');

const isObject = (item: any): boolean =>
    Object.prototype.toString.call(item) === '[object Object]';

const acornOptions = {
    sourceType: 'module'
} as acorn.Options;

export = function (source: string): string {
    this.cacheable && this.cacheable();
    const tree = acorn.parse(source, acornOptions);
    traverse(tree);
    return escodegen.generate(tree);
};

function traverse(input: any): void {
    if (Array.isArray(input)) {
        input.forEach(traverse);
    } else if (isObject(input)) {
        for (let key in input) {
            if (typeof input[key] === 'string') {
                input[key] = input[key].replace(/(\n\s+)/g, '');
            } else {
                traverse(input[key]);
            }
        }
    }
}
