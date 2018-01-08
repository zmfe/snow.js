/*!
* Pure.js v1.0.0
* undefined
*
* Copyright (c) 2018 undefined
* Released under the MIT license
*
* Date: 2018-01-08T11:42:16.627Z
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Snow = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var Snow =
/**
 * Creates an instance of Snow.
 * @param {Element} element target
 * @param {Object} [option={}] options
 * @memberof Snow
 */
function Snow() {
	classCallCheck(this, Snow);

	this.init();
};

return Snow;

})));
