(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(oktaAuth, router) {
        var _this = this;
        this.oktaAuth = oktaAuth;
        this.router = router;
        // Subscribe to authentication state changes
        this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Get the authentication state for immediate use
                        _a = this;
                        return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                    case 1:
                        // Get the authentication state for immediate use
                        _a.isAuthenticated = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.login = function () {
        this.oktaAuth.loginRedirect('/dashboard');
    };
    AppComponent.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Terminates the session with Okta and removes current tokens.
                    return [4 /*yield*/, this.oktaAuth.logout()];
                    case 1:
                        // Terminates the session with Okta and removes current tokens.
                        _a.sent();
                        this.router.navigateByUrl('/');
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: onAuthRequired, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAuthRequired", function() { return onAuthRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _dashboard_highlight_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/highlight.directive */ "./src/app/dashboard/highlight.directive.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _utilities_stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utilities/stock-market/stock-market.component */ "./src/app/utilities/stock-market/stock-market.component.ts");
/* harmony import */ var _info_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./info/privacy/privacy.component */ "./src/app/info/privacy/privacy.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _info_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./info/contact/contact.component */ "./src/app/info/contact/contact.component.ts");
/* harmony import */ var _info_to_s_to_s_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./info/to-s/to-s.component */ "./src/app/info/to-s/to-s.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var config = {
    issuer: 'https://dev-713629.oktapreview.com/oauth2/default',
    redirectUri: 'https://tsnvs.com/implicit/callback',
    clientId: '0oaffjdfgpI5dUuIE0h7',
    idps: [
        { type: 'FACEBOOK', id: '0oaffxvx65klCzKXz0h7' }
    ]
};
function onAuthRequired(_a) {
    var oktaAuth = _a.oktaAuth, router = _a.router;
    // Redirect the user to your custom login page
    router.navigate(['/login']);
}
var appRoutes = [
    {
        path: '',
        canActivate: [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthGuard"]],
        data: {
            onAuthRequired: onAuthRequired
        },
        children: [
            {
                path: '',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
            },
            {
                path: 'profile',
                component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'info',
        component: _info_info_component__WEBPACK_IMPORTED_MODULE_16__["InfoComponent"],
        children: [
            {
                path: 'privacy',
                component: _info_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_15__["PrivacyComponent"]
            },
            {
                path: 'contact',
                component: _info_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"]
            },
            {
                path: 'tos',
                component: _info_to_s_to_s_component__WEBPACK_IMPORTED_MODULE_18__["ToSComponent"]
            }
        ]
    },
    {
        path: 'implicit/callback',
        component: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaCallbackComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _dashboard_highlight_directive__WEBPACK_IMPORTED_MODULE_11__["HighlightDirective"],
                _utilities_stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_14__["StockMarketComponent"],
                _info_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_15__["PrivacyComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_16__["InfoComponent"],
                _info_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _info_to_s_to_s_component__WEBPACK_IMPORTED_MODULE_18__["ToSComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthModule"].initAuth(config),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__["AngularFontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"jumbotron jumbotron-fluid\" *ngIf=\"showTitle;then fullTitle else smallTitle\"></div>\n\n<ng-template #smallTitle>\n  <div class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\"><i class=\"fa fa-columns\"></i> Dashboard</a>\n    <a class=\"nav-item text-right\"><i class=\"fa fa-angle-down fa-3x\" (click)=\"toggleTitle()\"></i></a>\n  </div>\n  <br>\n</ng-template>\n\n<ng-template #fullTitle>\n  <div class=\"jumbotron jumbotron-fluid\" (click)=\"toggleTitle\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-10\"><h1 class=\"display-4\"><i class=\"fa fa-columns\"></i> Dashboard</h1></div>\n        <div class=\"col-sm-2 text-right align-middle\"><i class=\"fa fa-angle-up fa-3x\" (click)=\"toggleTitle()\"></i></div>\n      </div>\n      <hr>\n      <p class=\"lead\">This is your user center. You can see what you can manage concerning your account level on this page.</p>\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"card border-light mb-3\" routerLink=\"profile\" style=\"max-width: 18rem;\" appHighlightDashboard>\n      <div class=\"card-header\">Profile settings</div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Update your profile information</h5>\n        <p class=\"card-text\">You can update your profile settings by connecting your account to one of our provided authentication services.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(oktaAuth) {
        var _this = this;
        this.oktaAuth = oktaAuth;
        // Subscribe to authentication state changes
        this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Get the authentication state for immediate use
                        _a = this;
                        return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                    case 1:
                        // Get the authentication state for immediate use
                        _a.isAuthenticated = _b.sent();
                        // Show the full title
                        this.showTitle = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.toggleTitle = function () {
        if (this.showTitle) {
            this.showTitle = false;
        }
        else {
            this.showTitle = true;
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secure',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/highlight.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/highlight.directive.ts ***!
  \**************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        this.el = el;
    }
    HighlightDirective.prototype.onMouseOver = function () {
        this.el.nativeElement.className = "shadow rounded card border-light mb-12";
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.el.nativeElement.className = "card border-light mb-3";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlightDashboard]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<script type=\"application/javascript\">\n  $(function () {\n    $('[data-toggle=\"tooltip\"]').tooltip()\n  })\n</script>\n\n<div class=\"jumbotron jumbotron-fluid\" *ngIf=\"showTitle;then fullTitle else smallTitle\"></div>\n\n<ng-template #smallTitle>\n  <div class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\"><i class=\"fa fa-cog\"></i> Profile settings</a>\n    <a class=\"nav-item text-right\"><i class=\"fa fa-angle-down fa-3x\" (click)=\"toggleTitle()\"></i></a>\n  </div>\n</ng-template>\n\n<ng-template #fullTitle>\n  <div class=\"jumbotron jumbotron-fluid\" (click)=\"toggleTitle\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-10\"><h1 class=\"display-4\"><i class=\"fa fa-cog\"></i> Profile settings</h1></div>\n        <div class=\"col-sm-2 text-right align-middle\"><i class=\"fa fa-angle-up fa-3x\" (click)=\"toggleTitle()\"></i></div>\n      </div>\n      <hr>\n      <p class=\"lead\">You can change your essential profile settings here. The changes are validated on the fly, so your changes will be saved automatic immediately</p>\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"container\">\n  <form *ngIf=\"user$ | async as user\" class=\"col-sm-10\">\n    <div class=\"form-row\">\n      <label for=\"userid\" class=\"col-sm-2 col-form-label text-right\">ID</label>\n      <div class=\"col-sm-10\">\n        <p id=\"userid\" class=\"form-control-plaintext text-muted\">{{user.id}}</p>\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <label for=\"firstName\" class=\"col-sm-2 col-form-label text-right\">Full name</label>\n      <div class=\"form-group col-md-5\">\n        <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"First name\" [value]=\"user.profile.firstName\" readonly>\n      </div>\n      <div class=\"form-group col-md-5\">\n        <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"Last name\" [value]=\"user.profile.lastName\" readonly>\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-right\">Email</label>\n      <div class=\"form-group col-sm-10\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <i class=\"fa fa-times text-danger\" *ngIf=\"user.credentials.emails[0].status;then verified else not_verified\"></i>\n              <ng-template #verified><i class=\"fa fa-check text-success\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Your email is verified!\"></i></ng-template>\n              <ng-template #not_verified><i class=\"fa fa-times text-danger\" data-toggle=\"tooltip\" data-html=\"true\" data-placement=\"left\" title=\"Your email is not yet verified. <i class='fa fa-repeat'></i>Resend verification\"></i></ng-template>\n            </div>\n          </div>\n          <input type=\"text\" class=\"form-control\" id=\"staticEmail\" [value]=\"user.profile.email\" placeholder=\"Email\" readonly>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <label for=\"inputPassword\" class=\"col-sm-2 col-form-label text-right\">Password</label>\n      <div class=\"form-group col-sm-10\">\n        <div class=\"input-group\">\n          <input type=\"password\" id=\"inputPassword\" class=\"form-control\" aria-describedby=\"passwordHelpBlock\" placeholder=\"Type your new password..\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changePassword()\">Change password</button>\n          </div>\n        </div>\n        <small id=\"passwordHelpBlock\" class=\"form-text text-muted\">\n          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.\n        </small>\n      </div>\n    </div>\n  </form>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(oktaAuth, http) {
        var _this = this;
        this.oktaAuth = oktaAuth;
        this.http = http;
        // Subscribe to authentication state changes
        this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        if (this.isAuthenticated) {
            this.user$ = this.oktaAuth.getUser();
            // Get current user access token
            // const accessToken = this.oktaAuth.getAccessToken().accessToken;
            // Get user information
            // const userInfo = this.oktaAuth.getOktaAuth().token.getUserInfo(accessToken);
            console.log(this.oktaAuth.getAccessToken());
            // Prepare httpHeaders
            this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/json').set('Accept', 'application/json');
            // Get user profile information of logged in user through GET
            this.user$ = this.http.get('https://dev-713629.oktapreview.com/api/v1/usersinfo', { headers: this.httpHeaders });
            //  .subscribe((user) => {
            //    this.user$ = user;
            // });
            console.log('user$' + this.user$);
            //console.log('userInfo: ' + userInfo);
        }
        // Show the full title
        this.showTitle = true;
    };
    ProfileComponent.prototype.changePassword = function () {
        console.log('changePassword() called');
    };
    ProfileComponent.prototype.toggleTitle = function () {
        if (this.showTitle) {
            this.showTitle = false;
        }
        else {
            this.showTitle = true;
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dashboard/profile/profile.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/info/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/info/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: "\n    <p>\n      contact works!\n    </p>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/info/privacy/privacy.component.html":
/*!*****************************************************!*\
  !*** ./src/app/info/privacy/privacy.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" *ngIf=\"showTitle;then fullTitle else smallTitle\"></div>\n\n<ng-template #smallTitle>\n  <div class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\"><i class=\"fa fa-gavel\"></i> Privacy Policy</a>\n    <a class=\"nav-item text-right\"><i class=\"fa fa-angle-down fa-3x\" (click)=\"toggleTitle()\"></i></a>\n  </div>\n  <br>\n</ng-template>\n\n<ng-template #fullTitle>\n  <div class=\"jumbotron jumbotron-fluid\" (click)=\"toggleTitle\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-10\"><h1 class=\"display-4\"><i class=\"fa fa-gavel\"></i> Privacy Policy</h1></div>\n        <div class=\"col-sm-2 text-right align-middle\"><i class=\"fa fa-angle-up fa-3x\" (click)=\"toggleTitle()\"></i></div>\n      </div>\n      <hr>\n      <p class=\"lead\"><em>Effective date: June 12th, 2018</em></p>\n      <p>Tensation Virtual Services (\"us\", \"we\", or \"our\") operates the https://tsnvs.com website (the \"Service\").</p>\n      <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. This Privacy Policy  for Tensation Virtual Services is powered by <a href=\"https://privacypolicies.com/\">PrivacyPolicies.com</a>.</p>\n      <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://tsnvs.com</p>\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"container\">\n  <h2>Information Collection And Use</h2>\n  <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>\n\n  <h3>Types of Data Collected</h3>\n\n  <h4>Personal Data</h4>\n  <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but is not limited to:</p>\n  <ul>\n    <li>Email address</li><li>First name and last name</li><li>Address, State, Province, ZIP/Postal code, City</li><li>Cookies and Usage Data</li>\n  </ul>\n\n  <h4>Usage Data</h4>\n  <p>We may also collect information how the Service is accessed and used (\"Usage Data\"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>\n\n  <h4>Tracking &amp; Cookies Data</h4>\n  <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>\n  <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>\n  <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>\n  <p>Examples of Cookies we use:</p>\n  <ul>\n    <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>\n    <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>\n    <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>\n  </ul>\n\n  <h2>Use of Data</h2>\n\n  <p>Tensation Virtual Services uses the collected data for various purposes:</p>\n  <ul>\n    <li>To provide and maintain the Service</li>\n    <li>To notify you about changes to our Service</li>\n    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>\n    <li>To provide customer care and support</li>\n    <li>To provide analysis or valuable information so that we can improve the Service</li>\n    <li>To monitor the usage of the Service</li>\n    <li>To detect, prevent and address technical issues</li>\n  </ul>\n\n  <h2>Transfer Of Data</h2>\n  <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>\n  <p>If you are located outside Netherlands and choose to provide information to us, please note that we transfer the data, including Personal Data, to Netherlands and process it there.</p>\n  <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>\n  <p>Tensation Virtual Services will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>\n\n  <h2>Disclosure Of Data</h2>\n\n  <h3>Legal Requirements</h3>\n  <p>Tensation Virtual Services may disclose your Personal Data in the good faith belief that such action is necessary to:</p>\n  <ul>\n    <li>To comply with a legal obligation</li>\n    <li>To protect and defend the rights or property of Tensation Virtual Services</li>\n    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>\n    <li>To protect the personal safety of users of the Service or the public</li>\n    <li>To protect against legal liability</li>\n  </ul>\n\n  <h2>Security Of Data</h2>\n  <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>\n\n  <h2>Service Providers</h2>\n  <p>We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>\n  <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>\n\n  <h3>Analytics</h3>\n  <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>\n  <ul>\n    <li>\n      <p><strong>Google Analytics</strong></p>\n      <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>\n      <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>                <p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href=\"https://policies.google.com/privacy?hl=en\">https://policies.google.com/privacy?hl=en</a></p>\n    </li>\n  </ul>\n\n\n  <h2>Links To Other Sites</h2>\n  <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>\n  <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>\n\n\n  <h2>Children's Privacy</h2>\n  <p>Our Service does not address anyone under the age of 18 (\"Children\").</p>\n  <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>\n\n\n  <h2>Changes To This Privacy Policy</h2>\n  <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>\n  <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the \"effective date\" at the top of this Privacy Policy.</p>\n  <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\n\n\n  <h2>Contact Us</h2>\n  <p>If you have any questions about this Privacy Policy, please contact us:</p>\n  <ul>\n    <li>By email: privacy@tsnvs.com</li>\n    <li>By visiting this page on our website: http://tsnvs.com/contact</li>\n  </ul>\n  <p>This privacy policy was generated from PrivacyPolicies.com. The original policy can <a href=\"https://privacypolicies.com/privacy/view/f48ef4ccc00cff160562b048bc80fdd2\">be viewed here</a>.\n</div>\n\n<script data-cfasync=\"false\" src=\"/cdn-cgi/scripts/af2821b0/cloudflare-static/email-decode.min.js\"></script>\n"

/***/ }),

/***/ "./src/app/info/privacy/privacy.component.ts":
/*!***************************************************!*\
  !*** ./src/app/info/privacy/privacy.component.ts ***!
  \***************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        this.showTitle = true;
    };
    PrivacyComponent.prototype.toggleTitle = function () {
        if (this.showTitle) {
            this.showTitle = false;
        }
        else {
            this.showTitle = true;
        }
    };
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/info/privacy/privacy.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/info/to-s/to-s.component.html":
/*!***********************************************!*\
  !*** ./src/app/info/to-s/to-s.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" *ngIf=\"showTitle;then fullTitle else smallTitle\"></div>\n\n<ng-template #smallTitle>\n  <div class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\"><i class=\"fa fa-list-ol\"></i> Terms of Service</a>\n    <a class=\"nav-item text-right\"><i class=\"fa fa-angle-down fa-3x\" (click)=\"toggleTitle()\"></i></a>\n  </div>\n  <br>\n</ng-template>\n\n<ng-template #fullTitle>\n  <div class=\"jumbotron jumbotron-fluid\" (click)=\"toggleTitle\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-10\"><h1 class=\"display-4\"><i class=\"fa fa-list-ol\"></i> Terms of Service</h1></div>\n        <div class=\"col-sm-2 text-right align-middle\"><i class=\"fa fa-angle-up fa-3x\" (click)=\"toggleTitle()\"></i></div>\n      </div>\n      <hr>\n      <p class=\"lead\"><em>Effective date: tba</em></p>\n    </div>\n  </div>\n</ng-template>\n<div class=\"container\">\n  Currently the application is set to <span class=\"text-danger font-weight-bold\">invite-only</span>.\n  Registrations are not allowed and can only be issued by using the contact form.\n</div>\n"

/***/ }),

/***/ "./src/app/info/to-s/to-s.component.ts":
/*!*********************************************!*\
  !*** ./src/app/info/to-s/to-s.component.ts ***!
  \*********************************************/
/*! exports provided: ToSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToSComponent", function() { return ToSComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToSComponent = /** @class */ (function () {
    function ToSComponent() {
    }
    ToSComponent.prototype.ngOnInit = function () {
        // Show full title on startup
        this.showTitle = true;
    };
    ToSComponent.prototype.toggleTitle = function () {
        if (this.showTitle) {
            this.showTitle = false;
        }
        else {
            this.showTitle = true;
        }
    };
    ToSComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-to-s',
            template: __webpack_require__(/*! ./to-s.component.html */ "./src/app/info/to-s/to-s.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ToSComponent);
    return ToSComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/info/contact\">Contact</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/info/privacy\">Privacy Policy</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/info/tos\">Terms of Service</a></li>\n  </ul>\n  <span class=\"navbar-text\">\n    <small>Copyright &copy; 2018-present tsnvs.com</small>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark sticky-top\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"#\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    tsnvs.com <span class=\"badge badge-secondary badge-light\">BETA</span>\n  </a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" *ngIf=\"isAuthenticated\">\n        <a class=\"nav-link\" routerLink=\"/\">Dashboard <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n\n  <form class=\"form-inline\">\n    <button class=\"btn btn-outline-info\" type=\"button\" *ngIf=\"!isAuthenticated\" (click)=\"login()\">Login</button>\n    <button class=\"btn btn-outline-danger\" type=\"button\" *ngIf=\"isAuthenticated\" (click)=\"logout()\">Logout</button>\n  </form>\n</nav><!--nav//-->\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(oktaAuth) {
        var _this = this;
        this.oktaAuth = oktaAuth;
        // Subscribe to authentication state changes
        this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Get the authentication state for immediate use
                        _a = this;
                        return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                    case 1:
                        // Get the authentication state for immediate use
                        _a.isAuthenticated = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.oktaAuth.logout('/');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\n  href=\"https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.6.0/css/okta-sign-in.min.css\"\n  type=\"text/css\"\n  rel=\"stylesheet\"/>\n<link\n  href=\"https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.6.0/css/okta-theme.css\"\n  type=\"text/css\"\n  rel=\"stylesheet\"/>\n\n<div id=\"okta-signin-container\"></div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-signin-widget */ "./node_modules/@okta/okta-signin-widget/dist/js/okta-sign-in.entry.js");
/* harmony import */ var _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(oktaAuth, router) {
        var _this = this;
        this.oktaAuth = oktaAuth;
        this.router = router;
        this.widget = new _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_2__({
            baseUrl: 'https://dev-713629.oktapreview.com',
            idpDiscovery: {
                requestContext: '/a/app/request/context'
            },
            features: {
                idpDiscovery: false
            }
        });
        this.signIn = oktaAuth;
        // Show the widget when prompted, otherwise remove it from the DOM.
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                switch (event.url) {
                    case '/login':
                        break;
                    case '/':
                        break;
                    case '/profile':
                        break;
                    default:
                        _this.widget.remove();
                        break;
                }
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widget.renderEl({
            el: '#okta-signin-container'
        }, function (res) {
            // Check if idpDiscovery is enabled in Org (still early access!)
            if (res.status === 'IDP_DISCOVERY') {
                res.idpDiscovery.redirectToIdp(_this.widget.idpDiscovery.requestContext);
                return;
            }
            // On success status response, redirect
            if (res.status === 'SUCCESS') {
                _this.signIn.loginRedirect('/', { sessionToken: res.session.token });
                // Hide the widget
                _this.widget.hide();
            }
        }, function (err) {
            throw err;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secure',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/utilities/stock-market/stock-market.component.html":
/*!********************************************************************!*\
  !*** ./src/app/utilities/stock-market/stock-market.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utilities/stock-market/stock-market.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/utilities/stock-market/stock-market.component.ts ***!
  \******************************************************************/
/*! exports provided: StockMarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMarketComponent", function() { return StockMarketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var StockMarketComponent = /** @class */ (function () {
    function StockMarketComponent(oktaAuth, http) {
        var _this = this;
        this.oktaAuth = oktaAuth;
        this.http = http;
        // Subscribe to authentication state changes
        this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
        // alphaVintage API key
        this.alphaVintageApiKey = 'WOJX599DDG5VUN77';
    }
    StockMarketComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // When component is used, call cryptomarket stocks
                        _a = this;
                        return [4 /*yield*/, this.http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=EUR&apikey=WOJX599DDG5VUN77').toPromise()];
                    case 1:
                        // When component is used, call cryptomarket stocks
                        _a.cryptoStocksIntraday$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StockMarketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-market',
            template: __webpack_require__(/*! ./stock-market.component.html */ "./src/app/utilities/stock-market/stock-market.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StockMarketComponent);
    return StockMarketComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/christopher.schmidt/Documents/Development/Projects/Web/tsnvs.com/tsnvs/frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** xhr2 (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map