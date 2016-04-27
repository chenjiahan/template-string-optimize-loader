# template-string-optimize-loader
template string optimize loader module for webpack

## Installation

    npm install template-string-optimize-loader --save-dev
    
## Usage

``` javascript
module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'template-string-optimize!babel'
        }
    ]
}
``` 

## Example

``` html
// ES6 template string HTML
const template = data => `
    <!-- section start -->
    <section>
        <h3>${data.title}</h3>
        <div>${data.date}</div>
        <dl>
            <dt>Coffee</dt>
            <dt>Black hot drink</dt>
            <dt>Milk</dt>
            <dd>
                <ul>
                    ${data.list.map((item) => `
                        <li>${item}</li>
                    `).join('')}
                </ul>
            </dd>
        </dl>
    </section>
    <!-- section end -->
`;
```

``` javascript
// source => babel
var template = function template(data) {
    return '\n    <!-- section start -->\n    <section>\n        <h3>' + data.title + '</h3>\n        <div>' + data.date + '</div>\n        <dl>\n            <dt>Coffee</dt>\n            <dt>Black hot drink</dt>\n            <dt>Milk</dt>\n            <dd>\n                <ul>\n                    ' + data.list.map(function (item) {
        return '\n                        <li>' + item + '</li>\n                    ';
    }).join('') + '\n                </ul>\n            </dd>\n        </dl>\n    </section>\n    <!-- section end -->\n';
};
```

``` javascript
// source => babel => template-string-optimize
var template = function template(data) {
    return '<section><h3>' + data.title + '</h3><div>' + data.date + '</div><dl><dt>Coffee</dt><dt>Black hot drink</dt><dt>Milk</dt><dd><ul>' + data.list.map(function (item) {
        return '<li>' + item + '</li>';
    }).join('') + '</ul></dd></dl></section>';
};
``` 

