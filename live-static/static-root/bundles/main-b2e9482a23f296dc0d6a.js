/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/bundles/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (81:25)\n\n\u001b[0m \u001b[90m 79 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 80 | \u001b[39m              \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m \u001b[36mclass\u001b[39m\u001b[33m=\u001b[39m\u001b[32m\"col-md-9\"\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 81 | \u001b[39m              \u001b[33m<\u001b[39m\u001b[33mh2\u001b[39m\u001b[33m>\u001b[39m{{ user\u001b[33m.\u001b[39mfirst_name }} {{ user\u001b[33m.\u001b[39mlast_name }}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh2\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 82 | \u001b[39m              \u001b[33m<\u001b[39m\u001b[33mh4\u001b[39m\u001b[33m>\u001b[39m{{ user\u001b[33m.\u001b[39mjob_title }} \u001b[37m\u001b[41m\u001b[1m@\u001b[22m\u001b[49m\u001b[39m {{ user\u001b[33m.\u001b[39mcurrent_company }}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh4\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 83 | \u001b[39m              \u001b[36mif\u001b[39m (user\u001b[33m.\u001b[39mis_facebook_connected){\u001b[33m<\u001b[39m\u001b[33mspan\u001b[39m \u001b[36mclass\u001b[39m\u001b[33m=\u001b[39m\u001b[32m\"btn btn-default\"\u001b[39m\u001b[33m>\u001b[39m\u001b[33mFacebook\u001b[39m\u001b[33m:\u001b[39m connected\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mspan\u001b[39m\u001b[33m>\u001b[39m}\u001b[33m;\u001b[39m\n \u001b[90m 84 | \u001b[39m              \u001b[90m// {% if user.is_linkedin_connected %}<span class=\"btn btn-default\">LinkedIn: connected</span>{% endif %}\u001b[39m\u001b[0m\n");

/***/ })
/******/ ]);