/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var reg = /\n1323<!-- 123 -->/;
	var template = function template(data) {
	    return '\n    <!-- section start -->\n    <section>\n        <h3>' + data.title + '</h3>\n        <div>' + data.date + '</div>\n        <dl>\n            <dt>Coffee</dt>\n            <dt>Black hot drink</dt>\n            <dt>Milk</dt>\n            <dd>\n                <ul>\n                    ' + data.list.map(function (item) {
	        return '\n                        <li>' + item + '</li>\n                    ';
	    }).join('') + '\n                </ul>\n            </dd>\n        </dl>\n    </section>\n    <!-- section end -->\n';
	};

	document.body.innerHTML = template({
	    title: 'title',
	    date: '2000-01-01',
	    list: ['item1', 'item2', 'item3']
	});

/***/ }
/******/ ]);