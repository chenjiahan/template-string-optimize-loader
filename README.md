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

``` javascript
// ES6
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

// ES5
function(n,t){"use strict";var e=function(n){return"\n    <!-- section start -->\n    <section>\n      
<h3>"+n.title+"</h3>\n        <div>"+n.date+"</div>\n        <dl>\n            <dt>Coffee</dt>\n            <dt>Black hot
drink</dt>\n            <dt>Milk</dt>\n            <dd>\n                <ul>\n                   
"+n.list.map(function(n){return"\n                        <li>"+n+"</li>\n                    "}).join("")+"\n              
</ul>\n            </dd>\n        </dl>\n    </section>\n    <!-- section end -->\n"};

// optimized
function(t,e){"use strict";var i=function(t){return"<section><h3>"+t.title+"</h3><div>"+t.date+"</div><dl><dt>Coffee</dt><dt>Black hot drink</dt><dt>Milk</dt><dd><ul>"+t.list.map(function(t){return"<li>"+t+"</li>"}).join("")+"</ul></dd></dl></section>"};
``` 

    
