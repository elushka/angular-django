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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
/* harmony import */ var _pages_add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add/add.component */ "./src/app/pages/add/add.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'details/:city', component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
    { path: 'add', component: _pages_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root__container {\n  width: 100vw;\n  height: 100vh;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto;\n      grid-template-columns: auto;\n  -ms-grid-rows: 0.5fr auto;\n      grid-template-rows: 0.5fr auto;\n  position: relative;\n}\n\n/*\n================\n    Header\n================\n*/\n\n/*\n    Slide Menu\n= = = = = = = = =\n*/\n\n.side-menu__container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 25;\n}\n\n.side-menu__container-active {\n  pointer-events: auto;\n}\n\n.side-menu__container::before {\n  content: '';\n  cursor: pointer;\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #0c1066;\n  opacity: 0;\n  transition: opacity 300ms linear;\n  will-change: opacity;\n}\n\n.side-menu__container-active::before {\n  opacity: 0.3;\n}\n\n.slide-menu {\n  box-sizing: border-box;\n  -webkit-transform: translateX(-103%);\n          transform: translateX(-103%);\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  height: 100%;\n  width: 90%;\n  max-width: 26rem;\n  background-color: white;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: 2fr 4fr 1fr;\n      grid-template-rows: 2fr 4fr 1fr;\n  grid-gap: 1rem;\n  transition: -webkit-transform 300ms linear;\n  transition: transform 300ms linear;\n  transition: transform 300ms linear, -webkit-transform 300ms linear;\n  will-change: transform;\n}\n\n.slide-menu-active {\n  -webkit-transform: none;\n          transform: none;\n}\n\n.menu-header {\n  background: linear-gradient(to right, #00FF9B, #5f84fb);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr 4fr;\n      grid-template-rows: 1fr 4fr;\n  -ms-grid-columns: 1fr 4fr;\n      grid-template-columns: 1fr 4fr;\n      grid-template-areas: \"greeting greeting\" \"image details\";\n  box-sizing: border-box;\n  width: 100%;\n  align-content: center;\n  color: white;\n  box-shadow: 0 0.5rem 2rem rgba(0, 0, 255, 0.2);\n}\n\n.greeting__text {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: greeting;\n  font-size: 1.25rem;\n  letter-spacing: 0.15rem;\n  text-transform: uppercase;\n  margin-top: 1rem;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.account-details {\n  -ms-grid-row: 2;\n  -ms-grid-column: 2;\n  grid-area: details;\n  display: flex;\n  flex-flow: column;\n  margin-left: 1rem;\n  align-self: center;\n}\n\n.name__text {\n  font-size: 1.15rem;\n  margin-bottom: 0.5rem;\n}\n\n.email__text {\n  font-size: 0.9rem;\n  letter-spacing: 0.1rem;\n}\n\n.menu-body {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n}\n\n.profile-image__container {\n  -ms-grid-row: 2;\n  -ms-grid-column: 1;\n  grid-area: image;\n  margin-right: 0.5rem;\n  border-radius: 50%;\n  height: 4rem;\n  width: 4rem;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  align-self: center;\n  margin-left: 2rem;\n}\n\n.profile__image {\n  max-width: 4rem;\n}\n\n/*Header*/\n\n.main__header {\n  width: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 0.25fr;\n      grid-template-columns: 1fr 1fr 0.25fr;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  height: 4rem;\n  margin: 0;\n  align-items: center;\n  transition: background-color 500ms linear;\n  -webkit-animation: fadein 1s ease-in-out 0ms 1;\n          animation: fadein 1s ease-in-out 0ms 1;\n}\n\n.main__header-dark {\n  background-color: #2B244D;\n  color: white;\n}\n\n.toggle-button__container {\n  cursor: pointer;\n  position: relative;\n  margin: 0 0.5rem;\n}\n\n.mode-toggle__input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n.mode-toggle__bg {\n  height: 1rem;\n  width: 2rem;\n  border-radius: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: inline-block;\n  transition: background-color 300ms linear;\n}\n\n.mode-toggle__circle {\n  height: 1.30rem;\n  width: 1.30rem;\n  background-color: #2B244D;\n  position: absolute;\n  top: -0.2rem;\n  border-radius: 50%;\n  box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);\n  transition: left 300ms linear;\n  left: 0.1rem;\n}\n\n.mode-toggle__circle-checked {\n  background-color: white;\n  left: 1.75rem;\n}\n\n.mode-toggle__bg-checked {\n  background-color: #FF0070;\n}\n\n.mode-toggle__text {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n}\n\n/*Content*/\n\n.left__section {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  max-width: 5rem;\n}\n\n.date__text {\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  display: inline;\n  margin: 0.5rem 0;\n}\n\n/*SVGs*/\n\n.hamburger__icon {\n  position: relative;\n  z-index: 35;\n  height: 1rem;\n  padding: 0.5rem 1.5rem;\n  margin-right: 1rem;\n  cursor: pointer;\n}\n\n.logo__icon {\n  height: 2rem;\n  margin-left: 1rem;\n}\n\n.logo__text {\n  fill: #2B244D;\n}\n\n.logo__text-dark {\n  fill: #ffff;\n}\n\n.hamburger__icon__fill {\n  fill: #2B244D;\n}\n\n.hamburger__icon__fill-dark {\n  fill: #ffff;\n}\n\n/*\n================\n    Body\n================\n*/\n\n.main-container__bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  opacity: 0;\n  background: white;\n  transition: opacity 300ms linear;\n}\n\n.main-container__bg-dark {\n  opacity: 1;\n  background: linear-gradient(to bottom, #B290FF, #2E1D65);\n  transition: opacity 300ms linear;\n}\n\n/*\n================-\n    Footer\n================\n*/\n\n.main__footer {\n  background: transparent;\n  position: absolute;\n  bottom: 1rem;\n  left: 1.5rem;\n  z-index: 100;\n}\n\n.copyright__text {\n  letter-spacing: 0.1rem;\n  color: white;\n}\n\n@media only screen and (max-width: 300px) {\n  .slide-menu {\n    width: 100%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Slide Menu-->\n<aside class=\"side-menu__container\" [ngClass]=\"{'side-menu__container-active': showMenu}\" (click)=\"toggleMenu()\">\n  <nav class=\"slide-menu\" [ngClass]=\"{'slide-menu-active': showMenu}\" (click)=\"$event.stopImmediatePropagation();\">\n    <section class=\"menu-header\">\n      <span class=\"greeting__text\">Welcome Back</span>\n      <div class=\"profile-image__container\">\n        <img src=\"https://avatars3.githubusercontent.com/u/5658460?s=460&v=4\" alt=\"profile-image\"\n             class=\"profile__image\">\n      </div>\n      <div class=\"account-details\">\n        <span class=\"name__text\">Hamed Baatour</span>\n        <span class=\"email__text\">hamedbaatour@gmail.com</span>\n      </div>\n    </section>\n    <section class=\"menu-body\">\n\n    </section>\n    <section class=\"menu-footer\">\n\n    </section>\n  </nav>\n</aside>\n\n<div class=\"root__container\">\n  <header [ngClass]=\"{'main__header-dark': darkModeActive}\" class=\"main__header\">\n\n    <div class=\"left__section\">\n      <svg (click)=\"toggleMenu()\" class=\"hamburger__icon\" id=\"Menu_Burger_Icon\" data-name=\"Menu Burger Icon\"\n           viewBox=\"31.5 30 49.9 32\">\n        <defs>\n          <style>.hamburger__icon__fill {\n            fill: #594e78\n          }</style>\n        </defs>\n        <rect id=\"Rectangle_9\" width=\"49.9\" height=\"4\" [ngClass]=\"{'hamburger__icon__fill-dark': darkModeActive}\"\n              class=\"hamburger__icon__fill\" data-name=\"Rectangle 9\" rx=\"2\"\n              transform=\"translate(31.5 58)\"/>\n        <rect id=\"Rectangle_10\" width=\"49.9\" height=\"4\" [ngClass]=\"{'hamburger__icon__fill-dark': darkModeActive}\"\n              class=\"hamburger__icon__fill\" data-name=\"Rectangle 10\" rx=\"2\"\n              transform=\"translate(31.5 44)\"/>\n        <rect id=\"Rectangle_11\" width=\"49.9\" height=\"4\" [ngClass]=\"{'hamburger__icon__fill-dark': darkModeActive}\"\n              class=\"hamburger__icon__fill\" data-name=\"Rectangle 11\" rx=\"2\"\n              transform=\"translate(31.5 30)\"/>\n      </svg>\n\n      <svg class=\"logo__icon\" viewBox=\"150.3 22.2 213.7 42.8\">\n        <path fill=\"#00ff9b\" d=\"M150.3 65V22.2L193 65z\" data-name=\"Path 1\"/>\n        <path fill=\"#003eff\" d=\"M193.1 65h-42.8L193 22.2z\" data-name=\"Path 2\"/>\n        <text [ngClass]=\"{'logo__text-dark': darkModeActive}\" class=\"logo__text\" fill=\"#432c85\"\n              font-family=\"SegoeUI-Semibold,Segoe UI\" font-size=\"30\" font-weight=\"600\"\n              letter-spacing=\".1em\" transform=\"translate(237 56)\">\n          <tspan x=\"0\" y=\"0\">Minimis</tspan>\n        </text>\n      </svg>\n\n    </div>\n\n    <h3 class=\"date__text\">Today</h3>\n\n\n    <div class=\"mode-toggle__container\">\n      <span class=\"mode-toggle__text\">Light</span>\n\n      <label class=\"toggle-button__container\">\n        <input (click)=\"modeToggleSwitch()\" type=\"checkbox\" class=\"mode-toggle__input\"/>\n        <span [ngClass]=\"{'mode-toggle__bg-checked': darkModeActive}\" class=\"mode-toggle__bg\"></span>\n        <span [ngClass]=\"{'mode-toggle__circle-checked': darkModeActive}\" class=\"mode-toggle__circle\"></span>\n      </label>\n\n\n      <span class=\"mode-toggle__text\">Dark</span>\n    </div>\n\n  </header>\n\n  <!-- Main Content -->\n\n  <!--<router-outlet></router-outlet>-->\n  <main class=\"main__container\">\n    <div class=\"main-container__bg\" [ngClass]=\"{'main-container__bg-dark': darkModeActive}\"></div>\n    <router-outlet></router-outlet>\n  </main>\n\n  <!-- Footer -->\n\n  <footer class=\"main__footer\">\n    <small class=\"copyright__text\">Copyright © 2018 Minimus</small>\n  </footer>\n</div>\n"

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
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ui) {
        this.ui = ui;
        this.showMenu = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ui.darkModeState.subscribe(function (value) {
            _this.darkModeActive = value;
        });
    };
    AppComponent.prototype.toggleMenu = function () {
        this.showMenu = !this.showMenu;
    };
    AppComponent.prototype.modeToggleSwitch = function () {
        this.ui.darkModeState.next(!this.darkModeActive);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
/* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/weather-card/weather-card.component */ "./src/app/ui/weather-card/weather-card.component.ts");
/* harmony import */ var _ui_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/add-card/add-card.component */ "./src/app/ui/add-card/add-card.component.ts");
/* harmony import */ var _pages_add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/add/add.component */ "./src/app/pages/add/add.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _pages_details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
                _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_8__["WeatherCardComponent"],
                _ui_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_9__["AddCardComponent"],
                _pages_add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _ui_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_9__["AddCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ],
            providers: [
                _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_6__["WeatherService"],
                _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_13__["UiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/add/add.component.css":
/*!*********************************************!*\
  !*** ./src/app/pages/add/add.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add/add.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/add/add.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/add/add.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/add/add.component.ts ***!
  \********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
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

var AddComponent = /** @class */ (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/pages/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/pages/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/details/details.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/details/details.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-page__wrapper-dark {\n  background: linear-gradient(#FC7DB8, #495CFC);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.background-gradient__circle {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 1;\n  height: 120%;\n}\n\n.main-weather__card-dark {\n  background-color: white;\n  height: 85%;\n  width: 60%;\n  border-radius: 1rem;\n  position: relative;\n  z-index: 3;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: 0.5fr 1.25fr;\n      grid-template-rows: 0.5fr 1.25fr;\n  justify-items: center;\n}\n\n.card-header__container-dark {\n  width: 100%;\n  max-height: 20rem;\n  position: relative;\n  z-index: 1;\n}\n\n.back__button {\n  position: absolute;\n  top: 2rem;\n  left: 2.25rem;\n  width: 5rem;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.city__illustration {\n  width: 100%;\n  border-radius: 1rem 1rem 0 0;\n  position: relative;\n}\n\n.header-content__wrapper {\n  position: absolute;\n  z-index: 2;\n  color: white;\n  top: 0;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  -ms-grid-columns: (1fr)[2];\n      grid-template-columns: repeat(2, 1fr);\n  width: 100%;\n  height: 100%;\n}\n\n.temperature__text {\n  font-size: 6rem;\n  letter-spacing: 0.75rem;\n}\n\n.city-name__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 25%;\n}\n\n.city-name__underline {\n  background: transparent;\n  border-radius: 5px;\n  height: 5px;\n  box-shadow: 0 3rem 0 0 #ffffff;\n}\n\n.city-name__text {\n  text-transform: uppercase;\n  letter-spacing: 0.3rem;\n  font-size: 1.75rem;\n  padding-bottom: 2rem;\n}\n\n.today-weather__container {\n  -ms-grid-row-align: center;\n      align-self: center;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  -ms-grid-rows: 3fr 1fr;\n      grid-template-rows: 3fr 1fr;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  justify-items: center;\n  grid-gap: 2rem;\n}\n\n.temp-state__container {\n  display: flex;\n  justify-content: center;\n  flex-flow: column;\n}\n\n.weather-state__text {\n  letter-spacing: 0.5rem;\n  font-size: 1.15rem;\n  text-transform: uppercase;\n  margin-top: 0.25rem;\n}\n\n.hum-wind__container {\n  display: flex;\n  align-items: center;\n  margin-left: -4rem;\n}\n\n.hum-wind__separator {\n  margin: 0 2rem;\n  width: 2px;\n  height: 2.5rem;\n  background-color: white;\n}\n\n.hum__text, .wind__text {\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  font-size: 0.8rem;\n  margin-bottom: 1rem;\n}\n\n.hum__container, .wind__container {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/*\n================\n     BODY\n================\n*/\n\n.body-content__wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1.75fr;\n      grid-template-columns: 1fr 1.75fr;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  justify-items: center;\n  box-sizing: border-box;\n  grid-column-gap: 1rem;\n  width: 100%;\n  padding: 2rem;\n}\n\n.forecast__container {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  align-self: center;\n  justify-self: center;\n}\n\n.twitter-feed__container {\n  margin-top: 1rem;\n  width: 100%;\n}\n\n.twitter-feed__text {\n  color: #0c1066;\n  font-size: 1.25rem;\n}\n\n.twitter__icon {\n  width: 1.5rem;\n}\n\n.twitter-feed-tag__text {\n  font-size: 0.85rem;\n  color: #5f84fb;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n}\n\n.twitter-feed__header {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 2rem;\n      grid-template-rows: 2rem;\n  -ms-grid-columns: 0.5fr 1.5fr 1fr;\n      grid-template-columns: 0.5fr 1.5fr 1fr;\n  align-items: center;\n  justify-items: center;\n  width: 100%;\n}\n\n.day-weather__container {\n  display: flex;\n  flex-flow: column;\n  margin: 2rem 1.5rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.day-name__text {\n  font-size: 1.5rem;\n  color: #39437a;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n\n.forecast-condition__icon {\n  height: 4rem;\n}\n\n.day-temp__text {\n  font-size: 1.85rem;\n  color: #0c1066;\n  letter-spacing: 0.25rem;\n  margin: 0.75rem 0;\n  text-align: center;\n  padding-left: 0.35rem;\n}\n\n.day-state__text {\n\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  color: #2B244D;\n}\n"

/***/ }),

/***/ "./src/app/pages/details/details.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/details/details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details-page__wrapper-dark\">\n  <svg class=\"background-gradient__circle\" viewBox=\"4572 73 1328 1328\">\n    <defs>\n      <linearGradient id=\"ddd\" x2=\"0\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\n        <stop offset=\"0\" stop-color=\"#ff8b8b\"/>\n        <stop offset=\"1\" stop-color=\"#6676ff\"/>\n      </linearGradient>\n    </defs>\n    <circle cx=\"664\" cy=\"664\" r=\"664\" fill=\"url(#ddd)\" transform=\"translate(4572 73)\"/>\n  </svg>\n\n  <svg class=\"back__button\" routerLink=\"\" viewBox=\"4085 152 98.5 126\">\n    <defs>\n      <style>.a {\n        fill: #2b244d;\n      }\n\n      .b {\n        fill: rgba(0, 0, 0, 0);\n      }\n\n      .b, .c {\n        stroke: #fff;\n        stroke-width: 2px;\n      }\n\n      .c {\n        fill: none;\n      }\n\n      .d {\n        fill: #fff;\n        font-size: 15px;\n        font-family: SegoeUI, Segoe UI;\n        letter-spacing: 0.4em;\n      }</style>\n    </defs>\n    <g transform=\"translate(3980)\">\n      <circle class=\"a\" cx=\"39\" cy=\"39\" r=\"39\" transform=\"translate(105 152)\"/>\n      <line class=\"b\" x1=\"80\" transform=\"translate(123.5 190.5)\"/>\n      <line class=\"b\" y1=\"26\" x2=\"26\" transform=\"translate(123.5 164.5)\"/>\n      <line class=\"c\" x1=\"26\" y1=\"27\" transform=\"translate(123.5 190.5)\"/>\n      <text class=\"d\" transform=\"translate(117 274)\">\n        <tspan x=\"0\" y=\"0\">BACK</tspan>\n      </text>\n    </g>\n  </svg>\n\n  <section class=\"main-weather__card-dark\">\n    <section class=\"card-header__container-dark\" [ngSwitch]=\"true\">\n\n      <svg *ngSwitchCase=\"city === 'paris'\" class=\"city__illustration\" viewBox=\"0 0 3000 1000\">\n        <linearGradient id=\"a\" x1=\"1487\" x2=\"1487\" y1=\"-11.5\" y2=\"998.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331464\"/>\n          <stop offset=\"1\" stop-color=\"#2e3192\"/>\n        </linearGradient>\n        <path fill=\"url(#a)\" d=\"M-25.5-11.5h3025v1010h-3025z\"/>\n        <path d=\"M2999-11V998H-25V-11h3024m1-1H-26V999h3026V-12z\"/>\n        <linearGradient id=\"b\" x1=\"1648.1\" x2=\"2243.41\" y1=\"50.5\" y2=\"50.5\"\n                        gradientTransform=\"matrix(-.2999 0 0 1 2380.73 0)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#fff9b3\" stop-opacity=\".4\"/>\n          <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/>\n        </linearGradient>\n        <path fill=\"url(#b)\"\n              d=\"M1885.28 24.93C1852.53 21.38 1708 3 1708 3v95l177.59-70.04c1.39-.55 1.15-2.87-.31-3.03z\"/>\n        <path fill=\"#FFF\"\n              d=\"M2358.41 893.69c0 21.87-5.62 42.42-15.5 60.3h-218.65a124.25 124.25 0 0 1-15.5-60.3c0-68.94 55.88-124.83 124.82-124.83s124.83 55.89 124.83 124.83z\"/>\n        <path fill=\"#FFF\"\n              d=\"M2412.95 893.69c0 21.15-3.66 41.45-10.38 60.3H2064.6a179.07 179.07 0 0 1-10.39-60.3c0-99.07 80.3-179.38 179.37-179.38s179.38 80.31 179.38 179.38z\"\n              opacity=\".08\"/>\n        <path fill=\"#FFF\"\n              d=\"M2440.23 893.69a206.6 206.6 0 0 1-8.94 60.3h-395.41a206.64 206.64 0 0 1-8.94-60.3c0-114.13 92.52-206.65 206.64-206.65s206.65 92.52 206.65 206.65z\"\n              opacity=\".08\"/>\n        <path fill=\"#FFF\"\n              d=\"M2486.7 893.69c0 20.78-2.5 40.97-7.22 60.3h-491.8a253.86 253.86 0 0 1-7.22-60.3c0-139.8 113.33-253.12 253.12-253.12s253.12 113.32 253.12 253.12z\"\n              opacity=\".08\"/>\n        <path fill=\"#FFF\"\n              d=\"M2538.55 893.69c0 20.64-2.05 40.8-5.96 60.3h-598.01a306.09 306.09 0 0 1-5.97-60.3c0-168.43 136.54-304.97 304.97-304.97s304.97 136.54 304.97 304.97z\"\n              opacity=\".08\"/>\n        <circle cx=\"2154.07\" cy=\"897.53\" r=\"9.22\" fill=\"#EFEFEF\"/>\n        <circle cx=\"2224.36\" cy=\"906.75\" r=\"13.83\" fill=\"#EFEFEF\"/>\n        <circle cx=\"2299.26\" cy=\"867.57\" r=\"9.22\" fill=\"#EFEFEF\"/>\n        <circle cx=\"2182.88\" cy=\"838.38\" r=\"19.59\" fill=\"#EFEFEF\"/>\n        <path fill=\"#3D3F5B\"\n              d=\"M1886.97 87.07a2.88 2.88 0 0 1-2.88-2.88V22.73a2.88 2.88 0 0 1 5.76 0V84.2c0 1.59-1.3 2.88-2.88 2.88z\"/>\n        <linearGradient id=\"c\" x1=\"1880.25\" x2=\"1893.69\" y1=\"53.46\" y2=\"53.46\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#c)\"\n              d=\"M1886.97 16a6.73 6.73 0 0 0-6.72 6.73V84.2a6.72 6.72 0 1 0 13.44 0V22.73c0-3.71-3-6.72-6.72-6.72z\"/>\n        <linearGradient id=\"d\" x1=\"1845.49\" x2=\"1928.84\" y1=\"242.05\" y2=\"242.05\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#d)\"\n              d=\"M1928.84 426.8h-22.09v.2l-38.98-.4v.2h-22.28c18.78-96.9 21.71-223.76 22.08-275.69V76.7a19.65 19.65 0 0 1 19.6-19.6c5.38 0 10.28 2.21 13.83 5.76a19.54 19.54 0 0 1 5.75 13.84v50.7s-.1 7.83-.01 21.36v.25l.01 1.7c.36 51.69 3.26 178.95 22.09 276.09z\"/>\n        <linearGradient id=\"e\" x1=\"1784.25\" x2=\"2002.37\" y1=\"523.22\" y2=\"523.22\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#e)\"\n              d=\"M1946.15 614.43l-36.64-85.21c-.6-1.41-2-2.33-3.53-2.33h-36.1a3.84 3.84 0 0 0-3.68 2.73l-25.67 84.81h-56.28l63.02-181.68 78.45-.74 76.65 182.42h-56.22z\"/>\n        <linearGradient id=\"f\" x1=\"1762.33\" x2=\"2022.36\" y1=\"640.16\" y2=\"640.16\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#f)\"\n              d=\"M1762.33 644.88v-9.43c0-4.18 3.4-7.58 7.58-7.58h244.87c4.2 0 7.58 3.4 7.58 7.58v9.43a7.58 7.58 0 0 1-7.58 7.58h-244.87a7.58 7.58 0 0 1-7.58-7.58z\"/>\n        <linearGradient id=\"g\" x1=\"1688.56\" x2=\"2098.4\" y1=\"785.34\" y2=\"785.34\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#g)\"\n              d=\"M2031.39 905.94c0-1.5-.04-2.92-.1-4.38-.04-1.38-.1-2.8-.1-4.4 0-95.98-51.4-153.29-137.5-153.29-87.48 0-139.83 56.22-140.19 150.47-1.79 1.27-7.28 3.22-10.68 4.43-6.43 2.3-11.63 4.14-14.07 6.82h-40.19l81.52-240.84h244.56l83.76 240.86-67.01.33z\"/>\n        <linearGradient id=\"h\" x1=\"1816.49\" x2=\"1957.45\" y1=\"482.11\" y2=\"482.11\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#h)\" d=\"M1821.67 487.3a5.2 5.2 0 0 1 0-10.38h130.6a5.2 5.2 0 0 1 0 10.37h-130.6z\"/>\n        <linearGradient id=\"i\" x1=\"1823.02\" x2=\"1951.69\" y1=\"431.71\" y2=\"431.71\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#i)\" d=\"M1828.2 436.9a5.2 5.2 0 0 1 0-10.37h118.3a5.2 5.2 0 0 1 0 10.37h-118.3z\"/>\n        <linearGradient id=\"j\" x1=\"1738.52\" x2=\"2046.18\" y1=\"621\" y2=\"621\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#j)\"\n              d=\"M1742.36 628c-2.12 0-3.84-3.14-3.84-7s1.72-7 3.84-7h299.98c2.12 0 3.84 3.14 3.84 7s-1.73 7-3.84 7h-299.98z\"/>\n        <linearGradient id=\"k\" x1=\"1738.52\" x2=\"2046.18\" y1=\"658.73\" y2=\"658.73\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#k)\"\n              d=\"M1742.36 665c-2.12 0-3.84-2.81-3.84-6.27 0-3.46 1.72-6.27 3.84-6.27h299.98c2.12 0 3.84 2.81 3.84 6.27 0 3.46-1.73 6.27-3.84 6.27h-299.98z\"/>\n        <linearGradient id=\"l\" x1=\"1853.36\" x2=\"1920.58\" y1=\"117.03\" y2=\"117.03\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#l)\" d=\"M1859.9 123.56a6.54 6.54 0 0 1 0-13.06h54.15a6.54 6.54 0 0 1 0 13.06h-54.16z\"/>\n        <linearGradient id=\"m\" x1=\"1723.83\" x2=\"1723.83\" y1=\"895.01\" y2=\"924.2\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#331495\"/>\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\n        </linearGradient>\n        <path fill=\"url(#m)\" d=\"M1769.54 924.2h-91.42a14.6 14.6 0 0 1 0-29.2h91.42a14.6 14.6 0 0 1 0 29.2z\"/>\n        <path fill=\"#0A0324\" d=\"M2112.54 924.2h-91.42a14.6 14.6 0 0 1 0-29.2h91.42a14.6 14.6 0 0 1 0 29.2z\"/>\n        <path fill=\"#FFF\"\n              d=\"M1640.72 248.28l.02-.74a9.54 9.54 0 0 0-5.7-8.7 9.52 9.52 0 0 0-3.8-18.23H1616a28.83 28.83 0 0 0-8.05-9.06 28.76 28.76 0 0 0-42.29-23.82 28.76 28.76 0 0 0-45.64 21.2 28.75 28.75 0 0 0-33.2 16.5h-41.55c-2.62 0-5 1.07-6.72 2.8a9.48 9.48 0 0 0 .4 13.81l-.4.39a9.5 9.5 0 0 0-2.68 5.24h-18.74c-2.62 0-5 1.07-6.72 2.8a9.48 9.48 0 0 0-2.8 6.71 9.54 9.54 0 0 0 9.52 9.52h220.26c2.62 0 5-1.07 6.72-2.8a9.48 9.48 0 0 0-3.4-15.62zm380.02 132.29v-.26a3.4 3.4 0 0 0-2.02-3.1 3.39 3.39 0 0 0-1.37-6.5h-5.43a10.3 10.3 0 0 0-2.87-3.24 10.26 10.26 0 0 0-15.09-8.5 10.26 10.26 0 0 0-16.28 7.56 10.26 10.26 0 0 0-11.84 5.9H1951a3.38 3.38 0 0 0-3.4 3.39c0 1 .45 1.9 1.15 2.53l-.15.14c-.5.5-.84 1.14-.95 1.87h-6.69a3.38 3.38 0 0 0-3.4 3.4 3.4 3.4 0 0 0 3.4 3.39h78.58a3.38 3.38 0 0 0 3.4-3.4 3.4 3.4 0 0 0-2.21-3.18zm427-291.38v-.16c0-.83-.83-1.55-2.02-1.87.38-.1.74-.25 1.03-.43.62-.37 1-.88 1-1.44 0-1.12-1.53-2.04-3.4-2.04h-5.43a8.8 8.8 0 0 0-2.87-1.95c-.29-3.26-4.76-5.84-10.25-5.84-1.75 0-3.4.26-4.84.73a15.16 15.16 0 0 0-6.05-1.2c-5.42 0-9.86 2.54-10.23 5.75-.78-.12-1.6-.18-2.43-.18-4.22 0-7.84 1.53-9.41 3.72H2378c-.93 0-1.78.23-2.4.6-.61.37-1 .88-1 1.45 0 .6.45 1.15 1.15 1.52l-.14.08c-.5.3-.85.7-.96 1.13h-6.69c-.93 0-1.78.23-2.4.6-.6.37-.99.88-.99 1.44 0 1.13 1.53 2.04 3.4 2.04h78.57a4.7 4.7 0 0 0 2.4-.6c.62-.37 1-.88 1-1.44 0-.87-.92-1.62-2.21-1.91zM1143.59 361.66l.01-.4a5.22 5.22 0 0 0-3.12-4.77 5.22 5.22 0 0 0-2.08-9.98h-8.34a15.78 15.78 0 0 0-4.4-4.96 15.74 15.74 0 0 0-23.15-13.03 15.74 15.74 0 0 0-24.98 11.6 15.74 15.74 0 0 0-18.17 9.03h-22.75a5.18 5.18 0 0 0-5.2 5.21 5.2 5.2 0 0 0 1.74 3.89l-.22.2a5.2 5.2 0 0 0-1.47 2.88h-10.25a5.18 5.18 0 0 0-5.21 5.2 5.22 5.22 0 0 0 5.2 5.21h120.57a5.18 5.18 0 0 0 5.2-5.2 5.23 5.23 0 0 0-3.38-4.88z\"\n              opacity=\".1\"/>\n        <path fill=\"#FFF\"\n              d=\"M628.77 275.6h-185a12.86 12.86 0 0 1-12.82-12.83c0-7.05 5.77-12.82 12.82-12.82h185c7.05 0 12.82 5.77 12.82 12.82 0 7.05-5.77 12.82-12.82 12.82z\"\n              opacity=\".03\"/>\n        <path fill=\"#FFF\"\n              d=\"M919.4 345.01H721.8a6.54 6.54 0 0 1-6.53-6.52 6.54 6.54 0 0 1 6.53-6.52h197.6a6.54 6.54 0 0 1 6.52 6.52 6.54 6.54 0 0 1-6.53 6.52z\"\n              opacity=\".1\"/>\n        <path fill=\"#FFF\"\n              d=\"M1274.29 431.04h-51.05c-5.61 0-10.2 4.59-10.2 10.2 0 5.6 4.59 10.19 10.2 10.19h51.05c5.6 0 10.2-4.59 10.2-10.2 0-5.6-4.6-10.19-10.2-10.19zm-408.55 3.95H664.22a7.27 7.27 0 0 1-7.26-7.25 7.27 7.27 0 0 1 7.26-7.26h201.52a7.27 7.27 0 0 1 7.25 7.26 7.27 7.27 0 0 1-7.25 7.25z\"\n              opacity=\".05\"/>\n        <path fill=\"#FFF\"\n              d=\"M2822.73 136h-203.5a6.26 6.26 0 0 1 0-12.52h203.5a6.26 6.26 0 1 1 0 12.52zm-630.5 63.2H2005.3a14.5 14.5 0 0 1-14.47-14.47 14.5 14.5 0 0 1 14.47-14.46h186.93a14.5 14.5 0 0 1 14.47 14.46 14.5 14.5 0 0 1-14.47 14.47z\"\n              opacity=\".1\"/>\n        <path fill=\"#FFF\"\n              d=\"M464.45 88H89.17a6.71 6.71 0 0 1 0-13.42h375.28a6.71 6.71 0 0 1 0 13.42zM245.1 375H45.44c-4.29 0-7.8-3.5-7.8-7.8v-5.6c0-4.28 3.51-7.8 7.8-7.8h199.67c4.28 0 7.8 3.52 7.8 7.8v5.6c0 4.3-3.52 7.8-7.8 7.8z\"\n              opacity=\".07\"/>\n        <path fill=\"#FFF\"\n              d=\"M2419.99 419.46H2190.5a13.01 13.01 0 0 1-12.97-12.97 13 13 0 0 1 12.97-12.97h229.48c7.13 0 12.97 5.84 12.97 12.97 0 7.13-5.84 12.97-12.97 12.97zm129.55-68.09h-55.7a6.74 6.74 0 0 0-6.72 6.73c0 3.7 3.02 6.72 6.72 6.72h55.7c3.7 0 6.72-3.03 6.72-6.72 0-3.7-3.03-6.73-6.72-6.73zm309.98 149.96h-195.36a14.52 14.52 0 0 1-14.47-14.47c0-7.96 6.51-14.48 14.47-14.48h195.36c7.97 0 14.48 6.52 14.48 14.48 0 7.96-6.51 14.47-14.48 14.47z\"\n              opacity=\".1\"/>\n        <linearGradient id=\"n\" x1=\"1490.5\" x2=\"1490.5\" y1=\"922.5\" y2=\"999.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#070028\"/>\n          <stop offset=\"1\" stop-color=\"#2e3192\"/>\n        </linearGradient>\n        <path fill=\"url(#n)\" stroke=\"#000\" stroke-miterlimit=\"10\" d=\"M-18.5 922.5h3018v77h-3018z\"/>\n        <circle cx=\"1174\" cy=\"193\" r=\"2.83\" fill=\"#FFF\"/>\n        <circle cx=\"900\" cy=\"158\" r=\"5.45\" fill=\"#FFF\" opacity=\".59\"/>\n        <circle cx=\"545\" cy=\"38\" r=\"9\" fill=\"#FFF\" opacity=\".59\"/>\n        <circle cx=\"82\" cy=\"158\" r=\"4.24\" fill=\"#FFF\"/>\n        <circle cx=\"2805\" cy=\"60\" r=\"6\" fill=\"#FFF\" opacity=\".57\"/>\n        <circle cx=\"2838\" cy=\"69\" r=\"2\" fill=\"#FFF\"/>\n        <circle cx=\"2869\" cy=\"246\" r=\"5\" fill=\"#FFF\" opacity=\".8\"/>\n        <circle cx=\"2457\" cy=\"189\" r=\"5\" fill=\"#FFF\" opacity=\".8\"/>\n        <circle cx=\"2796\" cy=\"372\" r=\"5\" fill=\"#FFF\" opacity=\".8\"/>\n        <circle cx=\"341\" cy=\"189\" r=\"6\" fill=\"#FFF\"/>\n        <circle cx=\"1653\" cy=\"338\" r=\"6\" fill=\"#FFF\"/>\n        <circle cx=\"1488\" cy=\"81\" r=\"6\" fill=\"#FFF\"/>\n        <path\n          d=\"M2301.55 722.92c1.92-1.66 3.35-8.26 3.35-8.26s-6.2 3.1-6.2 5.68c0 2.58 1.04 4.12 2.85 2.58zm2.32-2.58s4.12 0 9.28-1.04 8.77 1.55 9.8.52-15.47-4.64-19.08-.52\"/>\n        <path\n          d=\"M2298.7 720.34s-8.76 3.6-11.34 3.1-7.74-2.07.51-2.07c8.26 0 9.4-.38 11.41-2.51m-.07 45.8c1.15-2.33 2-11.66 2-11.66s-3.7 4.37-3.7 8.02.62 5.83 1.7 3.64zm1.39-3.64s2.45 0 5.53-1.46 5.23 2.19 5.84.73-9.22-6.56-11.38-.73\"/>\n        <path\n          d=\"M2297.52 761.02s-5.23 5.1-6.77 4.37c-1.53-.73-4.6-2.91.31-2.91 4.92 0 5.6-.55 6.8-3.56m-70.11-4c-1.24-1.66-2.15-8.26-2.15-8.26s3.97 3.1 3.97 5.68c0 2.58-.67 4.12-1.82 2.58zm-1.49-2.58s-2.65 0-5.95-1.04-5.62 1.55-6.28.52c-.66-1.03 9.92-4.64 12.23-.52\"/>\n        <path\n          d=\"M2229.57 752.34s5.61 3.6 7.27 3.1 4.95-2.07-.33-2.07-6.03-.38-7.31-2.51m-123.45-48.94c-1.24-1.66-2.15-8.26-2.15-8.26s3.97 3.1 3.97 5.68c0 2.58-.67 4.12-1.82 2.58z\"/>\n        <path d=\"M2117 698.34s-2.59 0-5.82-1.17c-3.24-1.16-5.5 1.75-6.15.59-.65-1.17 9.7-5.23 11.97-.59\"/>\n        <path d=\"M2104.67 697.76s-6.17 2.56-6.69 4.21c-.52 1.65-1.13 5.25 1.89.9 3.01-4.34 3.74-4.72 6.23-4.57\"/>\n        <linearGradient id=\"o\" x1=\"1888.51\" x2=\"2127\" y1=\"55.5\" y2=\"55.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#fff9b3\" stop-opacity=\".7\"/>\n          <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/>\n        </linearGradient>\n        <path fill=\"url(#o)\"\n              d=\"M1890.16 24.28C1933.92 19.94 2127-2.5 2127-2.5v116l-237.25-85.52c-1.86-.67-1.54-3.5.41-3.7z\"/>\n        <path fill=\"#1F1D2B\"\n              d=\"M783.56 119.74H629.7a7.46 7.46 0 0 1-7.45-7.45 7.47 7.47 0 0 1 7.45-7.44h153.85c4.1 0 7.44 3.35 7.44 7.44 0 4.1-3.35 7.45-7.44 7.45z\"/>\n        <path fill=\"#1F1D2B\"\n              d=\"M781.45 111.56H631.71a7.46 7.46 0 0 1-7.45-7.44c0-4.1 3.35-7.45 7.45-7.45h149.74c4.1 0 7.44 3.35 7.44 7.45a7.46 7.46 0 0 1-7.44 7.44z\"\n              opacity=\".43\"/>\n        <path fill=\"#1F1D2B\"\n              d=\"M789.47 112.03H624.53a5.5 5.5 0 0 1-5.48-5.49 5.5 5.5 0 0 1 5.49-5.48h164.93a5.5 5.5 0 0 1 5.48 5.48 5.5 5.5 0 0 1-5.49 5.49z\"\n              opacity=\".86\"/>\n        <path fill=\"#1F1D2B\"\n              d=\"M723.45 146.24l-15.85-31.41a7.46 7.46 0 0 1 3.3-10 7.46 7.46 0 0 1 9.99 3.3l15.85 31.4a7.46 7.46 0 0 1-3.3 10 7.46 7.46 0 0 1-10-3.3z\"\n              opacity=\".76\"/>\n        <path fill=\"#1F1D2B\"\n              d=\"M709.86 93.81l26.61-23a7.46 7.46 0 0 1 10.5.76 7.46 7.46 0 0 1-.76 10.5l-26.62 23a7.46 7.46 0 0 1-10.5-.76 7.46 7.46 0 0 1 .77-10.5zm58.78 6.75l28.88-25.08L789 117z\"/>\n        <radialGradient id=\"p\" cx=\"797\" cy=\"76\" r=\"4\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#c81464\"/>\n          <stop offset=\"1\" stop-color=\"#933100\" stop-opacity=\"0\"/>\n        </radialGradient>\n        <path fill=\"url(#p)\" d=\"M797 80c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z\"/>\n        <g opacity=\".35\">\n          <radialGradient id=\"q\" cx=\"796.58\" cy=\"80\" r=\"4\" gradientTransform=\"translate(291.91 27.37) scale(.6328)\"\n                          gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#fff\"/>\n            <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/>\n          </radialGradient>\n          <path fill=\"url(#q)\" d=\"M796 80.53a2.53 2.53 0 1 1 0-5.05 2.53 2.53 0 0 1 0 5.05z\"/>\n        </g>\n        <path fill=\"#FFF\"\n              d=\"M1118.5 120h-182a3.51 3.51 0 0 1-3.5-3.5v-8a3.5 3.5 0 0 1 3.5-3.5h182a3.5 3.5 0 0 1 3.5 3.5v8c0 1.92-1.58 3.5-3.5 3.5zm-178 111h-98a3.5 3.5 0 0 1 0-7h98a3.5 3.5 0 0 1 0 7zm-74-115h-36a3.5 3.5 0 0 1 0-7h36a3.5 3.5 0 0 1 0 7zm112-62h-62a3.5 3.5 0 0 1 0-7h62a3.5 3.5 0 0 1 0 7zm198 51h-26a3.5 3.5 0 0 1 0-7h26a3.5 3.5 0 0 1 0 7z\"\n              opacity=\".03\"/>\n        <g opacity=\".3\">\n          <path fill=\"#FFF\"\n                d=\"M1469.93 422.7a10.83 10.83 0 0 1-12.27-9.08 10.83 10.83 0 0 1 9.08-12.27 10.83 10.83 0 0 1 12.28 9.08 10.83 10.83 0 0 1-9.1 12.27z\"\n                opacity=\".25\"/>\n          <path fill=\"#FFF\"\n                d=\"M1469.5 419.88a7.96 7.96 0 0 1-9.01-6.68 7.96 7.96 0 0 1 6.67-9.02 7.96 7.96 0 0 1 9.03 6.68 7.96 7.96 0 0 1-6.68 9.02z\"\n                opacity=\".22\"/>\n          <linearGradient id=\"r\" x1=\"1180.32\" x2=\"1180.32\" y1=\"1190.26\" y2=\"912.26\"\n                          gradientTransform=\"matrix(.4432 -.5986 .8097 .5995 -18.4 404.93)\"\n                          gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#c4c7ff\" stop-opacity=\".5\"/>\n            <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/>\n          </linearGradient>\n          <path fill=\"url(#r)\"\n                d=\"M1467.83 412.71a3.88 3.88 0 0 1-5.43.81l-221.97-164.34 5.76-7.78 220.43 163.2a5.8 5.8 0 0 1 1.21 8.11z\"\n                opacity=\".81\"/>\n          <path fill=\"#FFF\"\n                d=\"M1469.02 416.6a4.64 4.64 0 0 1-5.26-3.9 4.64 4.64 0 0 1 3.9-5.25 4.64 4.64 0 0 1 5.25 3.9 4.64 4.64 0 0 1-3.9 5.25z\"\n                opacity=\".35\"/>\n        </g>\n      </svg>\n\n      <svg *ngSwitchCase=\"city === 'doha'\" class=\"city__illustration\" viewBox=\"0 0 3000 1000\">\n        <g opacity=\".8\">\n          <linearGradient id=\"a\" x1=\"2091.51\" x2=\"908.49\" y1=\"-524.52\" y2=\"1524.52\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#0051af\"/>\n            <stop offset=\".26\" stop-color=\"#008daf\"/>\n            <stop offset=\"1\" stop-color=\"#1b2c32\"/>\n          </linearGradient>\n          <path fill=\"url(#a)\" d=\"M0 0h3000v1000H0z\"/>\n        </g>\n        <path fill=\"#1C1549\" d=\"M0 748h2253v18H0z\"/>\n        <g opacity=\".51\">\n          <linearGradient id=\"b\" x1=\"3002\" x2=\"0\" y1=\"500\" y2=\"500\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#7f21b9\"/>\n            <stop offset=\"1\" stop-color=\"#1b2c32\"/>\n          </linearGradient>\n          <path fill=\"url(#b)\" d=\"M0 0h3002v1000H0z\"/>\n        </g>\n        <linearGradient id=\"c\" x1=\"1779\" x2=\"1779\" y1=\"485.5\" y2=\"926.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#c)\" d=\"M2220 926.5h-882c0-243.56 197.44-441 441-441s441 197.44 441 441z\" opacity=\".02\"/>\n        <linearGradient id=\"d\" x1=\"1779\" x2=\"1779\" y1=\"510\" y2=\"902\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#d)\" d=\"M2171 902h-784c0-216.5 175.5-392 392-392s392 175.5 392 392z\" opacity=\".02\"/>\n        <linearGradient id=\"e\" x1=\"1779\" x2=\"1779\" y1=\"485.5\" y2=\"926.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#e)\" d=\"M2220 926.5h-882c0-243.56 197.44-441 441-441s441 197.44 441 441z\" opacity=\".02\"/>\n        <linearGradient id=\"f\" x1=\"1779\" x2=\"1779\" y1=\"485.5\" y2=\"926.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#f)\" d=\"M2220 926.5h-882c0-243.56 197.44-441 441-441s441 197.44 441 441z\" opacity=\".02\"/>\n        <path fill=\"#1C1549\" d=\"M912 747H793l35-190 24-110z\" opacity=\".5\"/>\n        <path fill=\"#1C1549\" d=\"M96 444h100v307H96z\"/>\n        <path fill=\"#16133F\" d=\"M846 747H718V420c70.7 0 128 57.3 128 128v199z\"/>\n        <path fill=\"#1C1549\" d=\"M169 393h-52l-21 54h100zm-5-24l-39 1-1 23h40z\"/>\n        <path fill=\"#16133F\" d=\"M1112 581h-104l-24 167h128z\"/>\n        <path fill=\"#16133F\" d=\"M1112 500l-82 48-4 35 86-2z\"/>\n        <path fill=\"#16133F\" d=\"M1112 482l-32-6-2 44 34-20z\"/>\n        <path fill=\"#1C1549\" d=\"M756 747H628V420c70.7 0 128 57.3 128 128v199z\"/>\n        <path fill=\"#16133F\"\n              d=\"M1305.65 527c-.06 57.58 7.25 130.85 29.35 221h-163c22.1-90.15 29.41-163.42 29.35-221-.08-75.02-12.66-123.43-21.32-147.89-4.35-12.29-7.71-18.53-8.01-19.07l-.02-.04h163l-.02.04c-.3.54-3.66 6.78-8.01 19.07-8.66 24.46-21.24 72.87-21.32 147.89z\"\n              opacity=\".9\"/>\n        <path fill=\"#1C1549\" d=\"M228 485h119v263H228z\" opacity=\".8\"/>\n        <path fill=\"#1C1549\" d=\"M167 574.52h51v171.86h-51z\" opacity=\".5\"/>\n        <path fill=\"#1C1549\"\n              d=\"M512.33 747H382V408.17c0-35.85 29.32-65.17 65.17-65.17 35.84 0 65.16 29.32 65.16 65.17V747z\"/>\n        <path fill=\"#1C1549\" d=\"M450 351h-6l3-79z\"/>\n        <path fill=\"#1C1549\" d=\"M347 694h32v52.38h-32zm272 54H500l35-190h84z\" opacity=\".5\"/>\n        <path fill=\"#1C1549\" d=\"M0 690h37v58H0z\" opacity=\".4\"/>\n        <path fill=\"#1C1549\" d=\"M39 616h54v131H39zm54 0H63v-52h30z\" opacity=\".7\"/>\n        <path fill=\"#16133F\" d=\"M1430 524h108v224h-108zm17-25h75v25h-75zm63 0h-53v-23.5a26.5 26.5 0 0 1 53 0V499z\"\n              opacity=\".9\"/>\n        <path fill=\"#16133F\" d=\"M903.97 463.05h104.07V748H903.97z\" opacity=\".8\"/>\n        <ellipse cx=\"956\" cy=\"462.43\" fill=\"#16133F\" opacity=\".8\" rx=\"52.03\" ry=\"77.43\"/>\n        <path fill=\"#1C1549\" d=\"M1349 574h53v174h-53zm53 0h-53v-39l15 12z\" opacity=\".8\"/>\n        <path fill=\"#1C1549\" d=\"M1119 431h68v317h-68z\" opacity=\".7\"/>\n        <path fill=\"#1C1549\" d=\"M379 694h-17v-69l1 23zm-25-69h8v69h-8z\" opacity=\".5\"/>\n        <g opacity=\".51\">\n          <linearGradient id=\"g\" x1=\"1501\" x2=\"1501\" y1=\"998\" y2=\"-2\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#d72c32\"/>\n            <stop offset=\"1\" stop-color=\"#649eb9\"/>\n          </linearGradient>\n          <path fill=\"url(#g)\" d=\"M0-2h3002V998H0z\"/>\n        </g>\n        <linearGradient id=\"h\" x1=\"1500.31\" x2=\"1500.31\" y1=\"766\" y2=\"1008.78\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#5d224b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#h)\" d=\"M-2 771.86s2998.22-23.03 3002.22 22.22S3002 1000 3002 1000l-3004 8.78V771.86z\"/>\n        <linearGradient id=\"i\" x1=\"1963\" x2=\"1963\" y1=\"891\" y2=\"557\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#i)\" d=\"M1937 557h52v334h-52z\"/>\n        <linearGradient id=\"j\" x1=\"2137\" x2=\"2137\" y1=\"891\" y2=\"593\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#j)\" d=\"M2111 593h52v298h-52z\"/>\n        <linearGradient id=\"k\" x1=\"2594.5\" x2=\"2594.5\" y1=\"848\" y2=\"706\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#k)\" d=\"M2191 706h807v142h-807z\"/>\n        <linearGradient id=\"l\" x1=\"2614\" x2=\"2614\" y1=\"706\" y2=\"564\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#l)\" d=\"M2234 564h760v142h-760z\" opacity=\".9\"/>\n        <linearGradient id=\"m\" x1=\"2705\" x2=\"2705\" y1=\"706\" y2=\"564\" gradientTransform=\"rotate(180 2705 635)\"\n                        gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#m)\" d=\"M2415 564h580v142h-580z\" opacity=\".6\"/>\n        <linearGradient id=\"n\" x1=\"2568.5\" x2=\"2568.5\" y1=\"706\" y2=\"564\" gradientTransform=\"rotate(180 2705 635)\"\n                        gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#n)\" d=\"M2681 564h321v142h-321z\" opacity=\".9\"/>\n        <linearGradient id=\"o\" x1=\"2739.5\" x2=\"2739.5\" y1=\"848\" y2=\"706\" gradientTransform=\"rotate(180 2705 635)\"\n                        gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#o)\" d=\"M2339 422h663v142h-663z\" opacity=\".8\"/>\n        <linearGradient id=\"p\" x1=\"2585\" x2=\"2585\" y1=\"848\" y2=\"706\" gradientTransform=\"rotate(180 2705 635)\"\n                        gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#p)\" d=\"M2648 422h354v142h-354z\"/>\n        <linearGradient id=\"q\" x1=\"2862\" x2=\"2862\" y1=\"990\" y2=\"848\" gradientTransform=\"rotate(180 2705 635)\"\n                        gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#q)\" d=\"M2415 280h266v142h-266z\" opacity=\".8\"/>\n        <linearGradient id=\"r\" x1=\"2730\" x2=\"2410\" y1=\"919\" y2=\"919\" gradientTransform=\"rotate(180 2705 635)\"\n                        gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#r)\" d=\"M2680 280h320v142h-320z\" opacity=\".9\"/>\n        <linearGradient id=\"s\" x1=\"2774\" x2=\"2774\" y1=\"1177\" y2=\"990\" gradientTransform=\"rotate(180 2705 635)\"\n                        gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#s)\" d=\"M2548 101l176-8v187h-176z\" opacity=\".8\"/>\n        <linearGradient id=\"t\" x1=\"2949\" x2=\"2949\" y1=\"1177\" y2=\"990\" gradientTransform=\"matrix(1 0 0 -1 -139 1270)\"\n                        gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#t)\" d=\"M2896 105l-172-12v187h169z\"/>\n        <linearGradient id=\"u\" x1=\"2615.5\" x2=\"2615.5\" y1=\"569\" y2=\"427\" gradientTransform=\"translate(190 274)\"\n                        gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#u)\" d=\"M2609 701h393v142h-393z\"/>\n        <linearGradient id=\"v\" x1=\"2927\" x2=\"2927\" y1=\"569\" y2=\"427\" gradientTransform=\"rotate(180 2705 635)\"\n                        gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#v)\" d=\"M2361 701h244v142h-244z\"/>\n        <path fill=\"#16133F\" d=\"M1184.03 391.11l-8.01-19.07c.3.54 3.66 6.78 8.01 19.07z\"/>\n        <g opacity=\".65\">\n          <path fill=\"#16133F\"\n                d=\"M1240.8 832.14v43.37s33.73 41.17 66 47.56l181.12-3.55s12.46-20.58 117.32-59.62c0 0-129.06 22.71-151.06 18.45-22-4.26-114.39 4.97-142.99-2.84l-37.4-40.43-32.99-2.94z\"/>\n          <path fill=\"#16133F\"\n                d=\"M1584.71 868.6l19.14-22.72 13.97-2.74-13.67 23.01zm-77.53 6.97l-.2-41.96H1306.8l.57 5.52 192.28.35 1.76 36.82zm-266.38-66.16h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.34 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.34 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4z\"/>\n          <path fill=\"#16133F\"\n                d=\"M1306.8 809.41h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.34 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.34 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm-46.2 28.6h2.2v41.06h-2.2zm-22-1.47h2.2v41.06h-2.2zm36.67 1.47h2.2v41.06h-2.2zm14.66 0h2.2v41.06h-2.2zm14.67 0h2.2v41.06h-2.2zm14.66 0h2.2v41.06h-2.2zm14.67 0h2.2v41.06h-2.2zm14.66 0h2.2v41.06h-2.2zm14.67 0h2.2v41.06h-2.2zm14.67 0h2.2v41.06h-2.2zm14.66 0h2.2v41.06h-2.2zm14.67 0h2.2v41.06h-2.2zm17.6 0h2.2v41.06h-2.2z\"/>\n          <path fill=\"#16133F\"\n                d=\"M1240.8 821.88v-13.93h128.32v4.4zm-1.1 12.71s190.63 21.1 276.63 9.04c0 0-3.25-5.7-9.8-4.6-6.55 1.09-178.43-26.19-266.83-4.44zm49.5 18.09h215.58v5.87H1289.2z\"/>\n          <path fill=\"#16133F\"\n                d=\"M1240.8 808.43s-13.93-7.08-20.53-10.02c-6.6-2.93 0 0 0 0s0-1.46 2.93-1.46-.73.73 19.8 11l-2.2.48z\"/>\n          <linearGradient id=\"w\" x1=\"1211.4\" x2=\"1211.4\" y1=\"827.01\" y2=\"786\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\n            <stop offset=\"1\" stop-color=\"#040050\"/>\n          </linearGradient>\n          <path fill=\"url(#w)\"\n                d=\"M1212.5 786s-10.2 16.81-14.41 29.65c0 0 1.65 3.3 3.11 6.96s-1.46 2.2 1.47 3.67 0 0 4.4.73h11s-4.32-12.2 6.64-29.93L1212.49 786z\"/>\n        </g>\n        <linearGradient id=\"x\" x1=\"1774\" x2=\"1774\" y1=\"645\" y2=\"745\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#64001c\"/>\n          <stop offset=\"1\" stop-color=\"#df6b00\"/>\n        </linearGradient>\n        <path fill=\"url(#x)\" d=\"M1874 745h-200c0-55.23 44.77-100 100-100s100 44.77 100 100z\" opacity=\".36\"/>\n        <linearGradient id=\"y\" x1=\"1779\" x2=\"1779\" y1=\"606\" y2=\"806\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#y)\" d=\"M1979 806h-400c0-110.46 89.54-200 200-200s200 89.54 200 200z\" opacity=\".02\"/>\n        <linearGradient id=\"z\" x1=\"1779\" x2=\"1779\" y1=\"579\" y2=\"833\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#z)\" d=\"M2033 833h-508c0-140.28 113.72-254 254-254s254 113.72 254 254z\" opacity=\".02\"/>\n        <linearGradient id=\"A\" x1=\"1779\" x2=\"1779\" y1=\"537.5\" y2=\"874.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#A)\" d=\"M2116 874.5h-674c0-186.13 150.88-337 337-337s337 150.88 337 337z\" opacity=\".02\"/>\n        <linearGradient id=\"B\" x1=\"1779\" x2=\"1779\" y1=\"562.5\" y2=\"849.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#B)\" d=\"M2066 849.5h-574c0-158.51 128.49-287 287-287s287 128.49 287 287z\" opacity=\".02\"/>\n        <linearGradient id=\"C\" x1=\"1779\" x2=\"1779\" y1=\"606\" y2=\"806\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#C)\" d=\"M1979 806h-400c0-110.46 89.54-200 200-200s200 89.54 200 200z\" opacity=\".02\"/>\n        <linearGradient id=\"D\" x1=\"1779\" x2=\"1779\" y1=\"637.5\" y2=\"774.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#D)\" d=\"M1916 774.5h-274c0-75.67 61.34-137 137-137s137 61.34 137 137z\" opacity=\".02\"/>\n        <linearGradient id=\"E\" x1=\"1779\" x2=\"1779\" y1=\"620\" y2=\"792\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"red\"/>\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\n        </linearGradient>\n        <path fill=\"url(#E)\" d=\"M1951 792h-344c0-95 77-172 172-172s172 77 172 172z\" opacity=\".02\"/>\n        <linearGradient id=\"F\" x1=\"1957\" x2=\"1963\" y1=\"532\" y2=\"532\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#F)\" d=\"M1957 507h6v50h-6z\"/>\n        <linearGradient id=\"G\" x1=\"2133\" x2=\"2139\" y1=\"568\" y2=\"568\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#G)\" d=\"M2133 543h6v50h-6z\"/>\n        <linearGradient id=\"H\" x1=\"1923\" x2=\"1993\" y1=\"503.67\" y2=\"503.67\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#H)\" d=\"M1923 507s41-15 70 0h-70z\"/>\n        <linearGradient id=\"I\" x1=\"2100\" x2=\"2170\" y1=\"539.67\" y2=\"539.67\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#I)\" d=\"M2100 543s41-15 70 0h-70z\"/>\n        <linearGradient id=\"J\" x1=\"1989\" x2=\"3002\" y1=\"864.5\" y2=\"864.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#25004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#J)\" d=\"M1989 838h1013v53H1989z\"/>\n        <linearGradient id=\"K\" x1=\"1854\" x2=\"1937\" y1=\"878.5\" y2=\"878.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#25004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#K)\" d=\"M1854 866h83v25h-83z\"/>\n        <linearGradient id=\"L\" x1=\"1896\" x2=\"1937\" y1=\"860\" y2=\"860\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#25004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#L)\" d=\"M1896 854h41v12h-41z\"/>\n        <linearGradient id=\"M\" x1=\"1922\" x2=\"1937\" y1=\"848\" y2=\"848\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#25004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#M)\" d=\"M1922 842h15v12h-15z\"/>\n        <linearGradient id=\"N\" x1=\"2882\" x2=\"2882\" y1=\"334\" y2=\"325\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#N)\" d=\"M2875 334s12.53-3 14-9v9h-14z\"/>\n        <linearGradient id=\"O\" x1=\"2837.94\" x2=\"2837.94\" y1=\"334\" y2=\"325\"\n                        gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#O)\" d=\"M2889 334h16s-14.32-3-16-9\"/>\n        <linearGradient id=\"P\" x1=\"2875\" x2=\"2905\" y1=\"348\" y2=\"348\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#P)\" d=\"M2875 334h30v28h-30z\"/>\n        <linearGradient id=\"Q\" x1=\"2772\" x2=\"2772\" y1=\"332\" y2=\"323\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#Q)\" d=\"M2765 332s12.53-3 14-9v9h-14z\"/>\n        <linearGradient id=\"R\" x1=\"2968.56\" x2=\"2968.56\" y1=\"332\" y2=\"323\"\n                        gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#R)\" d=\"M2779 332h16s-14.32-3-16-9\"/>\n        <linearGradient id=\"S\" x1=\"2765\" x2=\"2795\" y1=\"346\" y2=\"346\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#S)\" d=\"M2765 332h30v28h-30z\"/>\n        <linearGradient id=\"T\" x1=\"2757\" x2=\"2757\" y1=\"484\" y2=\"475\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#T)\" d=\"M2750 484s12.53-3 14-9v9h-14z\"/>\n        <linearGradient id=\"U\" x1=\"2986.38\" x2=\"2986.38\" y1=\"484\" y2=\"475\"\n                        gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#U)\" d=\"M2764 484h16s-14.32-3-16-9\"/>\n        <linearGradient id=\"V\" x1=\"2750\" x2=\"2780\" y1=\"498\" y2=\"498\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#V)\" d=\"M2750 484h30v28h-30z\"/>\n        <linearGradient id=\"W\" x1=\"2943\" x2=\"2943\" y1=\"484\" y2=\"475\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#W)\" d=\"M2936 484s12.53-3 14-9v9h-14z\"/>\n        <linearGradient id=\"X\" x1=\"2765.5\" x2=\"2765.5\" y1=\"484\" y2=\"475\"\n                        gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#X)\" d=\"M2950 484h16s-14.32-3-16-9\"/>\n        <linearGradient id=\"Y\" x1=\"2936\" x2=\"2966\" y1=\"498\" y2=\"498\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#Y)\" d=\"M2936 484h30v28h-30z\"/>\n        <linearGradient id=\"Z\" x1=\"2852\" x2=\"2852\" y1=\"483\" y2=\"474\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#Z)\" d=\"M2845 483s12.53-3 14-9v9h-14z\"/>\n        <linearGradient id=\"aa\" x1=\"2873.56\" x2=\"2873.56\" y1=\"483\" y2=\"474\"\n                        gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aa)\" d=\"M2859 483h16s-14.32-3-16-9\"/>\n        <linearGradient id=\"ab\" x1=\"2845\" x2=\"2875\" y1=\"497\" y2=\"497\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#ab)\" d=\"M2845 483h30v28h-30z\"/>\n        <g opacity=\".8\">\n          <linearGradient id=\"ac\" x1=\"2582.13\" x2=\"2582.13\" y1=\"341\" y2=\"332\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\n            <stop offset=\"1\" stop-color=\"#040050\"/>\n          </linearGradient>\n          <path fill=\"url(#ac)\" d=\"M2577 341s9.19-3 10.27-9v9H2577z\"/>\n          <linearGradient id=\"ad\" x1=\"3198.78\" x2=\"3198.78\" y1=\"341\" y2=\"332\"\n                          gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\n            <stop offset=\"1\" stop-color=\"#040050\"/>\n          </linearGradient>\n          <path fill=\"url(#ad)\" d=\"M2587.27 341H2599s-10.5-3-11.73-9\"/>\n          <linearGradient id=\"ae\" x1=\"2577\" x2=\"2599\" y1=\"355\" y2=\"355\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\n            <stop offset=\"1\" stop-color=\"#040050\"/>\n          </linearGradient>\n          <path fill=\"url(#ae)\" d=\"M2577 341h22v28h-22z\"/>\n        </g>\n        <g opacity=\".8\">\n          <linearGradient id=\"af\" x1=\"2484.13\" x2=\"2484.13\" y1=\"338\" y2=\"329\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\n            <stop offset=\"1\" stop-color=\"#040050\"/>\n          </linearGradient>\n          <path fill=\"url(#af)\" d=\"M2479 338s9.19-3 10.27-9v9H2479z\"/>\n          <linearGradient id=\"ag\" x1=\"3315.15\" x2=\"3315.15\" y1=\"338\" y2=\"329\"\n                          gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\n            <stop offset=\"1\" stop-color=\"#040050\"/>\n          </linearGradient>\n          <path fill=\"url(#ag)\" d=\"M2489.27 338H2501s-10.5-3-11.73-9\"/>\n          <linearGradient id=\"ah\" x1=\"2479\" x2=\"2501\" y1=\"352\" y2=\"352\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\n            <stop offset=\"1\" stop-color=\"#040050\"/>\n          </linearGradient>\n          <path fill=\"url(#ah)\" d=\"M2479 338h22v28h-22z\"/>\n        </g>\n        <linearGradient id=\"ai\" x1=\"2644.25\" x2=\"2644.25\" y1=\"280\" y2=\"223.56\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#ai)\" d=\"M2579.5 280s53.5-127 129.5 0h-129.5z\" opacity=\".6\"/>\n        <linearGradient id=\"aj\" x1=\"2816.25\" x2=\"2816.25\" y1=\"280\" y2=\"230\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aj)\" d=\"M2761.5 280s52.16-112.5 109.5 0h-109.5z\"/>\n        <linearGradient id=\"ak\" x1=\"2401.5\" x2=\"2401.5\" y1=\"471.84\" y2=\"446.16\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#ak)\" d=\"M2420 471.84h-37v-7.18a18.5 18.5 0 0 1 37 0v7.18z\"/>\n        <linearGradient id=\"al\" x1=\"2278.5\" x2=\"2278.5\" y1=\"660.84\" y2=\"606\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#al)\" d=\"M2297 660.84h-37V624.5a18.5 18.5 0 0 1 37 0v36.34z\"/>\n        <linearGradient id=\"am\" x1=\"2495.5\" x2=\"2495.5\" y1=\"471.84\" y2=\"446.16\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#am)\" d=\"M2514 471.84h-37v-7.18a18.5 18.5 0 0 1 37 0v7.18z\"/>\n        <linearGradient id=\"an\" x1=\"2590.5\" x2=\"2590.5\" y1=\"470.84\" y2=\"445.16\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#an)\" d=\"M2609 470.84h-37v-7.18a18.5 18.5 0 0 1 37 0v7.18z\"/>\n        <linearGradient id=\"ao\" x1=\"2278.5\" x2=\"2278.5\" y1=\"648\" y2=\"642\"\n                        gradientTransform=\"matrix(1 0 0 -1.1667 0 1404)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#ao)\" d=\"M2260 648h37v7h-37z\"/>\n        <linearGradient id=\"ap\" x1=\"2359.5\" x2=\"2359.5\" y1=\"659.84\" y2=\"605\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#ap)\" d=\"M2378 659.84h-37V623.5a18.5 18.5 0 0 1 37 0v36.34z\"/>\n        <linearGradient id=\"aq\" x1=\"2359.5\" x2=\"2359.5\" y1=\"648.86\" y2=\"642.86\"\n                        gradientTransform=\"matrix(1 0 0 -1.1667 0 1404)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aq)\" d=\"M2341 647h37v7h-37z\"/>\n        <linearGradient id=\"ar\" x1=\"2415\" x2=\"2684\" y1=\"602.5\" y2=\"602.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#ar)\" d=\"M2415 600h269v5h-269z\" opacity=\".6\"/>\n        <linearGradient id=\"as\" x1=\"2415\" x2=\"2684\" y1=\"612.5\" y2=\"612.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#as)\" d=\"M2415 610h269v5h-269z\" opacity=\".6\"/>\n        <linearGradient id=\"at\" x1=\"2415\" x2=\"2684\" y1=\"622.5\" y2=\"622.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#at)\" d=\"M2415 620h269v5h-269z\" opacity=\".6\"/>\n        <linearGradient id=\"au\" x1=\"2415\" x2=\"2684\" y1=\"632.5\" y2=\"632.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#au)\" d=\"M2415 630h269v5h-269z\" opacity=\".6\"/>\n        <linearGradient id=\"av\" x1=\"2415\" x2=\"2684\" y1=\"642.5\" y2=\"642.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#av)\" d=\"M2415 640h269v5h-269z\" opacity=\".6\"/>\n        <linearGradient id=\"aw\" x1=\"2415\" x2=\"2684\" y1=\"652.5\" y2=\"652.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aw)\" d=\"M2415 650h269v5h-269z\" opacity=\".6\"/>\n        <linearGradient id=\"ax\" x1=\"2415\" x2=\"2684\" y1=\"662.5\" y2=\"662.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#ax)\" d=\"M2415 660h269v5h-269z\" opacity=\".6\"/>\n        <linearGradient id=\"ay\" x1=\"2361\" x2=\"2605\" y1=\"730.5\" y2=\"730.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#ay)\" d=\"M2361 728h244v5h-244z\" opacity=\".6\"/>\n        <linearGradient id=\"az\" x1=\"2361\" x2=\"2605\" y1=\"740.5\" y2=\"740.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#az)\" d=\"M2361 738h244v5h-244z\" opacity=\".6\"/>\n        <linearGradient id=\"aA\" x1=\"2361\" x2=\"2605\" y1=\"750.5\" y2=\"750.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aA)\" d=\"M2361 748h244v5h-244z\" opacity=\".6\"/>\n        <linearGradient id=\"aB\" x1=\"2361\" x2=\"2605\" y1=\"760.5\" y2=\"760.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aB)\" d=\"M2361 758h244v5h-244z\" opacity=\".6\"/>\n        <linearGradient id=\"aC\" x1=\"2361\" x2=\"2605\" y1=\"770.5\" y2=\"770.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aC)\" d=\"M2361 768h244v5h-244z\" opacity=\".6\"/>\n        <linearGradient id=\"aD\" x1=\"2361\" x2=\"2605\" y1=\"780.5\" y2=\"780.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aD)\" d=\"M2361 778h244v5h-244z\" opacity=\".6\"/>\n        <linearGradient id=\"aE\" x1=\"2361\" x2=\"2605\" y1=\"790.5\" y2=\"790.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aE)\" d=\"M2361 788h244v5h-244z\" opacity=\".6\"/>\n        <linearGradient id=\"aF\" x1=\"2361\" x2=\"2605\" y1=\"800.5\" y2=\"800.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aF)\" d=\"M2361 798h244v5h-244z\" opacity=\".6\"/>\n        <linearGradient id=\"aG\" x1=\"2415\" x2=\"2684\" y1=\"672.5\" y2=\"672.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aG)\" d=\"M2415 670h269v5h-269z\" opacity=\".6\"/>\n        <linearGradient id=\"aH\" x1=\"2496\" x2=\"2496\" y1=\"529\" y2=\"495\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aH)\" d=\"M2383 495h226v34h-226z\" opacity=\".2\"/>\n        <linearGradient id=\"aI\" x1=\"2498\" x2=\"2498\" y1=\"547.5\" y2=\"513.5\"\n                        gradientTransform=\"matrix(1 0 0 -.2353 0 665.82)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aI)\" d=\"M2385 537h226v8h-226z\" opacity=\".2\"/>\n        <linearGradient id=\"aJ\" x1=\"2283\" x2=\"2283\" y1=\"755\" y2=\"728\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aJ)\" d=\"M2222 728h122v27h-122z\" opacity=\".5\"/>\n        <linearGradient id=\"aK\" x1=\"2283\" x2=\"2283\" y1=\"790\" y2=\"763\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aK)\" d=\"M2222 763h122v27h-122z\" opacity=\".5\"/>\n        <linearGradient id=\"aL\" x1=\"2283\" x2=\"2283\" y1=\"825\" y2=\"798\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aL)\" d=\"M2222 798h122v27h-122z\" opacity=\".5\"/>\n        <linearGradient id=\"aM\" x1=\"2768.5\" x2=\"2768.5\" y1=\"649\" y2=\"597\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040031\"/>\n        </linearGradient>\n        <path fill=\"url(#aM)\"\n              d=\"M2800 649h-63v-25.75a26.25 26.25 0 0 1 26.25-26.25h11a25.75 25.75 0 0 1 25.75 25.75V649z\"\n              opacity=\".9\"/>\n        <linearGradient id=\"aN\" x1=\"2801.5\" x2=\"2801.5\" y1=\"496\" y2=\"416.8\"\n                        gradientTransform=\"matrix(0 1 .1389 0 2669.11 -2175)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aN)\" d=\"M2738 649v-45h-11v45z\"/>\n        <linearGradient id=\"aO\" x1=\"2801.5\" x2=\"2801.5\" y1=\"1014.4\" y2=\"935.2\"\n                        gradientTransform=\"matrix(0 1 .1389 0 2669.11 -2175)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aO)\" d=\"M2810 649v-45h-11v45z\"/>\n        <linearGradient id=\"aP\" x1=\"2768.5\" x2=\"2768.5\" y1=\"949.6\" y2=\"870.4\"\n                        gradientTransform=\"matrix(1 0 0 -.1389 0 728.89)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aP)\" d=\"M2801 597h-65a11 11 0 0 0-11 11h87a11 11 0 0 0-11-11z\"/>\n        <linearGradient id=\"aQ\" x1=\"2769\" x2=\"2724.36\" y1=\"606.5\" y2=\"606.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aQ)\" d=\"M2725 614.5s-4-9.5 8-11.5 31 7 33 0 3-7 3-7v21l-44-2.5z\"/>\n        <linearGradient id=\"aR\" x1=\"2715\" x2=\"2670.59\" y1=\"606.5\" y2=\"606.5\"\n                        gradientTransform=\"matrix(-1 0 0 1 5483.36 0)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aR)\" d=\"M2812 617s4.36-12-7.64-14-31 7-33 0-3-7-3-7l.64 21h43z\"/>\n        <linearGradient id=\"aS\" x1=\"2921.5\" x2=\"2921.5\" y1=\"653\" y2=\"601\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040031\"/>\n        </linearGradient>\n        <path fill=\"url(#aS)\"\n              d=\"M2953 653h-63v-25.75a26.25 26.25 0 0 1 26.25-26.25h11a25.75 25.75 0 0 1 25.75 25.75V653z\"\n              opacity=\".9\"/>\n        <linearGradient id=\"aT\" x1=\"2805.5\" x2=\"2805.5\" y1=\"1597.6\" y2=\"1518.4\"\n                        gradientTransform=\"matrix(0 1 .1389 0 2669.11 -2175)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aT)\" d=\"M2891 653v-45h-11v45z\"/>\n        <linearGradient id=\"aU\" x1=\"2805.5\" x2=\"2805.5\" y1=\"2116\" y2=\"2036.8\"\n                        gradientTransform=\"matrix(0 1 .1389 0 2669.11 -2175)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aU)\" d=\"M2963 653v-45h-11v45z\"/>\n        <linearGradient id=\"aV\" x1=\"2921.5\" x2=\"2921.5\" y1=\"920.8\" y2=\"841.6\"\n                        gradientTransform=\"matrix(1 0 0 -.1389 0 728.89)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aV)\" d=\"M2954 601h-65a11 11 0 0 0-11 11h87a11 11 0 0 0-11-11z\"/>\n        <linearGradient id=\"aW\" x1=\"2922\" x2=\"2877.36\" y1=\"610.5\" y2=\"610.5\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aW)\" d=\"M2878 618.5s-4-9.5 8-11.5 31 7 33 0 3-7 3-7v21l-44-2.5z\"/>\n        <linearGradient id=\"aX\" x1=\"2562\" x2=\"2517.59\" y1=\"610.5\" y2=\"610.5\"\n                        gradientTransform=\"matrix(-1 0 0 1 5483.36 0)\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aX)\" d=\"M2965 621s4.36-12-7.64-14-31 7-33 0-3-7-3-7l.64 21h43z\"/>\n        <linearGradient id=\"aY\" x1=\"2705.56\" x2=\"2659.92\" y1=\"786.22\" y2=\"759.87\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aY)\" d=\"M2700 795.84h-37V759.5a18.5 18.5 0 0 1 37 0v36.34z\"/>\n        <linearGradient id=\"aZ\" x1=\"2810.56\" x2=\"2764.92\" y1=\"786.22\" y2=\"759.87\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#aZ)\" d=\"M2805 795.84h-37V759.5a18.5 18.5 0 0 1 37 0v36.34z\"/>\n        <linearGradient id=\"ba\" x1=\"2912.56\" x2=\"2866.92\" y1=\"786.22\" y2=\"759.87\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"url(#ba)\" d=\"M2907 795.84h-37V759.5a18.5 18.5 0 0 1 37 0v36.34z\"/>\n        <linearGradient id=\"bb\" x1=\"1266.1\" x2=\"1136.9\" y1=\"952.01\" y2=\"877.42\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"none\" stroke=\"url(#bb)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\n              stroke-width=\"2\" d=\"M1284 919s-64-6.67-94-4.29-35-3.33-41-4.29-30 0-30 0\" opacity=\".13\"/>\n        <linearGradient id=\"bc\" x1=\"1257.46\" x2=\"1105.54\" y1=\"969.67\" y2=\"881.95\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"none\" stroke=\"url(#bc)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\n              stroke-width=\"2\" d=\"M1285 919.98s-3-.5-8 2.91c-5 3.4-115 5.84-135 14.11 0 0-46 0-64-5.35\" opacity=\".07\"/>\n        <linearGradient id=\"bd\" x1=\"1266.13\" x2=\"1211.87\" y1=\"929.16\" y2=\"897.84\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"none\" stroke=\"url(#bd)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\n              stroke-width=\"2\" d=\"M1272 917s-56-6-66-7\" opacity=\".13\"/>\n        <linearGradient id=\"be\" x1=\"1245.24\" x2=\"1149.76\" y1=\"950.56\" y2=\"895.44\" gradientUnits=\"userSpaceOnUse\">\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\n          <stop offset=\"1\" stop-color=\"#040050\"/>\n        </linearGradient>\n        <path fill=\"none\" stroke=\"url(#be)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\n              stroke-width=\"2\" d=\"M1260 923c-13-1-24-1-43 6s-34 2-43 0-27-6-39-6\" opacity=\".13\"/>\n      </svg>\n\n      <svg *ngSwitchDefault viewBox=\"4302 163 1218 406\">\n        <defs>\n          <style>.aa {\n            opacity: 0.6;\n          }</style>\n          <linearGradient id=\"aa\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\n            <stop offset=\"0\" stop-color=\"#000075\"/>\n            <stop offset=\"1\" stop-color=\"#ff8c8c\"/>\n          </linearGradient>\n        </defs>\n        <path class=\"aa\" fill=\"url(#aa)\"\n              d=\"M20,0H1198a20,20,0,0,1,20,20V406a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z\"\n              transform=\"translate(4302 163)\"/>\n      </svg>\n\n      <div class=\"header-content__wrapper\">\n\n        <div class=\"today-weather__container\">\n          <!--{{today}}-->\n          <div class=\"temp-state__container\">\n            <span class=\"temperature__text\">{{temp}}°</span>\n            <span class=\"weather-state__text\">{{state}}</span>\n          </div>\n          <div class=\"hum-wind__container\">\n            <div class=\"hum__container\">\n              <span class=\"hum__text\">humidity</span>\n              <span class=\"hum-value__text\">{{hum}} %</span>\n            </div>\n\n            <div class=\"hum-wind__separator\">&nbsp;</div>\n\n            <div class=\"wind__container\">\n              <span class=\"wind__text\">wind</span>\n              <span class=\"wind-value__text\">{{wind}} K/M</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"city-name__container\">\n          <div class=\"city-name__underline\">\n            <span class=\"city-name__text\">{{city}}</span>\n          </div>\n        </div>\n      </div>\n\n    </section>\n\n    <main class=\"body-content__wrapper\">\n      <section class=\"twitter-feed__container\">\n        <div class=\"twitter-feed__header\">\n          <svg class=\"twitter__icon\" viewBox=\"4332 625.812 30 24.375\">\n            <defs>\n              <style>.twitter-icon-fill {\n                fill: #03a9f4;\n              }</style>\n            </defs>\n            <path class=\"twitter-icon-fill\"\n                  d=\"M30,50.886a12.823,12.823,0,0,1-3.544.971,6.116,6.116,0,0,0,2.706-3.4,12.291,12.291,0,0,1-3.9,1.489,6.15,6.15,0,0,0-10.639,4.206,6.333,6.333,0,0,0,.143,1.4A17.408,17.408,0,0,1,2.089,49.121a6.152,6.152,0,0,0,1.89,8.22A6.074,6.074,0,0,1,1.2,56.584v.067a6.179,6.179,0,0,0,4.928,6.043,6.139,6.139,0,0,1-1.613.2,5.439,5.439,0,0,1-1.164-.1A6.209,6.209,0,0,0,9.1,67.076,12.358,12.358,0,0,1,1.472,69.7,11.521,11.521,0,0,1,0,69.615a17.315,17.315,0,0,0,9.435,2.76c11.318,0,17.505-9.375,17.505-17.5,0-.272-.009-.534-.023-.8A12.269,12.269,0,0,0,30,50.886Z\"\n                  transform=\"translate(4332 577.812)\"/>\n          </svg>\n          <span class=\"twitter-feed__text\">Twitter Feed</span>\n          <span class=\"twitter-feed-tag__text\">#{{city}}</span>\n        </div>\n        <div class=\"twitter-feed__body\">\n          <!--TODO: retrieve tweets from twitter API-->\n        </div>\n      </section>\n\n      <section class=\"forecast__container\">\n\n        <div class=\"day-weather__container\" [ngSwitch]=\"true\">\n          <span class=\"day-name__text\">{{day1Name}}</span>\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day1State === 'Clouds'\"\n               viewBox=\"2436.9 -843.1 275.5 274.1\">\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\n              <path fill=\"#ffde17\"\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\n                    data-name=\"Subtraction 1\"/>\n            </g>\n          </svg>\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day1State === 'Rain' || day1State === 'Drizzle'\"\n               viewBox=\"3170 -843.1 163.5 242.7\">\n            <g data-name=\"Rain Icon\">\n              <g data-name=\"Water Drops\">\n                <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\n                <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\n              </g>\n            </g>\n          </svg>\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day1State === 'Storm'\"\n               viewBox=\"3487.9 -810.7 291.2 200.3\">\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1529 490.4)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1569.6 467.8)\"/>\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\n                      transform=\"translate(1618.9 476.8)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1631.8 450)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1687.1 477.5)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1709.6 507.3)\"/>\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\n                      transform=\"translate(1639.6 500.1)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1569.6 507.3)\"/>\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\n                    data-name=\"Path 60\"/>\n            </g>\n          </svg>\n\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day1State === 'Sunny' || day1State === 'Clear'\"\n               viewBox=\"2050 -845 262 262\">\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\n          </svg>\n\n          <span class=\"day-temp__text\">{{day1Temp}}°</span>\n          <span class=\"day-state__text\">{{day1State}}</span>\n        </div>\n\n        <div class=\"day-weather__container\" [ngSwitch]=\"true\">\n          <span class=\"day-name__text\">{{day2Name}}</span>\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day2State === 'Clouds'\"\n               viewBox=\"2436.9 -843.1 275.5 274.1\">\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\n              <path fill=\"#ffde17\"\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\n                    data-name=\"Subtraction 1\"/>\n            </g>\n          </svg>\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day2State === 'Rain' || day2State === 'Drizzle'\"\n               viewBox=\"3170 -843.1 163.5 242.7\">\n            <g data-name=\"Rain Icon\">\n              <g data-name=\"Water Drops\">\n                <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\n                <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\n              </g>\n            </g>\n          </svg>\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day2State === 'Storm'\"\n               viewBox=\"3487.9 -810.7 291.2 200.3\">\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1529 490.4)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1569.6 467.8)\"/>\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\n                      transform=\"translate(1618.9 476.8)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1631.8 450)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1687.1 477.5)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1709.6 507.3)\"/>\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\n                      transform=\"translate(1639.6 500.1)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1569.6 507.3)\"/>\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\n                    data-name=\"Path 60\"/>\n            </g>\n          </svg>\n\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day2State === 'Sunny' || day2State === 'Clear'\"\n               viewBox=\"2050 -845 262 262\">\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\n          </svg>\n          <span class=\"day-temp__text\">{{day2Temp}}°</span>\n          <span class=\"day-state__text\">{{day2State}}</span>\n        </div>\n\n        <div class=\"day-weather__container\" [ngSwitch]=\"true\">\n          <span class=\"day-name__text\">{{day3Name}}</span>\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day3State === 'Clouds'\"\n               viewBox=\"2436.9 -843.1 275.5 274.1\">\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\n              <path fill=\"#ffde17\"\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\n                    data-name=\"Subtraction 1\"/>\n            </g>\n          </svg>\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day3State === 'Rain' || day3State === 'Drizzle'\"\n               viewBox=\"3170 -843.1 163.5 242.7\">\n            <g data-name=\"Rain Icon\">\n              <g data-name=\"Water Drops\">\n                <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\n                <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\n              </g>\n            </g>\n          </svg>\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day3State === 'Storm'\"\n               viewBox=\"3487.9 -810.7 291.2 200.3\">\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1529 490.4)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1569.6 467.8)\"/>\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\n                      transform=\"translate(1618.9 476.8)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1631.8 450)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1687.1 477.5)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1709.6 507.3)\"/>\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\n                      transform=\"translate(1639.6 500.1)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1569.6 507.3)\"/>\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\n                    data-name=\"Path 60\"/>\n            </g>\n          </svg>\n\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day3State === 'Sunny' || day3State === 'Clear'\"\n               viewBox=\"2050 -845 262 262\">\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\n          </svg>\n\n          <span class=\"day-temp__text\">{{day3Temp}}°</span>\n          <span class=\"day-state__text\">{{day3State}}</span>\n        </div>\n\n\n        <div class=\"day-weather__container\" [ngSwitch]=\"true\">\n          <span class=\"day-name__text\">{{day4Name}}</span>\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day4State === 'Clouds'\"\n               viewBox=\"2436.9 -843.1 275.5 274.1\">\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\n              <path fill=\"#ffde17\"\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\n                    data-name=\"Subtraction 1\"/>\n            </g>\n          </svg>\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day4State === 'Rain' || day4State === 'Drizzle'\"\n               viewBox=\"3170 -843.1 163.5 242.7\">\n            <g data-name=\"Rain Icon\">\n              <g data-name=\"Water Drops\">\n                <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\n                <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\n              </g>\n            </g>\n          </svg>\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day4State === 'Storm'\"\n               viewBox=\"3487.9 -810.7 291.2 200.3\">\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1529 490.4)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1569.6 467.8)\"/>\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\n                      transform=\"translate(1618.9 476.8)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1631.8 450)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1687.1 477.5)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1709.6 507.3)\"/>\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\n                      transform=\"translate(1639.6 500.1)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1569.6 507.3)\"/>\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\n                    data-name=\"Path 60\"/>\n            </g>\n          </svg>\n\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day4State === 'Sunny' || day4State === 'Clear'\"\n               viewBox=\"2050 -845 262 262\">\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\n          </svg>\n\n          <span class=\"day-temp__text\">{{day4Temp}}°</span>\n          <span class=\"day-state__text\">{{day4State}}</span>\n        </div>\n\n        <div class=\"day-weather__container\" [ngSwitch]=\"true\">\n          <span class=\"day-name__text\">{{day5Name}}</span>\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day5State === 'Clouds'\"\n               viewBox=\"2436.9 -843.1 275.5 274.1\">\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\n              <path fill=\"#ffde17\"\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\n                    data-name=\"Subtraction 1\"/>\n            </g>\n          </svg>\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day5State === 'Rain' || day5State === 'Drizzle'\"\n               viewBox=\"3170 -843.1 163.5 242.7\">\n            <g data-name=\"Rain Icon\">\n              <g data-name=\"Water Drops\">\n                <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\n                <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\n              </g>\n            </g>\n          </svg>\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day5State === 'Storm'\"\n               viewBox=\"3487.9 -810.7 291.2 200.3\">\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1529 490.4)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1569.6 467.8)\"/>\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\n                      transform=\"translate(1618.9 476.8)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1631.8 450)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1687.1 477.5)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1709.6 507.3)\"/>\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\n                      transform=\"translate(1639.6 500.1)\"/>\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\n                       transform=\"translate(1569.6 507.3)\"/>\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\n                    data-name=\"Path 60\"/>\n            </g>\n          </svg>\n\n\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day5State === 'Sunny' || day5State === 'Clear'\"\n               viewBox=\"2050 -845 262 262\">\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\n          </svg>\n\n          <span class=\"day-temp__text\">{{day5Temp}}°</span>\n          <span class=\"day-state__text\">{{day5State}}</span>\n        </div>\n      </section>\n\n\n    </main>\n\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/details/details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(activeRouter, weather) {
        this.activeRouter = activeRouter;
        this.weather = weather;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var todayNumberInWeek = new Date().getDay();
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.today = days[todayNumberInWeek];
        this.activeRouter.paramMap.subscribe(function (route) {
            _this.city = route.params.city;
            _this.weather.getWeatherState(_this.city).subscribe(function (state) { return _this.state = state; });
            _this.weather.getCurrentTemp(_this.city).subscribe(function (temperature) { return _this.temp = temperature; });
            _this.weather.getCurrentHum(_this.city).subscribe(function (humidity) { return _this.hum = humidity; });
            _this.weather.getCurrentWind(_this.city).subscribe(function (windspeed) { return _this.wind = windspeed; });
            _this.weather.getForecast(_this.city).subscribe(function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var date = new Date(data[i].dt_txt).getDay();
                    console.log(days[date]);
                    if (((date === todayNumberInWeek + 1) || (todayNumberInWeek === 6 && date === 0)) && !_this.day1Name) {
                        _this.day1Name = days[date];
                        _this.day1State = data[i].weather[0].main;
                        _this.day1Temp = Math.round(data[i].main.temp);
                    }
                    else if (!!_this.day1Name && !_this.day2Name && days[date] !== _this.day1Name) {
                        _this.day2Name = days[date];
                        _this.day2State = data[i].weather[0].main;
                        _this.day2Temp = Math.round(data[i].main.temp);
                    }
                    else if (!!_this.day2Name && !_this.day3Name && days[date] !== _this.day2Name) {
                        _this.day3Name = days[date];
                        _this.day3State = data[i].weather[0].main;
                        _this.day3Temp = Math.round(data[i].main.temp);
                    }
                    else if (!!_this.day3Name && !_this.day4Name && days[date] !== _this.day3Name) {
                        _this.day4Name = days[date];
                        _this.day4State = data[i].weather[0].main;
                        _this.day4Temp = Math.round(data[i].main.temp);
                    }
                    else if (!!_this.day4Name && !_this.day5Name && days[date] !== _this.day4Name) {
                        _this.day5Name = days[date];
                        _this.day5State = data[i].weather[0].main;
                        _this.day5Temp = Math.round(data[i].main.temp);
                    }
                }
            });
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/pages/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/pages/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Home Layout*/\n.main__container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[3];\n      grid-template-columns: repeat(3, 1fr);\n  -ms-grid-rows: (1fr)[auto-fill];\n      grid-template-rows: repeat(auto-fill, 1fr);\n  align-items: center;\n  justify-items: center;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main__container\">\n\n  <app-weather-card></app-weather-card>\n  <app-add-card></app-add-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__container {\n  background-color: #0c1066;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.login-card {\n  display: flex;\n  background-color: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  width: 85%;\n  height: 80%;\n}\n\n.login-welcome-screen {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 5 5;\n  background: linear-gradient(#42A8F2, #7611f9);\n}\n\n.login-content {\n  flex: 3 3;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-form {\n  display: flex;\n  flex-flow: column;\n  width: 80%;\n}\n\n.login__illustration {\n  height: 80%;\n  width: 80%;\n}\n\n.login-welcome-text {\n  color: #39437a;\n  letter-spacing: 0.03rem;\n  margin-bottom: 6rem;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n.login-input {\n  margin: 0.75rem 0;\n  padding: 1rem;\n  border-radius: 2rem;\n  outline: none;\n  border: none;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n.login-btn {\n  background: linear-gradient(#4fffa1, #4ff0ff);\n  padding: 1rem;\n  border-radius: 2rem;\n  outline: none;\n  border: none;\n  color: white;\n  font-size: 1.1rem;\n  cursor: pointer;\n  margin-top: 1rem;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n.login-btn:hover {\n  background: linear-gradient(to right, #e21649, #ffb600);\n}\n\n.login-input::-webkit-input-placeholder {\n  color: #39437a;\n  font-size: 0.9rem;\n}\n\n.login-input:-ms-input-placeholder {\n  color: #39437a;\n  font-size: 0.9rem;\n}\n\n.login-input::-ms-input-placeholder {\n  color: #39437a;\n  font-size: 0.9rem;\n}\n\n.login-input::placeholder {\n  color: #39437a;\n  font-size: 0.9rem;\n}\n\n.signup-notice {\n  margin-top: 1rem;\n  display: flex;\n  font-size: 0.8rem;\n}\n\n.signup-link {\n  text-decoration: none;\n  color: #ff3a82;\n}\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main__container\">\n  <div class=\"login-card\">\n\n    <main class=\"login-content\">\n      <!-- login form -->\n      <h1 class=\"login-welcome-text\">Welcome Back!</h1>\n      <form (submit)=\"login()\" method=\"post\" class=\"login-form\">\n        <input type=\"text\" autofocus placeholder=\"Account Username\" name=\"username\" class=\"login-input\">\n        <input type=\"password\" placeholder=\"Password\" name=\"password\" class=\"login-input\">\n        <input type=\"submit\" name=\"submit\" placeholder=\"Log in\" class=\"login-btn\">\n      </form>\n    </main>\n    <!-- linking to signup -->\n    <aside class=\"login__illustration\">\n      <span class=\"signup-notice\">Don't have an account? &nbsp;</span>\n      <a class=\"signup-link\" href=\"/signup/index.php\">Sign up</a>\n    </aside>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/ui/ui.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/ui/ui.service.ts ***!
  \*******************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiService = /** @class */ (function () {
    function UiService() {
        // TODO: if the user is signed in get the default value from Firebase
        this.darkModeState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    UiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UiService);
    return UiService;
}());



/***/ }),

/***/ "./src/app/services/weather/weather.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/weather/weather.service.ts ***!
  \*****************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getCityWeatherByName = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + metric + "&APPID=952d6b1a52fe15a7b901720074680562")
            .subscribe(function (data) {
            dataSub.next(data['weather']);
        }, function (err) {
            console.log(err);
        });
        return dataSub;
    };
    WeatherService.prototype.getCitiesWeathersByNames = function (cities, metric) {
        var _this = this;
        if (metric === void 0) { metric = 'metric'; }
        var citiesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        cities.forEach(function (city) {
            citiesSubject.next(_this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + metric + "&APPID=952d6b1a52fe15a7b901720074680562"));
        });
        return citiesSubject;
    };
    WeatherService.prototype.getWeatherState = function (city) {
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=952d6b1a52fe15a7b901720074680562")
            .subscribe(function (data) {
            dataSubject.next(data['weather'][0].main);
        });
        return dataSubject;
    };
    WeatherService.prototype.getCurrentTemp = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + metric + "&APPID=952d6b1a52fe15a7b901720074680562")
            .subscribe(function (weather) {
            dataSubject.next(Math.round(Number(weather.main.temp)));
        });
        return dataSubject;
    };
    WeatherService.prototype.getCurrentHum = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + metric + "&APPID=952d6b1a52fe15a7b901720074680562")
            .subscribe(function (weather) {
            console.log(weather);
            dataSubject.next(weather.main.humidity);
        });
        return dataSubject;
    };
    WeatherService.prototype.getCurrentWind = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + metric + "&APPID=952d6b1a52fe15a7b901720074680562")
            .subscribe(function (weather) {
            dataSubject.next(Math.round(Math.round(weather.wind.speed)));
        });
        return dataSubject;
    };
    WeatherService.prototype.getMaxTemp = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        var max;
        this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + metric + "&APPID=952d6b1a52fe15a7b901720074680562")
            .subscribe(function (weather) {
            max = weather.list[0].main.temp;
            weather.list.forEach(function (value) {
                if (max < value.main.temp) {
                    max = value.main.temp;
                }
            });
            dataSubject.next(Math.round(max));
        });
        return dataSubject;
    };
    WeatherService.prototype.getMinTemp = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        var min;
        this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + metric + "&APPID=952d6b1a52fe15a7b901720074680562")
            .subscribe(function (weather) {
            min = weather.list[0].main.temp;
            weather.list.forEach(function (value) {
                if (min > value.main.temp) {
                    min = value.main.temp;
                }
            });
            dataSubject.next(Math.round(min));
        });
        return dataSubject;
    };
    WeatherService.prototype.getForecast = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + metric + "&APPID=952d6b1a52fe15a7b901720074680562")
            .subscribe(function (weather) {
            dataSubject.next(weather.list);
        });
        return dataSubject;
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/ui/add-card/add-card.component.css":
/*!****************************************************!*\
  !*** ./src/app/ui/add-card/add-card.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add__card {\n  background-color: #ffffff;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: 1fr 1fr;\n      grid-template-rows: 1fr 1fr;\n  padding: 2rem;\n  margin: 2rem;\n  width: 19rem;\n  height: 30rem;\n  justify-items: center;\n  cursor: pointer;\n  border-radius: 1.75rem;\n  -webkit-animation: fadein 1.25s ease-in-out 0ms 1;\n          animation: fadein 1.25s ease-in-out 0ms 1;\n  color: #443282;\n}\n\n.add__card-dark {\n  background: linear-gradient(to bottom, #711B86, #00057A);\n  color: white;\n}\n\n.card__title {\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n}\n\n.city__illustration {\n  width: 20rem;\n}\n\n.body__container {\n  align-self: end;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: column;\n}\n\n.add__icon {\n  width: 10rem;\n  margin-bottom: 1.15rem;\n}\n"

/***/ }),

