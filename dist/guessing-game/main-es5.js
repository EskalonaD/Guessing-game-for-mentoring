function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-wrapper></app-wrapper>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/button/button.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/button/button.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppButtonButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button>{{ title }}</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #wrapper>\r\n    <app-button\r\n        title=\"Finish Game\"\r\n        (click)=\"closeGame()\"\r\n    ></app-button>\r\n    <app-button\r\n        title=\"Restart Game\"\r\n        (click)=\"restartGame()\"\r\n    ></app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGameGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-wrapper\">\r\n        <div class=\"input-container\">\r\n            <app-input\r\n                placeholder=\"Set Number\"\r\n                [formControl]=\"input\"\r\n                (blur)=\"handleInput($event)\"\r\n                (keydown)=\"onInputKeyDown($event)\"\r\n                (blurred)=\"handleInput()\"\r\n            ></app-input>\r\n        <div *ngIf=\"incorrectInput\" class=\"error-message\">Set proper value</div>\r\n    </div>\r\n    <div class=\"message-wrapper\">\r\n        <div *ngIf=\"messages$ | async as messages\">\r\n            <app-message *ngFor=\"let message of messages\"\r\n                [message]=\"message\"\r\n                [ngClass]=\"message.person\"\r\n                [appScroll]=\"shouldScroll\"\r\n            ></app-message>\r\n        </div>\r\n    </div>\r\n    <div\r\n        [ngClass]=\"{ divider: true, 'large-divider': showDivider }\"\r\n        #divider\r\n    ></div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-wrapper\">\r\n    <h1>Guessing Game</h1>\r\n    <app-button *ngIf=\"showStartGameButton\"\r\n        title=\"Start Game\"\r\n        (click)=\"startGame()\"\r\n    ></app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/input/input.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/input/input.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInputInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <fieldset #fieldset>\r\n        <legend>\r\n            <span #span>{{ placeholder }}</span>\r\n        </legend>\r\n        <input #input\r\n            (input)=\"onInput($event)\"\r\n            (blur)=\"onBlur()\"\r\n            (focus)=\"onInputFocus()\"\r\n        >\r\n        <p #animatedPlaceholder class=\"placeholder\">{{ placeholder }}</p>\r\n    </fieldset>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessageMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"user\">\r\n    <img class=\"logo\" [src]=\"logoURL\">\r\n    <p class=\"nickname\">{{ message.person }}</p>\r\n</div>\r\n<div\r\n    class=\"loader\"\r\n    *ngIf=\"showLoader; else messageBlock\"\r\n>{{message.person}} typing...</div>\r\n<ng-template #messageBlock>\r\n    <div class=\"message\">{{ message.text }}</div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-button/scroll-button.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-button/scroll-button.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScrollButtonScrollButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\r\n    class=\"scroll-button\"\r\n    (click)=\"onClick()\"\r\n    [innerHTML]=\"arrowDirection[this.direction]\"\r\n></div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wrapper/wrapper.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wrapper/wrapper.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWrapperWrapperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\" #wrapper (scroll)=\"onScroll()\">\n    <div #contentContainer>\n        <app-header\n            [showStartGameButton]=\"showStartGameButton\"\n            (start)=\"startGame()\"\n        ></app-header>\n        <template appGameAnchor></template>\n        <div class=\"scroll-buttons-container\" *ngIf=\"showScrollButtons\">\n            <app-scroll-button\n                [ngClass]=\"{ 'show': showScrollTopButton }\"\n                direction=\"top\"\n                (scrollTo)=\"scrollTo($event)\"\n            ></app-scroll-button>\n            <app-scroll-button\n                [ngClass]=\"{ 'show': showScrollBottomButton }\"\n                direction=\"bottom\"\n                (scrollTo)=\"scrollTo($event)\"\n            ></app-scroll-button>\n        </div>\n        <app-footer *ngIf=\"showFooter\"\n            (startAnotherGame)=\"startGame()\"\n            (endGame)=\"endGame()\"\n        ></app-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Guessing Game';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./message/message.component */
    "./src/app/message/message.component.ts");
    /* harmony import */


    var _scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./scroll.directive */
    "./src/app/scroll.directive.ts");
    /* harmony import */


    var _scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./scroll-button/scroll-button.component */
    "./src/app/scroll-button/scroll-button.component.ts");
    /* harmony import */


    var _game_anchor_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./game-anchor.directive */
    "./src/app/game-anchor.directive.ts");
    /* harmony import */


    var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./wrapper/wrapper.component */
    "./src/app/wrapper/wrapper.component.ts");
    /* harmony import */


    var _button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./button/button.component */
    "./src/app/button/button.component.ts");
    /* harmony import */


    var _input_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./input/input.component */
    "./src/app/input/input.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"], _scroll_directive__WEBPACK_IMPORTED_MODULE_9__["ScrollDirective"], _scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_10__["ScrollButtonComponent"], _game_anchor_directive__WEBPACK_IMPORTED_MODULE_11__["GameAnchorDirective"], _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["WrapperComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_14__["InputComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [],
      entryComponents: [_game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/button/button.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/button/button.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppButtonButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  width: 120px;\n  height: 55px;\n  border-radius: 10px;\n  outline: none;\n  margin: 10px;\n  border: 2px solid #10bfd6;\n  cursor: pointer;\n}\nbutton:hover {\n  box-shadow: 2px 5px 5px 5px #555;\n}\nbutton:active {\n  box-shadow: inset 1px 2px 3px 3px #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL0Q6XFxQcm9qZWN0c1xcR2FtZS9zcmNcXGFwcFxcYnV0dG9uXFxidXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0ksZ0NBQUE7QUNDUjtBREVJO0VBQ0ksc0NBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYsIDE5MSwgMjE0KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAgMnB4IDVweCA1cHggNXB4ICM1NTU7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICBpbnNldCAxcHggMnB4IDNweCAzcHggIzU1NTtcclxuICAgIH1cclxufVxyXG4iLCJidXR0b24ge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTBiZmQ2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggNXB4IDVweCA1cHggIzU1NTtcbn1cbmJ1dHRvbjphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDNweCAzcHggIzU1NTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/button/button.component.ts":
  /*!********************************************!*\
    !*** ./src/app/button/button.component.ts ***!
    \********************************************/

  /*! exports provided: ButtonComponent */

  /***/
  function srcAppButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ButtonComponent = function ButtonComponent() {
      _classCallCheck(this, ButtonComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ButtonComponent.prototype, "title", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/button/button.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./button.component.scss */
      "./src/app/button/button.component.scss")).default]
    })], ButtonComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxQcm9qZWN0c1xcR2FtZS9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiIsImRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.startAnotherGame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.endGame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FooterComponent, [{
        key: "closeGame",
        value: function closeGame() {
          this.endGame.emit();
        }
      }, {
        key: "restartGame",
        value: function restartGame() {
          this.startAnotherGame.emit();
        }
      }]);

      return FooterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FooterComponent.prototype, "startAnotherGame", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FooterComponent.prototype, "endGame", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wrapper', {
      static: true
    })], FooterComponent.prototype, "wrapper", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/game-anchor.directive.ts":
  /*!******************************************!*\
    !*** ./src/app/game-anchor.directive.ts ***!
    \******************************************/

  /*! exports provided: GameAnchorDirective */

  /***/
  function srcAppGameAnchorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameAnchorDirective", function () {
      return GameAnchorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GameAnchorDirective = function GameAnchorDirective(viewRef) {
      _classCallCheck(this, GameAnchorDirective);

      this.viewRef = viewRef;
    };

    GameAnchorDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    GameAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appGameAnchor]'
    })], GameAnchorDirective);
    /***/
  },

  /***/
  "./src/app/game.service.ts":
  /*!*********************************!*\
    !*** ./src/app/game.service.ts ***!
    \*********************************/

  /*! exports provided: GameService */

  /***/
  function srcAppGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _guesser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guesser.service */
    "./src/app/guesser.service.ts");
    /* harmony import */


    var _puzzler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./puzzler.service */
    "./src/app/puzzler.service.ts");
    /* harmony import */


    var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./state.service */
    "./src/app/state.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GameService = /*#__PURE__*/function () {
      function GameService(guesser, puzzler, state) {
        var _this = this;

        _classCallCheck(this, GameService);

        this.guesser = guesser;
        this.puzzler = puzzler;
        this.state = state;
        this.chatListener$ = this.state.chat$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
          if (data.stop === true) {
            setTimeout(function () {
              return _this.finishGame();
            }, 3000);
            return;
          }

          var person = data.person === 'guesser' ? 'puzzler' : 'guesser';

          _this[person].listenInterlocutor(data.text);
        }));
      }

      _createClass(GameService, [{
        key: "setGameParameters",
        value: function setGameParameters(secret) {
          this.puzzler.rememberNumber(secret);
          this.guesser.firstGuess();
        }
      }, {
        key: "finishGame",
        value: function finishGame() {
          this.state.isEnded$.next(true);
        }
      }]);

      return GameService;
    }();

    GameService.ctorParameters = function () {
      return [{
        type: _guesser_service__WEBPACK_IMPORTED_MODULE_2__["GuesserService"]
      }, {
        type: _puzzler_service__WEBPACK_IMPORTED_MODULE_3__["PuzzlerService"]
      }, {
        type: _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]
      }];
    };

    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GameService);
    /***/
  },

  /***/
  "./src/app/game/game.component.scss":
  /*!******************************************!*\
    !*** ./src/app/game/game.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppGameGameComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.main-wrapper .input-container {\n  max-width: 30%;\n  min-width: 270px;\n  margin: 15px 0 15px auto;\n}\n.main-wrapper .input-container .error-message {\n  text-align: right;\n}\n.main-wrapper .message-wrapper {\n  flex-basis: 80%;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  overflow: hidden;\n}\n.main-wrapper .message-wrapper .puzzler {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  margin-left: auto;\n  font-weight: bold;\n  border: 2px solid #10bfd6;\n}\n.main-wrapper .message-wrapper .guesser {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-right: auto;\n  background-color: #030363;\n  border: 2px solid #490d3c;\n  color: #ebe9e9;\n}\n.main-wrapper .divider {\n  width: 0px;\n  margin: 20px;\n  align-self: center;\n  border: 2px solid #000;\n  border-radius: 10%;\n  -webkit-transition: width 1.5s;\n  transition: width 1.5s;\n  visibility: hidden;\n}\n.main-wrapper .divider.large-divider {\n  width: 100%;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9EOlxcUHJvamVjdHNcXEdhbWUvc3JjXFxhcHBcXGdhbWVcXGdhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0NSO0FEQ1E7RUFDSSxpQkFBQTtBQ0NaO0FER0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw4QkFBQTtVQUFBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDRFo7QURJUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNGWjtBRE1JO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0VBQ0Esa0JBQUE7QUNKUjtBRE1RO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDSloiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNzBweDtcclxuICAgICAgICBtYXJnaW46IDE1cHggMCAxNXB4IGF1dG87XHJcblxyXG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDgwJTtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgLnB1enpsZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE2LCAxOTEsIDIxNCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3Vlc3NlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDMsIDk5KTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDczLCAxMywgNjApO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDIzNSwgMjMzLCAyMzMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDEuNXM7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxuICAgICAgICAmLmxhcmdlLWRpdmlkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLm1haW4td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubWFpbi13cmFwcGVyIC5pbnB1dC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgbWluLXdpZHRoOiAyNzBweDtcbiAgbWFyZ2luOiAxNXB4IDAgMTVweCBhdXRvO1xufVxuLm1haW4td3JhcHBlciAuaW5wdXQtY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWFpbi13cmFwcGVyIC5tZXNzYWdlLXdyYXBwZXIge1xuICBmbGV4LWJhc2lzOiA4MCU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLXdyYXBwZXIgLm1lc3NhZ2Utd3JhcHBlciAucHV6emxlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTBiZmQ2O1xufVxuLm1haW4td3JhcHBlciAubWVzc2FnZS13cmFwcGVyIC5ndWVzc2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzYzO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDkwZDNjO1xuICBjb2xvcjogI2ViZTllOTtcbn1cbi5tYWluLXdyYXBwZXIgLmRpdmlkZXIge1xuICB3aWR0aDogMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxLjVzO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubWFpbi13cmFwcGVyIC5kaXZpZGVyLmxhcmdlLWRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/game/game.component.ts":
  /*!****************************************!*\
    !*** ./src/app/game/game.component.ts ***!
    \****************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _project_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @project/state.service */
    "./src/app/state.service.ts");
    /* harmony import */


    var _project_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @project/game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GameComponent = /*#__PURE__*/function () {
      function GameComponent(state, game) {
        _classCallCheck(this, GameComponent);

        this.state = state;
        this.game = game;
        this.unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.shouldScroll = true;
          this.incorrectInput = false;
          this.showDivider = false;
          this.input = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
          this.messages$ = this.game.chatListener$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscriber$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["scan"])(function (acc, val) {
            if (val.stop) {
              setTimeout(function () {
                return _this2.showDivider = true;
              }, 1800);

              _this2.unsubscriber$.next();

              _this2.unsubscriber$.complete();
            }

            acc.push(val);
            return acc;
          }, []));
          this.state.messageShouldScroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscriber$)).subscribe(function (boolean) {
            return _this2.shouldScroll = boolean;
          });
          this.state.messageShouldScroll$.next(true);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscriber$.next();
          this.unsubscriber$.complete();
        }
      }, {
        key: "handleInput",
        value: function handleInput() {
          if (!this.shouldHandleInput()) return;
          var value = this.input.value;

          if (value === +value) {
            this.incorrectInput = false;
            this.game.setGameParameters(+value);
            this.input.disable();
          } else {
            this.incorrectInput = true;
            this.input.setValue(null);
          }
        }
      }, {
        key: "shouldHandleInput",
        value: function shouldHandleInput() {
          return !this.input.disabled;
        }
      }, {
        key: "onInputKeyDown",
        value: function onInputKeyDown(event) {
          event.stopPropagation();
          var key = event.key || event.keyCode;

          switch (key) {
            case 'Enter':
            case 13:
              this.handleInput();
              break;

            case 'Escape':
            case 27:
              this.input.setValue(null);
              break;
          }
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ctorParameters = function () {
      return [{
        type: _project_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _project_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
      }];
    };

    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game.component.scss */
      "./src/app/game/game.component.scss")).default]
    })], GameComponent);
    /***/
  },

  /***/
  "./src/app/guesser.service.ts":
  /*!************************************!*\
    !*** ./src/app/guesser.service.ts ***!
    \************************************/

  /*! exports provided: GuesserService */

  /***/
  function srcAppGuesserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuesserService", function () {
      return GuesserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _project_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @project/state.service */
    "./src/app/state.service.ts");

    var GuesserService = /*#__PURE__*/function () {
      function GuesserService(state) {
        _classCallCheck(this, GuesserService);

        this.state = state;
        this.messagesTemplate = ['Is this', 'Maybe it\'s', 'How about', 'Could it be', 'Is it', '']; // first number is the biggest guessed number that are lesser than secret, second - the fewest that are bigger;

        this.inflectionNumbers = [null, null];
        this.step = 10;
        this.previousWay = 'more';
      }

      _createClass(GuesserService, [{
        key: "guess",
        value: function guess(way) {
          var _this3 = this;

          if (way === 'match') {
            setTimeout(function () {
              return _this3.state.chat$.next({
                text: 'Hooray!',
                person: 'guesser',
                stop: true
              });
            }, 3000);
            return;
          }

          this.handleStepLogic(way);
          var guess = way === 'more' ? this.currentGuess + Math.ceil(Math.random() * this.step) : this.currentGuess - Math.ceil(Math.random() * this.step);

          if (this.isExceedBoundaries(guess)) {
            this.step = Math.trunc(this.step / 2) || 1;
            this.guess(way);
            return;
          }

          this.previousWay = way;
          this.currentGuess = guess;
          setTimeout(function () {
            return _this3.state.chat$.next({
              text: _this3.guessedMessage(_this3.currentGuess),
              person: 'guesser'
            });
          }, 3000);
        }
      }, {
        key: "handleStepLogic",
        value: function handleStepLogic(way) {
          if (way === this.previousWay) this.step *= 2;else this.step = Math.trunc(this.step / 2) || 1;
        }
      }, {
        key: "isExceedBoundaries",
        value: function isExceedBoundaries(num) {
          if (!this.inflectionNumbers.includes(null)) {
            return this.inflectionNumbers.some(function (el, i) {
              if (el === num) return true;
              return i ? num > el : num < el;
            });
          }

          return false;
        }
      }, {
        key: "firstGuess",
        value: function firstGuess() {
          this.currentGuess = Math.ceil(Math.random() * this.step);
          this.state.chat$.next({
            text: "".concat(this.currentGuess),
            person: 'guesser'
          });
        }
      }, {
        key: "guessedMessage",
        value: function guessedMessage(guess) {
          var template = this.messagesTemplate;
          return "".concat(template[Math.floor(Math.random() * template.length)], " ").concat(guess, "?");
        }
      }, {
        key: "listenInterlocutor",
        value: function listenInterlocutor(message) {
          if (message === 'You are right!') {
            // reset properties
            this.inflectionNumbers = [null, null];
            this.previousWay = 'more';
            this.step = 10;
            return this.guess('match');
          }

          ;
          var meaningfulInfo = message.includes('more') ? 'more' : 'less';
          this.setInflectionNumber(meaningfulInfo);
          this.guess(meaningfulInfo);
        }
      }, {
        key: "setInflectionNumber",
        value: function setInflectionNumber(way) {
          if (way === 'more') this.inflectionNumbers[0] = this.currentGuess;else this.inflectionNumbers[1] = this.currentGuess;
        }
      }]);

      return GuesserService;
    }();

    GuesserService.ctorParameters = function () {
      return [{
        type: _project_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }];
    };

    GuesserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GuesserService);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxQcm9qZWN0c1xcR2FtZS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiKiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(HeaderComponent, [{
        key: "startGame",
        value: function startGame() {
          this.start.emit();
        }
      }]);

      return HeaderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "showStartGameButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HeaderComponent.prototype, "start", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/input/input.component.scss":
  /*!********************************************!*\
    !*** ./src/app/input/input.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppInputInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "fieldset {\n  position: relative;\n  height: 2.2em;\n}\nfieldset.clicked-fieldset {\n  height: 2.6em;\n  margin-top: -0.4em;\n  border: 0.1em solid #00f;\n}\nfieldset.blurred-fieldset {\n  border: 0.1em solid #787878;\n}\nfieldset.errored-fieldset {\n  border: 0.1em solid red;\n}\nfieldset legend {\n  text-align: left;\n  font-size: 0.8em;\n}\nfieldset legend span {\n  display: none;\n  visibility: hidden;\n}\nfieldset legend span.clicked-span {\n  display: block;\n}\nfieldset input {\n  width: 100%;\n  outline: none;\n  border: none;\n  caret-color: gray;\n  position: absolute;\n  bottom: 0;\n  left: 0.2em;\n  background-color: transparent;\n  height: 2.2em;\n}\nfieldset .placeholder {\n  position: absolute;\n  font-size: 1em;\n  top: calc(50% - 0.6em);\n  pointer-events: none;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\nfieldset .placeholder.clicked-placeholder {\n  top: calc(0px - 0.3em);\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvRDpcXFByb2plY3RzXFxHYW1lL3NyY1xcYXBwXFxpbnB1dFxcaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDQ1I7QURFSTtFQUNJLDJCQUFBO0FDQVI7QURHSTtFQUNJLHVCQUFBO0FDRFI7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBRElRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDRlo7QURJWTtFQUNBLGNBQUE7QUNGWjtBRE9JO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDTFI7QURRSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDTlI7QURRUTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUNOWiIsImZpbGUiOiJzcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIuMmVtO1xyXG5cclxuICAgICYuY2xpY2tlZC1maWVsZHNldCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyLjZlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMC40ZW07XHJcbiAgICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjMDBmO1xyXG4gICAgfVxyXG5cclxuICAgICYuYmx1cnJlZC1maWVsZHNldCB7XHJcbiAgICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZCByZ2IoMTIwLCAxMjAsIDEyMClcclxuICAgIH1cclxuXHJcbiAgICAmLmVycm9yZWQtZmllbGRzZXQge1xyXG4gICAgICAgIGJvcmRlcjogMC4xZW0gc29saWQgcmdiKDI1NSwgMCwgMClcclxuICAgIH1cclxuXHJcbiAgICBsZWdlbmQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICYuY2xpY2tlZC1zcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNhcmV0LWNvbG9yOiBncmF5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMC4yZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyLjJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGxhY2Vob2xkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMC42ZW0pO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICAgICAmLmNsaWNrZWQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICB0b3A6IGNhbGMoMHB4IC0gMC4zZW0pO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJmaWVsZHNldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyLjJlbTtcbn1cbmZpZWxkc2V0LmNsaWNrZWQtZmllbGRzZXQge1xuICBoZWlnaHQ6IDIuNmVtO1xuICBtYXJnaW4tdG9wOiAtMC40ZW07XG4gIGJvcmRlcjogMC4xZW0gc29saWQgIzAwZjtcbn1cbmZpZWxkc2V0LmJsdXJyZWQtZmllbGRzZXQge1xuICBib3JkZXI6IDAuMWVtIHNvbGlkICM3ODc4Nzg7XG59XG5maWVsZHNldC5lcnJvcmVkLWZpZWxkc2V0IHtcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCByZWQ7XG59XG5maWVsZHNldCBsZWdlbmQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuZmllbGRzZXQgbGVnZW5kIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5maWVsZHNldCBsZWdlbmQgc3Bhbi5jbGlja2VkLXNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmZpZWxkc2V0IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY2FyZXQtY29sb3I6IGdyYXk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwLjJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMi4yZW07XG59XG5maWVsZHNldCAucGxhY2Vob2xkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0b3A6IGNhbGMoNTAlIC0gMC42ZW0pO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5maWVsZHNldCAucGxhY2Vob2xkZXIuY2xpY2tlZC1wbGFjZWhvbGRlciB7XG4gIHRvcDogY2FsYygwcHggLSAwLjNlbSk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/input/input.component.ts":
  /*!******************************************!*\
    !*** ./src/app/input/input.component.ts ***!
    \******************************************/

  /*! exports provided: CUSTOM_INPUT_VALUE_ACCESSOR, InputComponent */

  /***/
  function srcAppInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_VALUE_ACCESSOR", function () {
      return CUSTOM_INPUT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return InputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CUSTOM_INPUT_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return InputComponent;
      }),
      multi: true
    }; // move component to playground

    var InputComponent = /*#__PURE__*/function () {
      function InputComponent(renderer) {
        _classCallCheck(this, InputComponent);

        this.renderer = renderer;
        this.blurred = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.onChange = function () {};

        this.onTouch = function () {};
      }

      _createClass(InputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.error = false;
        }
      }, {
        key: "writeValue",
        value: function writeValue(input) {
          var value;

          if (input === "".concat(+input)) {
            value = +input;
            this.error = false;
          } else {
            value = input;
            this.error = true;
            if (input === null) this.input.nativeElement.value = "";
          }

          this.onChange(value);
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouch = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
        }
      }, {
        key: "onInput",
        value: function onInput(event) {
          this.writeValue(event.target.value);
          this.onTouch();
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          if (this.error) {
            this.renderer.addClass(this.fieldset.nativeElement, 'errored-fieldset');
          } else {
            this.renderer.removeClass(this.fieldset.nativeElement, 'errored-fieldset');
            this.renderer.addClass(this.fieldset.nativeElement, 'blurred-fieldset');
          }

          this.blurred.emit();
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus() {
          this.renderer.addClass(this.animatedPlaceholder.nativeElement, 'clicked-placeholder');
          this.renderer.addClass(this.fieldset.nativeElement, 'clicked-fieldset');
          this.renderer.addClass(this.span.nativeElement, 'clicked-span');
        }
      }]);

      return InputComponent;
    }();

    InputComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], InputComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InputComponent.prototype, "blurred", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', {
      static: true
    })], InputComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animatedPlaceholder', {
      static: true
    })], InputComponent.prototype, "animatedPlaceholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fieldset', {
      static: true
    })], InputComponent.prototype, "fieldset", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('span', {
      static: true
    })], InputComponent.prototype, "span", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/input/input.component.html")).default,
      providers: [CUSTOM_INPUT_VALUE_ACCESSOR],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./input.component.scss */
      "./src/app/input/input.component.scss")).default]
    })], InputComponent);
    /***/
  },

  /***/
  "./src/app/message/message.component.scss":
  /*!************************************************!*\
    !*** ./src/app/message/message.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessageMessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  margin: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 500px;\n  max-width: 70%;\n  border-radius: 15px;\n  background-color: #a58779;\n  overflow: hidden;\n}\n:host.guesser .loader {\n  color: #fc8fe4;\n}\n.user {\n  padding: 5px;\n  background-color: #fff;\n}\n.user img {\n  display: block;\n  margin: 0 auto;\n  height: 80px;\n  width: 80px;\n  border-radius: 5px;\n}\n.user .nickname {\n  text-align: center;\n  font-size: 23px;\n  margin-bottom: 0px;\n  margin-top: 5px;\n  color: #000;\n}\n.message {\n  padding: 15px;\n  color: 18px;\n}\n.loader {\n  font-size: 14px;\n  align-self: flex-end;\n  margin-bottom: 1px;\n  color: #236692;\n  font-weight: normal;\n  -webkit-animation-name: blinking;\n          animation-name: blinking;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes blinking {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes blinking {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9EOlxcUHJvamVjdHNcXEdhbWUvc3JjXFxhcHBcXG1lc3NhZ2VcXG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FER0E7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREVJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQVI7QURHSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNEUjtBREtBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNGSjtBREtBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDRko7QURLQTtFQUNJO0lBQ0ksVUFBQTtFQ0ZOO0VES0U7SUFDSSxVQUFBO0VDSE47RURNRTtJQUNJLFVBQUE7RUNKTjtBQUNGO0FEUEE7RUFDSTtJQUNJLFVBQUE7RUNGTjtFREtFO0lBQ0ksVUFBQTtFQ0hOO0VETUU7SUFDSSxVQUFBO0VDSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxMzUsIDEyMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICYuZ3Vlc3NlciAubG9hZGVyIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1MiwgMTQzLCAyMjgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udXNlciB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubmlja25hbWUgIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogMThweDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgIGNvbG9yOiByZ2IoMzUsIDEwMiwgMTQ2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYmxpbmtpbmc7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGlua2luZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIG1hcmdpbjogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ODc3OTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0Lmd1ZXNzZXIgLmxvYWRlciB7XG4gIGNvbG9yOiAjZmM4ZmU0O1xufVxuXG4udXNlciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi51c2VyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnVzZXIgLm5pY2tuYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogMThweDtcbn1cblxuLmxvYWRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgY29sb3I6ICMyMzY2OTI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGFuaW1hdGlvbi1uYW1lOiBibGlua2luZztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5raW5nIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/message/message.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/message/message.component.ts ***!
    \**********************************************/

  /*! exports provided: MessageComponent */

  /***/
  function srcAppMessageMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
      return MessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var picturesMapper = {
      puzzler: '../assets/71560.jpg',
      guesser: '../assets/114469.png'
    };

    var MessageComponent = /*#__PURE__*/function () {
      function MessageComponent() {
        _classCallCheck(this, MessageComponent);
      }

      _createClass(MessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.showLoader = true;
          this.logoURL = picturesMapper[this.message.person];
          setTimeout(function () {
            _this4.showLoader = false;
          }, 1600);
        }
      }]);

      return MessageComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessageComponent.prototype, "message", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message.component.scss */
      "./src/app/message/message.component.scss")).default]
    })], MessageComponent);
    /***/
  },

  /***/
  "./src/app/puzzler.service.ts":
  /*!************************************!*\
    !*** ./src/app/puzzler.service.ts ***!
    \************************************/

  /*! exports provided: PuzzlerService */

  /***/
  function srcAppPuzzlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PuzzlerService", function () {
      return PuzzlerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _project_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @project/state.service */
    "./src/app/state.service.ts");

    var PuzzlerService = /*#__PURE__*/function () {
      function PuzzlerService(state) {
        _classCallCheck(this, PuzzlerService);

        this.state = state;
        this.messagesTemplate = ['No, it\'s', 'You\'re not correct, it\'s', 'Try again, it\'s', 'Actually no, it\'s'];
      }

      _createClass(PuzzlerService, [{
        key: "guessedAnswerMessage",
        value: function guessedAnswerMessage(way, guess) {
          if (way === 'match') return 'You are right!';
          var template = this.messagesTemplate;
          return "".concat(template[Math.floor(Math.random() * template.length)], " ").concat(way, " than ").concat(guess, ".");
        }
      }, {
        key: "guessAnswer",
        value: function guessAnswer(guess) {
          var _this5 = this;

          var way = this.secretNumber === guess ? 'match' : this.secretNumber > guess ? 'more' : 'less';
          setTimeout(function () {
            return _this5.state.chat$.next({
              text: _this5.guessedAnswerMessage(way, guess),
              person: 'puzzler'
            });
          }, 3000);
        }
      }, {
        key: "rememberNumber",
        value: function rememberNumber(input) {
          this.secretNumber = input;
        }
      }, {
        key: "listenInterlocutor",
        value: function listenInterlocutor(message) {
          var meaningfulInfo = message.match(/-?\d{1,}/g)[0];
          this.guessAnswer(+meaningfulInfo);
        }
      }]);

      return PuzzlerService;
    }();

    PuzzlerService.ctorParameters = function () {
      return [{
        type: _project_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }];
    };

    PuzzlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PuzzlerService);
    /***/
  },

  /***/
  "./src/app/scroll-button/scroll-button.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/scroll-button/scroll-button.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScrollButtonScrollButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  visibility: hidden;\n}\n\n.scroll-button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #34e7ff;\n  border: 2px solid #b1fff5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 30px;\n  cursor: pointer;\n  opacity: 0.75;\n}\n\n.scroll-button:hover {\n  opacity: 0.9;\n}\n\n.scroll-button:active {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsLWJ1dHRvbi9EOlxcUHJvamVjdHNcXEdhbWUvc3JjXFxhcHBcXHNjcm9sbC1idXR0b25cXHNjcm9sbC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Njcm9sbC1idXR0b24vc2Nyb2xsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0k7RUFDSSxZQUFBO0FDQ1I7O0FERUk7RUFDSSxZQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9zY3JvbGwtYnV0dG9uL3Njcm9sbC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zY3JvbGwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCAyMzEsIDI1NSk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTc3LCAyNTUsIDI0NSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnNjcm9sbC1idXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNGU3ZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiMWZmZjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC43NTtcbn1cbi5zY3JvbGwtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC45O1xufVxuLnNjcm9sbC1idXR0b246YWN0aXZlIHtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/scroll-button/scroll-button.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/scroll-button/scroll-button.component.ts ***!
    \**********************************************************/

  /*! exports provided: ScrollButtonComponent */

  /***/
  function srcAppScrollButtonScrollButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollButtonComponent", function () {
      return ScrollButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ScrollButtonComponent = /*#__PURE__*/function () {
      function ScrollButtonComponent() {
        _classCallCheck(this, ScrollButtonComponent);

        this.scrollTo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ScrollButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.arrowDirection = {
            top: '&#8648;',
            bottom: '&#8650;'
          };
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.scrollTo.emit(this.direction);
        }
      }]);

      return ScrollButtonComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScrollButtonComponent.prototype, "direction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ScrollButtonComponent.prototype, "scrollTo", void 0);
    ScrollButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scroll-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scroll-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-button/scroll-button.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scroll-button.component.scss */
      "./src/app/scroll-button/scroll-button.component.scss")).default]
    })], ScrollButtonComponent);
    /***/
  },

  /***/
  "./src/app/scroll.directive.ts":
  /*!*************************************!*\
    !*** ./src/app/scroll.directive.ts ***!
    \*************************************/

  /*! exports provided: ScrollDirective */

  /***/
  function srcAppScrollDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDirective", function () {
      return ScrollDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ScrollDirective = /*#__PURE__*/function () {
      function ScrollDirective(el) {
        _classCallCheck(this, ScrollDirective);

        this.el = el;
      }

      _createClass(ScrollDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.shouldApply) {
            this.el.nativeElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }]);

      return ScrollDirective;
    }();

    ScrollDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appScroll')], ScrollDirective.prototype, "shouldApply", void 0);
    ScrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appScroll]'
    })], ScrollDirective);
    /***/
  },

  /***/
  "./src/app/state.service.ts":
  /*!**********************************!*\
    !*** ./src/app/state.service.ts ***!
    \**********************************/

  /*! exports provided: StateService */

  /***/
  function srcAppStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return StateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StateService = function StateService() {
      _classCallCheck(this, StateService);

      //should i unsubscribe/resubscribe?
      this.chat$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      this.messageShouldScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      this.isEnded$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    };

    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StateService);
    /***/
  },

  /***/
  "./src/app/wrapper/wrapper.component.scss":
  /*!************************************************!*\
    !*** ./src/app/wrapper/wrapper.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWrapperWrapperComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  min-height: calc(100vh - 2 * var(--globalPadding));\n  max-height: calc(100vh - 2 * var(--globalPadding));\n  margin: var(--globalPadding);\n  padding: var(--globalPadding);\n  background-color: #ddd;\n  border: 1px solid #666;\n  overflow: auto;\n}\n.wrapper .scroll-buttons-container {\n  position: fixed;\n  right: 7%;\n  bottom: 15%;\n}\n.wrapper .scroll-buttons-container .show {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd3JhcHBlci9EOlxcUHJvamVjdHNcXEdhbWUvc3JjXFxhcHBcXHdyYXBwZXJcXHdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dyYXBwZXIvd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDSjtBRENJO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC93cmFwcGVyL3dyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIHZhcigtLWdsb2JhbFBhZGRpbmcpKTtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogdmFyKC0tZ2xvYmFsUGFkZGluZykpO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1nbG9iYWxQYWRkaW5nKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWdsb2JhbFBhZGRpbmcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAuc2Nyb2xsLWJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgcmlnaHQ6IDclO1xyXG4gICAgICAgIGJvdHRvbTogMTUlO1xyXG5cclxuICAgICAgICAuc2hvdyB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIgKiB2YXIoLS1nbG9iYWxQYWRkaW5nKSk7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogdmFyKC0tZ2xvYmFsUGFkZGluZykpO1xuICBtYXJnaW46IHZhcigtLWdsb2JhbFBhZGRpbmcpO1xuICBwYWRkaW5nOiB2YXIoLS1nbG9iYWxQYWRkaW5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ud3JhcHBlciAuc2Nyb2xsLWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogNyU7XG4gIGJvdHRvbTogMTUlO1xufVxuLndyYXBwZXIgLnNjcm9sbC1idXR0b25zLWNvbnRhaW5lciAuc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/wrapper/wrapper.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/wrapper/wrapper.component.ts ***!
    \**********************************************/

  /*! exports provided: WrapperComponent */

  /***/
  function srcAppWrapperWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrapperComponent", function () {
      return WrapperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _project_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @project/state.service */
    "./src/app/state.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _project_game_anchor_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @project/game-anchor.directive */
    "./src/app/game-anchor.directive.ts");
    /* harmony import */


    var _project_game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @project/game/game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _project_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @project/footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var WrapperComponent = /*#__PURE__*/function () {
      function WrapperComponent(state, renderer, resolver) {
        _classCallCheck(this, WrapperComponent);

        this.state = state;
        this.renderer = renderer;
        this.resolver = resolver;
        this.unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.GameComponent = _project_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"];
      }

      _createClass(WrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.showScrollButtons = false;
          this.showScrollTopButton = false;
          this.showScrollBottomButton = false;
          this.showStartGameButton = true;
          this.state.isEnded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscriber$)).subscribe(function (shouldShow) {
            _this6.showFooter = shouldShow;

            if (shouldShow) {
              setTimeout(function () {
                _this6.footer.wrapper.nativeElement.scrollIntoView({
                  block: 'end',
                  behavior: 'smooth'
                });

                _this6.showScrollBottomButton = false;
              });
            }
          });
          this.state.messageShouldScroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscriber$)).subscribe(function (boolean) {
            _this6.shouldUpdateMessageShouldScroll = boolean;
            _this6.showScrollBottomButton = !boolean;
          });
          this.state.chat$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscriber$)).subscribe(function (_) {
            return _this6.onScroll();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          this.renderer.listen(this.wrapper.nativeElement, 'wheel', function ($event) {
            if (_this7.wrapper.nativeElement.scrollHeight !== _this7.wrapper.nativeElement.clientHeight) {
              var element = _this7.wrapper.nativeElement;
              var isScrolledBot = element.scrollTop + $event.deltaY >= element.scrollHeight - element.clientHeight;

              if (_this7.shouldUpdateMessageShouldScroll && !isScrolledBot) {
                _this7.state.messageShouldScroll$.next(false);

                return;
              }

              if (isScrolledBot) {
                _this7.state.messageShouldScroll$.next(true);
              }
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscriber$.next();
          this.unsubscriber$.complete();
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          if (this.showScrollButtons) {
            if (this.wrapper.nativeElement.scrollTop > 50) {
              this.showScrollTopButton = true;
            }

            if (this.wrapper.nativeElement.scrollTop < 50) {
              this.showScrollTopButton = false;
            }
          }
        }
      }, {
        key: "startGame",
        value: function startGame() {
          var _this8 = this;

          this.showStartGameButton = false;
          this.state.isEnded$.next(false);
          var onScroll = this.renderer.listen(this.wrapper.nativeElement, 'scroll', function () {
            _this8.showScrollButtons = true;
            onScroll();
          });
          var componentFactory = this.resolver.resolveComponentFactory(this.GameComponent);
          var viewContainerRef = this.gameContainer.viewRef;
          viewContainerRef.createComponent(componentFactory);
        }
      }, {
        key: "endGame",
        value: function endGame() {
          this.showFooter = false;
          this.showStartGameButton = true;
          this.showScrollButtons = false;
          this.gameContainer.viewRef.clear();
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(way) {
          if (way === 'top') {
            this.state.messageShouldScroll$.next(false);
            this.contentContainer.nativeElement.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          }

          if (way === 'bottom') {
            this.state.messageShouldScroll$.next(true);
            this.contentContainer.nativeElement.scrollIntoView({
              block: 'end',
              behavior: 'smooth'
            });
          }
        }
      }]);

      return WrapperComponent;
    }();

    WrapperComponent.ctorParameters = function () {
      return [{
        type: _project_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentContainer', {
      static: false
    })], WrapperComponent.prototype, "contentContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wrapper', {
      static: false
    })], WrapperComponent.prototype, "wrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_project_game_anchor_directive__WEBPACK_IMPORTED_MODULE_5__["GameAnchorDirective"], {
      static: true
    })], WrapperComponent.prototype, "gameContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_project_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], {
      static: false
    })], WrapperComponent.prototype, "footer", void 0);
    WrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wrapper',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wrapper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wrapper/wrapper.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wrapper.component.scss */
      "./src/app/wrapper/wrapper.component.scss")).default]
    })], WrapperComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\Game\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map