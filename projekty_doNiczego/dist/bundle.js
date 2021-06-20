/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (() => {

eval("var Czlowiek = /** @class */ (function () {\r\n    /**\r\n     *\r\n     */\r\n    function Czlowiek(wiek, waga, wzrost, imie, płeć) {\r\n        this.wiek = wiek;\r\n        this.waga = waga;\r\n        this.wzrost = wzrost;\r\n        this.imie = imie;\r\n        this.płeć = płeć;\r\n    }\r\n    Czlowiek.prototype.getWiek = function (wiek) {\r\n        return wiek;\r\n    };\r\n    Czlowiek.prototype.getWaga = function (waga) {\r\n        return waga;\r\n    };\r\n    Czlowiek.prototype.getWzrost = function (wzrost) {\r\n        return wzrost;\r\n    };\r\n    Czlowiek.prototype.getImie = function (imie) {\r\n        return imie;\r\n    };\r\n    Czlowiek.prototype.getCzyKobieta = function (płeć) {\r\n        if (płeć === \"kobieta\")\r\n            return \"to jest kobieta\";\r\n        else\r\n            return \"to nie jest kobieta\";\r\n    };\r\n    Czlowiek.prototype.getAll = function () {\r\n        console.log(this.getWiek(this.wiek));\r\n        console.log(this.getWaga(this.waga));\r\n        console.log(this.getWzrost(this.wzrost));\r\n        console.log(this.getImie(this.imie));\r\n        console.log(this.getCzyKobieta(this.płeć));\r\n    };\r\n    return Czlowiek;\r\n}());\r\nvar czlowiek = new Czlowiek(20, 60, 180, \"Dawid\", \"mężczyzna\");\r\nczlowiek.getAll();\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;