/***/ "./src/app/ui/add-card/add-card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/add-card/add-card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add__card\" routerLink=\"/add\" [ngClass]=\"{'add__card-dark': darkMode}\">\n  <div class=\"header__container\">\n    <span class=\"card__title\">Add city</span>\n  </div>\n  <div class=\"body__container\">\n    <svg class=\"add__icon\" id=\"Plus_Icon\" data-name=\"Plus Icon\" viewBox=\"1454.4 326.4 209.1 209.1\">\n      <defs>\n        <style>\n          .cls-299 {\n            fill: #7effcc\n          }\n        </style>\n        <filter id=\"Ellipse_7\" width=\"209.1\" height=\"209.1\" x=\"1454.4\" y=\"326.4\" filterUnits=\"userSpaceOnUse\">\n          <feOffset dy=\"3\"/>\n          <feGaussianBlur result=\"blur\" stdDeviation=\"3\"/>\n          <feFlood flood-color=\"#333\" flood-opacity=\".1\"/>\n          <feComposite in2=\"blur\" operator=\"in\"/>\n          <feComposite in=\"SourceGraphic\"/>\n        </filter>\n      </defs>\n      <g filter=\"url(#Ellipse_7)\">\n        <circle id=\"Ellipse_7-2\" cx=\"95.6\" cy=\"95.6\" r=\"95.6\" fill=\"#f5f8ff\" data-name=\"Ellipse 7\"\n                transform=\"translate(1463.4 332.4)\"/>\n      </g>\n      <rect id=\"Rectangle_3\" width=\"12.8\" height=\"142.9\" class=\"cls-299\" data-name=\"Rectangle 3\" rx=\"5\"\n            transform=\"translate(1552.6 358.1)\"/>\n      <rect id=\"Rectangle_4\" width=\"12.8\" height=\"142.9\" class=\"cls-299\" data-name=\"Rectangle 4\" rx=\"5\"\n            transform=\"rotate(90 603.6 1026.8)\"/>\n    </svg>\n    <svg class=\"city__illustration\" id=\"City_Illustration\" data-name=\"City Illustration\"\n         viewBox=\"1367.8 616.6 403.6 331.4\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: #a1ffd9\n          }\n\n          .cls-2 {\n            fill: #f5f5f5\n          }\n\n          .cls-3 {\n            fill: #c4d1fe\n          }\n\n          .cls-6 {\n            fill: #bffee6\n          }\n\n          .cls-7 {\n            fill: #31feae\n          }\n\n          .cls-11 {\n            fill: #7d9cff\n          }\n\n          .cls-14 {\n            fill: #5f84fb\n          }\n\n          .cls-17, .cls-19 {\n            fill: none\n          }\n\n          .cls-17 {\n            stroke: #fff;\n            stroke-width: 2px\n          }\n\n          .cls-18 {\n            fill: #606cb9\n          }\n\n          .cls-19 {\n            stroke: #a1ffd9;\n            stroke-width: 3px\n          }\n        </style>\n      </defs>\n      <path id=\"City_grass\" d=\"M1488.3 646.3v-30H1892v30z\" class=\"cls-1\" data-name=\"City grass\"\n            transform=\"translate(-120.5 301.7)\"/>\n      <g id=\"Buidings\">\n        <g id=\"Buiding_Shadow\" data-name=\"Buiding Shadow\">\n          <path id=\"Path_23\" d=\"M1488.3 777.8V616.3h26.6v161.5z\" class=\"cls-2\" data-name=\"Path 23\"\n                transform=\"translate(-120.5 48.4)\"/>\n          <path id=\"Path_29\" d=\"M1488.3 788.9V616.3h26.6V789z\" class=\"cls-2\" data-name=\"Path 29\"\n                transform=\"translate(-30.5 5.3)\"/>\n          <path id=\"Path_21\" d=\"M1488.3 783.8V616.3h96.8v167.5z\" class=\"cls-2\" data-name=\"Path 21\"\n                transform=\"translate(176.5 45.4)\"/>\n          <path id=\"Path_30\" d=\"M1488.3 735V616.3h34.3V735z\" class=\"cls-2\" data-name=\"Path 30\"\n                transform=\"translate(128.5 48.2)\"/>\n          <path id=\"Path_31\" d=\"M1488.3 811V616.3h34.3V811z\" class=\"cls-2\" data-name=\"Path 31\"\n                transform=\"translate(28.5 5.2)\"/>\n        </g>\n        <g id=\"Core\">\n          <path id=\"Path_8\" d=\"M1488.3 771.2V616.3h59.7v154.9z\" class=\"cls-3\" data-name=\"Path 8\"\n                transform=\"translate(-112 54)\"/>\n          <path id=\"Path_9\" d=\"M1488.3 825V616.2h96.8V825z\" class=\"cls-1\" data-name=\"Path 9\"\n                transform=\"translate(-43.5 .3)\"/>\n          <path id=\"Path_10\" fill=\"#7affcb\" d=\"M1488.3 660.7v-44.4h96.8v44.4z\" data-name=\"Path 10\"\n                transform=\"translate(62.5 164.4)\"/>\n          <path id=\"Path_11\" d=\"M1488.3 771.2V616.3h96.8v154.9z\" class=\"cls-3\" data-name=\"Path 11\"\n                transform=\"translate(168.5 54)\"/>\n        </g>\n      </g>\n      <path id=\"City_water\" fill=\"#8091ff\" d=\"M1488.3 692.6v-76.3H1892v76.3z\" data-name=\"City water\"\n            transform=\"translate(-120.5 217.2)\"/>\n      <g id=\"Windows\" transform=\"translate(8 40)\">\n        <path id=\"Path_13\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" class=\"cls-6\" data-name=\"Path 13\"\n              transform=\"translate(-43.2 -19.8)\"/>\n        <path id=\"Path_14\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" class=\"cls-7\" data-name=\"Path 14\"\n              transform=\"translate(-43.2 2.2)\"/>\n        <path id=\"Path_25\" d=\"M1488.3 628.5v-12.2h83.7v12.2z\" class=\"cls-7\" data-name=\"Path 25\"\n              transform=\"translate(168.2 110.2)\"/>\n        <path id=\"Path_26\" d=\"M1488.3 628.5v-12.2h83.7v12.2z\" class=\"cls-7\" data-name=\"Path 26\"\n              transform=\"translate(169.2 132.2)\"/>\n        <path id=\"Path_18\" fill=\"#a1feda\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" data-name=\"Path 18\"\n              transform=\"translate(-108.2 26.2)\"/>\n        <path id=\"Path_20\" fill=\"#3564fb\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" data-name=\"Path 20\"\n              transform=\"translate(-108.2 146.2)\"/>\n        <path id=\"Path_19\" fill=\"#a2b8ff\" d=\"M1488.3 665.4v-49h36.6v49z\" data-name=\"Path 19\"\n              transform=\"translate(-108.2 54.3)\"/>\n        <path id=\"Path_15\" d=\"M1488.3 651v-34.7h36.6V651z\" class=\"cls-11\" data-name=\"Path 15\"\n              transform=\"translate(-3.2 47.2)\"/>\n        <path id=\"Path_16\" fill=\"#3b5dca\" d=\"M1488.3 651v-34.7h36.6V651z\" data-name=\"Path 16\"\n              transform=\"translate(-46.2 46.2)\"/>\n        <path id=\"Path_17\" fill=\"#597ff7\" d=\"M1488.3 651v-34.7h36.6V651z\" data-name=\"Path 17\"\n              transform=\"translate(-12.2 117.2)\"/>\n        <path id=\"Path_27\" d=\"M1488.3 641.2v-24.9h62.9v24.9z\" class=\"cls-6\" data-name=\"Path 27\"\n              transform=\"translate(169.1 28.2)\"/>\n        <path id=\"Path_28\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-14\" data-name=\"Path 28\"\n              transform=\"translate(194.4 56)\"/>\n        <path id=\"Path_46\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-14\" data-name=\"Path 46\"\n              transform=\"translate(194.4 82)\"/>\n        <path id=\"Path_47\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-14\" data-name=\"Path 47\"\n              transform=\"translate(169.4 82)\"/>\n        <path id=\"Path_48\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-7\" data-name=\"Path 48\"\n              transform=\"translate(169.4 56)\"/>\n        <path id=\"Path_44\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-11\" data-name=\"Path 44\"\n              transform=\"translate(232.4 56)\"/>\n        <path id=\"Path_45\" fill=\"#aebff7\" d=\"M1488.3 634.3v-18h17.5v18z\" data-name=\"Path 45\"\n              transform=\"translate(232.4 84)\"/>\n      </g>\n      <path id=\"Bridge\" fill=\"#ccc8ff\"\n            d=\"M1580.5 875.5c1-.3-17.9-39 .2-85.3h40s-11.4 42.6 5.5 85.3c-47.4-1.7-46.7.3-45.7 0z\"\n            transform=\"translate(8 40)\"/>\n      <g id=\"Water_Turbulence\" data-name=\"Water Turbulence\" transform=\"translate(8 40)\">\n        <g id=\"Group_4\" data-name=\"Group 4\">\n          <path id=\"Path_42\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\n                transform=\"translate(11.8 2)\"/>\n          <path id=\"Path_43\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\n                data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\n        </g>\n        <g id=\"Group_5\" data-name=\"Group 5\" transform=\"translate(74 -14)\">\n          <path id=\"Path_42-2\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\n                transform=\"translate(11.8 2)\"/>\n          <path id=\"Path_43-2\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\n                data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\n        </g>\n        <g id=\"Group_8\" data-name=\"Group 8\" transform=\"translate(85 17)\">\n          <path id=\"Path_42-3\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\n                transform=\"translate(11.8 2)\"/>\n          <path id=\"Path_43-3\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\n                data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\n        </g>\n        <g id=\"Group_17\" data-name=\"Group 17\" transform=\"translate(315 14)\">\n          <path id=\"Path_42-4\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\n                transform=\"translate(11.8 2)\"/>\n          <path id=\"Path_43-4\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\n                data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\n        </g>\n        <g id=\"Group_18\" data-name=\"Group 18\" transform=\"translate(245 -17)\">\n          <path id=\"Path_42-5\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\n                transform=\"translate(11.8 2)\"/>\n          <path id=\"Path_43-5\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\n                data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\n        </g>\n      </g>\n      <g id=\"Fence\" transform=\"translate(8 40)\">\n        <g id=\"Poles\">\n          <rect id=\"Rectangle_13\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 13\" rx=\"2\"\n                transform=\"translate(1375 858)\"/>\n          <rect id=\"Rectangle_18\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 18\" rx=\"2\"\n                transform=\"translate(1450 858)\"/>\n          <rect id=\"Rectangle_21\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 21\" rx=\"2\"\n                transform=\"translate(1525 858)\"/>\n          <rect id=\"Rectangle_14\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 14\" rx=\"2\"\n                transform=\"translate(1400 858)\"/>\n          <rect id=\"Rectangle_17\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 17\" rx=\"2\"\n                transform=\"translate(1475 858)\"/>\n          <rect id=\"Rectangle_20\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 20\" rx=\"2\"\n                transform=\"translate(1550 858)\"/>\n          <rect id=\"Rectangle_15\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 15\" rx=\"2\"\n                transform=\"translate(1425 858)\"/>\n          <rect id=\"Rectangle_16\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 16\" rx=\"2\"\n                transform=\"translate(1500 858)\"/>\n        </g>\n        <g id=\"Ropes\">\n          <path id=\"Path_45-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 45\"\n                transform=\"translate(0 4)\"/>\n          <path id=\"Path_46-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 46\"\n                transform=\"translate(25 5)\"/>\n          <path id=\"Path_47-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 47\"\n                transform=\"translate(50 3)\"/>\n          <path id=\"Path_48-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 48\"\n                transform=\"translate(75 5)\"/>\n          <path id=\"Path_49\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 49\"\n                transform=\"translate(101 3)\"/>\n          <path id=\"Path_50\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 50\"\n                transform=\"translate(125 7)\"/>\n          <path id=\"Path_51\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 51\"\n                transform=\"translate(150 5)\"/>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/add-card/add-card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/add-card/add-card.component.ts ***!
  \***************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(ui) {
        this.ui = ui;
    }
    AddCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ui.darkModeState.subscribe(function (isDark) {
            _this.darkMode = isDark;
        });
    };
    AddCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-card',
            template: __webpack_require__(/*! ./add-card.component.html */ "./src/app/ui/add-card/add-card.component.html"),
            styles: [__webpack_require__(/*! ./add-card.component.css */ "./src/app/ui/add-card/add-card.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "./src/app/ui/weather-card/weather-card.component.css":
/*!************************************************************!*\
  !*** ./src/app/ui/weather-card/weather-card.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n====================\nWeather Card Styling\n====================\n*/\n.weather__card {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: 1fr 1fr 1fr;\n      grid-template-rows: 1fr 1fr 1fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  justify-items: center;\n  padding: 2rem;\n  margin: 2rem;\n  width: 19rem;\n  height: 30rem;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 1.75rem;\n  -webkit-animation: fadein 1.25s ease-in-out 0ms 1;\n          animation: fadein 1.25s ease-in-out 0ms 1;\n}\n.weather__card-dark {\n  background: linear-gradient(to bottom, #711B86, #00057A);\n  color: white;\n}\n.city-name__text {\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  letter-spacing: 0.1rem;\n  margin-bottom: 1rem;\n}\n.temperature__text {\n  -ms-grid-row-align: end;\n      align-self: end;\n  width: 100%;\n  font-size: 4rem;\n  font-weight: 100;\n  letter-spacing: 0.1rem;\n}\n.temperature-metric__text {\n  text-align: start;\n  font-size: 3rem;\n}\n.min-max__container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  align-items: center;\n}\n.min__container, .max__container {\n  margin: 1rem 3rem;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: 1fr 1fr;\n      grid-template-rows: 1fr 1fr;\n}\n.min-arrow__icon, .max-arrow__icon {\n  height: 1.25rem;\n  margin: auto;\n}\n.max-arrow__icon {\n  margin-bottom: -0.05rem;\n}\n.weather-condition__text {\n  display: block;\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  text-align: center;\n}\n.max__text {\n  color: #FF0070;\n}\n.min__text {\n  color: #00FF9B;\n}\n.max__text, .min__text {\n  font-size: 1rem;\n  text-align: center;\n}\n.max-temperature__text, .min-temperature__text {\n  text-align: center;\n  font-size: 2rem;\n}\n.weather-icon__container {\n  width: 10rem;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.weather-icon__container > svg {\n  width: 10rem;\n}\n\n"

/***/ }),

/***/ "./src/app/ui/weather-card/weather-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/ui/weather-card/weather-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"weather__card\" (click)=\"openDetails()\" [ngClass]=\"{'weather__card-dark': darkMode}\">\n  <span class=\"city-name__text\">Paris</span>\n  <div class=\"weather-icon__container\" [ngSwitch]=\"true\">\n    <svg *ngSwitchCase=\"condition === 'Clouds'\" viewBox=\"2436.9 -843.1 275.5 274.1\">\n      <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\n        <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\n        <path fill=\"#ffde17\"\n              d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\n              data-name=\"Subtraction 1\"/>\n      </g>\n    </svg>\n\n    <svg *ngSwitchCase=\"condition === 'Rain' || condition === 'Drizzle'\" viewBox=\"3170 -843.1 163.5 242.7\">\n      <g data-name=\"Rain Icon\">\n        <g data-name=\"Water Drops\">\n          <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\n          <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\n        </g>\n      </g>\n    </svg>\n\n    <svg *ngSwitchCase=\"condition === 'Storm'\" viewBox=\"3487.9 -810.7 291.2 200.3\">\n      <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\n                 transform=\"translate(1529 490.4)\"/>\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\n                 transform=\"translate(1569.6 467.8)\"/>\n        <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\n                transform=\"translate(1618.9 476.8)\"/>\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\n                 transform=\"translate(1631.8 450)\"/>\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\n                 transform=\"translate(1687.1 477.5)\"/>\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\n                 transform=\"translate(1709.6 507.3)\"/>\n        <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\n                transform=\"translate(1639.6 500.1)\"/>\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\n                 transform=\"translate(1569.6 507.3)\"/>\n        <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\n              d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\n        <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\n              data-name=\"Path 60\"/>\n      </g>\n    </svg>\n\n\n    <svg *ngSwitchCase=\"condition === 'Sunny' || condition === 'Clear'\" viewBox=\"2050 -845 262 262\">\n      <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\n    </svg>\n\n  </div>\n  <div class=\"temperature-text__container\">\n    <span class=\"temperature__text\">{{ currentTemp }}</span>\n    <span class=\"temperature-metric__text\">°</span>\n    <span class=\"weather-condition__text\">{{ condition }}</span>\n  </div>\n  <section class=\"min-max__container\">\n    <div class=\"min__container\">\n      <svg class=\"min-arrow__icon\" viewBox=\"188.5 807 21 21\">\n        <path fill=\"#00ff9b\" d=\"M209.5 817.5h-21L199 828z\" data-name=\"Min Arrow\"/>\n      </svg>\n\n      <span class=\"min-temperature__text\">{{ minTemp }}</span>\n      <span class=\"min__text\">Min</span>\n    </div>\n    <div class=\"max__container\">\n      <svg class=\"max-arrow__icon\" viewBox=\"449.5 820 21 21\">\n        <path fill=\"red\" d=\"M449.5 830.5h21L460 820z\" data-name=\"Max Arrow\"/>\n      </svg>\n      <span class=\"max-temperature__text\">{{ maxTemp }}</span>\n      <span class=\"max__text\">Max</span>\n    </div>\n  </section>\n</section>\n"

/***/ }),

/***/ "./src/app/ui/weather-card/weather-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/weather-card/weather-card.component.ts ***!
  \***********************************************************/
/*! exports provided: WeatherCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCardComponent", function() { return WeatherCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeatherCardComponent = /** @class */ (function () {
    function WeatherCardComponent(weather, router, ui) {
        this.weather = weather;
        this.router = router;
        this.ui = ui;
    }
    WeatherCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ui.darkModeState.subscribe(function (isDark) {
            _this.darkMode = isDark;
        });
        this.weather.getWeatherState('Paris')
            .subscribe(function (data) {
            _this.condition = data;
        });
        this.weather.getCurrentTemp('Paris').subscribe(function (data) {
            _this.currentTemp = data;
        });
        this.weather.getMinTemp('Paris').subscribe(function (data) {
            _this.minTemp = data;
        });
        this.weather.getMaxTemp('Paris').subscribe(function (data) {
            _this.maxTemp = data;
        });
    };
    WeatherCardComponent.prototype.ngOnDestroy = function () {
    };
    WeatherCardComponent.prototype.openDetails = function () {
        this.router.navigateByUrl('/details/paris');
    };
    WeatherCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather-card',
            template: __webpack_require__(/*! ./weather-card.component.html */ "./src/app/ui/weather-card/weather-card.component.html"),
            styles: [__webpack_require__(/*! ./weather-card.component.css */ "./src/app/ui/weather-card/weather-card.component.css")]
        }),
        __metadata("design:paramtypes", [_services_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]])
    ], WeatherCardComponent);
    return WeatherCardComponent;
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

module.exports = __webpack_require__(/*! /Users/erostin/Desktop/angular-django-example/microblog/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map