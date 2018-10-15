webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <router-outlet></router-outlet>\n  <ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { TabsComponent } from './tabs/tabs.component';

var AppComponent = /** @class */ (function () {
    function AppComponent(routes) {
        this.routes = routes;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.routes.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.url1 = function () {
        window.location.href = "https://www.google.com";
    };
    AppComponent.prototype.facebook = function () {
        window.location.href = "https://www.facebook.com";
    };
    AppComponent.prototype.url2 = function () {
        window.location.href = "https://www.google.com";
    };
    AppComponent.prototype.url3 = function () {
        window.location.href = "https://www.google.com";
    };
    AppComponent.prototype.twitter = function () {
        window.location.href = "https://www.twitter.com";
    };
    AppComponent.prototype.google = function () {
        window.location.href = "https://www.googleplus.com";
    };
    AppComponent.prototype.instagram = function () {
        window.location.href = "https://www.instagram.com";
    };
    AppComponent.prototype.youtube = function () {
        window.location.href = "https://www.youtube.com";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_header_header_component__ = __webpack_require__("./src/app/pages/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reset_reset_component__ = __webpack_require__("./src/app/pages/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forgot_forgot_component__ = __webpack_require__("./src/app/pages/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_change_change_component__ = __webpack_require__("./src/app/pages/change/change.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_addtoken_addtoken_component__ = __webpack_require__("./src/app/pages/addtoken/addtoken.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contentmanagment_contentmanagment_component__ = __webpack_require__("./src/app/pages/contentmanagment/contentmanagment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_editprofile_editprofile_component__ = __webpack_require__("./src/app/pages/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_myprofile_myprofile_component__ = __webpack_require__("./src/app/pages/myprofile/myprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_staticontent_staticontent_component__ = __webpack_require__("./src/app/pages/staticontent/staticontent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_sweep_sweep_component__ = __webpack_require__("./src/app/pages/sweep/sweep.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_transactionmanagment_transactionmanagment_component__ = __webpack_require__("./src/app/pages/transactionmanagment/transactionmanagment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_transaction_transaction_component__ = __webpack_require__("./src/app/pages/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_usermanagment_usermanagment_component__ = __webpack_require__("./src/app/pages/usermanagment/usermanagment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_viewfee_viewfee_component__ = __webpack_require__("./src/app/pages/viewfee/viewfee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_wallet_managment_wallet_managment_component__ = __webpack_require__("./src/app/pages/wallet-managment/wallet-managment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_withdrawlfee_withdrawlfee_component__ = __webpack_require__("./src/app/pages/withdrawlfee/withdrawlfee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_mydatepicker__ = __webpack_require__("./node_modules/mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_qrcode__ = __webpack_require__("./node_modules/angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_ckeditor__ = __webpack_require__("./node_modules/ngx-ckeditor/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ngx_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ngx_spinner__ = __webpack_require__("./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_tokenlist_tokenlist_component__ = __webpack_require__("./src/app/pages/tokenlist/tokenlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng4_geoautocomplete__ = __webpack_require__("./node_modules/ng4-geoautocomplete/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_27_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_28_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_34_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_29_ngx_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_31_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    preventDuplicates: true
                }),
                __WEBPACK_IMPORTED_MODULE_32_ngx_spinner__["NgxSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_35_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */].forRoot()
                //SlickModule.forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_reset_reset_component__["a" /* ResetComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_change_change_component__["a" /* ChangeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addtoken_addtoken_component__["a" /* AddtokenComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contentmanagment_contentmanagment_component__["a" /* ContentmanagmentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_editprofile_editprofile_component__["a" /* EditprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myprofile_myprofile_component__["a" /* MyprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_staticontent_staticontent_component__["a" /* StaticontentComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sweep_sweep_component__["a" /* SweepComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_transactionmanagment_transactionmanagment_component__["a" /* TransactionmanagmentComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_transaction_transaction_component__["a" /* TransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_usermanagment_usermanagment_component__["a" /* UsermanagmentComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_viewfee_viewfee_component__["a" /* ViewfeeComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_wallet_managment_wallet_managment_component__["a" /* WalletManagmentComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_withdrawlfee_withdrawlfee_component__["a" /* WithdrawlfeeComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_tokenlist_tokenlist_component__["a" /* TokenlistComponent */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__providers_main_service__["a" /* MainService */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_header_header_component__ = __webpack_require__("./src/app/pages/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_forgot_forgot_component__ = __webpack_require__("./src/app/pages/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_reset_reset_component__ = __webpack_require__("./src/app/pages/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_change_change_component__ = __webpack_require__("./src/app/pages/change/change.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_addtoken_addtoken_component__ = __webpack_require__("./src/app/pages/addtoken/addtoken.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contentmanagment_contentmanagment_component__ = __webpack_require__("./src/app/pages/contentmanagment/contentmanagment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_editprofile_editprofile_component__ = __webpack_require__("./src/app/pages/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile_component__ = __webpack_require__("./src/app/pages/myprofile/myprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_staticontent_staticontent_component__ = __webpack_require__("./src/app/pages/staticontent/staticontent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sweep_sweep_component__ = __webpack_require__("./src/app/pages/sweep/sweep.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transactionmanagment_transactionmanagment_component__ = __webpack_require__("./src/app/pages/transactionmanagment/transactionmanagment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_transaction_transaction_component__ = __webpack_require__("./src/app/pages/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_usermanagment_usermanagment_component__ = __webpack_require__("./src/app/pages/usermanagment/usermanagment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_viewfee_viewfee_component__ = __webpack_require__("./src/app/pages/viewfee/viewfee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_wallet_managment_wallet_managment_component__ = __webpack_require__("./src/app/pages/wallet-managment/wallet-managment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_withdrawlfee_withdrawlfee_component__ = __webpack_require__("./src/app/pages/withdrawlfee/withdrawlfee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tokenlist_tokenlist_component__ = __webpack_require__("./src/app/pages/tokenlist/tokenlist.component.ts");



















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__pages_header_header_component__["a" /* HeaderComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__["a" /* LoginComponent */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__["a" /* HomeComponent */] },
            { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_3__pages_forgot_forgot_component__["a" /* ForgotComponent */] },
            { path: 'reset', component: __WEBPACK_IMPORTED_MODULE_4__pages_reset_reset_component__["a" /* ResetComponent */] },
            { path: 'change', component: __WEBPACK_IMPORTED_MODULE_5__pages_change_change_component__["a" /* ChangeComponent */] },
            { path: 'addtoken', component: __WEBPACK_IMPORTED_MODULE_6__pages_addtoken_addtoken_component__["a" /* AddtokenComponent */] },
            { path: 'content/:static', component: __WEBPACK_IMPORTED_MODULE_7__pages_contentmanagment_contentmanagment_component__["a" /* ContentmanagmentComponent */] },
            { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_8__pages_editprofile_editprofile_component__["a" /* EditprofileComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile_component__["a" /* MyprofileComponent */] },
            { path: 'static', component: __WEBPACK_IMPORTED_MODULE_10__pages_staticontent_staticontent_component__["a" /* StaticontentComponent */] },
            { path: 'sweep', component: __WEBPACK_IMPORTED_MODULE_11__pages_sweep_sweep_component__["a" /* SweepComponent */] },
            { path: 'transactionmanagment/:tab', component: __WEBPACK_IMPORTED_MODULE_12__pages_transactionmanagment_transactionmanagment_component__["a" /* TransactionmanagmentComponent */] },
            { path: 'transaction', component: __WEBPACK_IMPORTED_MODULE_13__pages_transaction_transaction_component__["a" /* TransactionComponent */] },
            { path: 'user', component: __WEBPACK_IMPORTED_MODULE_14__pages_usermanagment_usermanagment_component__["a" /* UsermanagmentComponent */] },
            { path: 'view', component: __WEBPACK_IMPORTED_MODULE_15__pages_viewfee_viewfee_component__["a" /* ViewfeeComponent */] },
            { path: 'wallet/:tab', component: __WEBPACK_IMPORTED_MODULE_16__pages_wallet_managment_wallet_managment_component__["a" /* WalletManagmentComponent */] },
            { path: 'withdraw', component: __WEBPACK_IMPORTED_MODULE_17__pages_withdrawlfee_withdrawlfee_component__["a" /* WithdrawlfeeComponent */] },
            { path: 'tokenList', component: __WEBPACK_IMPORTED_MODULE_18__pages_tokenlist_tokenlist_component__["a" /* TokenlistComponent */] },
        ]
    },
];


/***/ }),

/***/ "./src/app/pages/addtoken/addtoken.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/addtoken/addtoken.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"afterlogin\">\n<div class=\"wrapper\">\n<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Generate Token</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"dashboard.html\">Dashboard </a></li>\n              <li class=\"breadcrumb-item\"><a href=\"profile.html\">Profile </a></li>\n              <li class=\"breadcrumb-item active\">Edit Profile</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n\n      <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n          <div class=\"main-block-innner mb40 mt40\">\n              <div class=\"add-store-block input-style\">\n                 <form [formGroup]= 'addtokenForm'>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-5\">Token Image :</label>\n                      <div class=\"col-md-7\">\n                        <div class=\"user-profile pro-pass\">\n                          <div class=\"image-box m-0\">\n                               <img *ngFor=\"let item of base64textString\"  src=\"{{item}}\" alt=\"Token Image\" class=\"profile-pic\"> \n                                <label class=\"upload-label\">\n                                 <input type=\"file\" name=\"image\" formControlName=\"image\" (change)=\"onUploadChange($event)\" accept=\".png, .jpg, .jpeg, .pdf\">\n                                  <i class=\"fas fa-camera\"></i>\n                              </label>\n                          </div>\n                          <p *ngIf=\"addtokenForm.get('image').hasError('required') &&   addtokenForm.get('image').dirty\" style=\"color:red\"  padding>*Please update the token image</p>\n                        </div>\n                       </div>\n                  </div>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-5\">Token Name :</label>\n                      <div class=\"col-md-7\">\n                          <input type=\"text\" class=\"form-control form-control2\" formControlName=\"name\" maxlength=\"15\"/>\n                          <p  *ngIf=\" addtokenForm.get('name').hasError('required') &&  addtokenForm.get('name').dirty\" style=\"color:red\"  padding>*Name field can not be empty</p>\n                          <p  *ngIf=\" addtokenForm.get('name').hasError('pattern') &&  addtokenForm.get('name').dirty\" style=\"color:red\"  padding>*Invalid Name</p>\n                      </div>\n                      \n                  </div>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-5\">Token Price :</label>\n                      <div class=\"col-md-7\">\n                          <input type=\"text\" class=\"form-control form-control2\" formControlName=\"price\" maxlength=\"5\"/>\n                          <p  *ngIf=\" addtokenForm.get('price').hasError('required') &&  addtokenForm.get('price').dirty\" style=\"color:red\"  padding>*Price field can not be empty</p>\n                          <p  *ngIf=\" addtokenForm.get('price').hasError('pattern') &&  addtokenForm.get('price').dirty\" style=\"color:red\"  padding>*Invalid price</p>\n                      </div>\n                     \n                  </div>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-5\">Token Decimal :</label>\n                      <div class=\"col-md-7\">\n                          <input type=\"text\" class=\"form-control form-control2\" formControlName=\"decimal\" maxlength=\"5\"/>\n                          <p  *ngIf=\" addtokenForm.get('decimal').hasError('required') &&  addtokenForm.get('decimal').dirty\" style=\"color:red\"  padding>*Decimal field can not be empty</p>\n                          <p  *ngIf=\" addtokenForm.get('decimal').hasError('pattern') &&  addtokenForm.get('decimal').dirty\" style=\"color:red\"  padding>*Invalid Decimal</p>\n                      </div>\n                    \n                  </div>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-5\">Quantity :</label>\n                      <div class=\"col-md-7\">\n                          <input type=\"text\" class=\"form-control form-control2\" formControlName=\"quantity\" maxlength=\"10\"/>\n                          <p  *ngIf=\" addtokenForm.get('quantity').hasError('required') &&  addtokenForm.get('quantity').dirty\" style=\"color:red\"  padding>*Quantity field can not be empty</p>\n                          <p  *ngIf=\" addtokenForm.get('quantity').hasError('pattern') &&  addtokenForm.get('quantity').dirty\" style=\"color:red\"  padding>*Invalid Quantity</p>\n                      </div>\n                    \n                  </div>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-5\">Contract Address :</label>\n                      <div class=\"col-md-7\">\n                          <input type=\"text\" class=\"form-control form-control2\" formControlName=\"contactaddress\" maxlength=\"42\" />\n                          <p  *ngIf=\" addtokenForm.get('contactaddress').hasError('required') &&  addtokenForm.get('contactaddress').dirty\" style=\"color:red\"  padding>*Contactaddress field can not be empty</p>\n                      </div>\n                  </div>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-5\">Hot Storage Address :</label>\n                      <div class=\"col-md-7\">\n                          <input type=\"text\" class=\"form-control form-control2 \" formControlName=\"storageaddress\" maxlength=\"42\" />\n                          <p  *ngIf=\" addtokenForm.get('storageaddress').hasError('required') &&  addtokenForm.get('storageaddress').dirty\" style=\"color:red\"  padding>*Storageaddress field can not be empty</p>\n                      </div>\n                  </div> \n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-5\">Hot Storage Pvt. Key :</label>\n                      <div class=\"col-md-7\">\n                          <input type=\"text\" class=\"form-control form-control2 \" formControlName=\"privatekey\" maxlength=\"66\"/>\n                          <p  *ngIf=\" addtokenForm.get('privatekey').hasError('required') &&  addtokenForm.get('privatekey').dirty\" style=\"color:red\"  padding>*Storage Private Key field can not be empty</p>\n                      </div>\n                  </div>\n                  <div class=\"text-center mt40\">\n                      <button type=\"button\" href=\"javascript:;\" class=\"btn  font-150 btn-green\" [disabled]=\"!addtokenForm.valid\" (click)=\"addtokenFun(addtokenForm.value)\">Add Kit Token</button>\n                      <button type=\"button\" class=\"btn  font-100 btn-green\" (click)=\"addcustomToken()\">Add Custom Token</button>\n                    </div>\n                </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</main>\n</div>\n<!-- Add Custom Token Start Here -->\n<div class=\"modal fade global-modal reset-modal\" id=\"customToken\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\">\n            <div class=\"modal-content\">\n                <div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                    <div class=\"modal-body\">\n                        <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                            <div class=\"main-block-innner mb40 mt0\">\n                                <div class=\"add-store-block input-style\">\n                                    <form [formGroup]= 'customForm'>\n                                        <div class=\"form-group row align-items-center\">\n                                            <label class=\"col-md-5\">Token Image :</label>\n                                            <div class=\"col-md-7\">\n                                              <div class=\"user-profile pro-pass\">\n                                                <div class=\"image-box m-0\">\n                                                     <img *ngFor=\"let item of token64\"  src=\"{{item}}\" alt=\"Token Image\" class=\"profile-pic\"> \n                                                      <label class=\"upload-label\">\n                                                       <input type=\"file\" name=\"image\" formControlName=\"tokenimage\" (change)=\"onUploadChangeCustom($event)\" accept=\".png, .jpg, .jpeg, .pdf\">\n                                                        <i class=\"fas fa-camera\"></i>\n                                                    </label>\n                                                </div>\n                                                <p *ngIf=\"customForm.get('tokenimage').hasError('required') &&   customForm.get('tokenimage').dirty\" style=\"color:red\"  padding>*Please update the token image</p>\n                                              </div>\n                                             </div>\n                                        </div>\n                                         <div class=\"form-group row align-items-center\">\n                                            <label class=\"col-md-5\">Contract Address :</label>\n                                            <div class=\"col-md-7\">\n                                                <input type=\"text\" class=\"form-control form-control2\" formControlName=\"tokencontactaddress\" maxlength=\"42\" />\n                                                <p  *ngIf=\" customForm.get('tokencontactaddress').hasError('required') &&  customForm.get('tokencontactaddress').dirty\" style=\"color:red\"  padding>*Contactaddress field can not be empty</p>\n                                            </div>\n                                        </div>\n                                        <!-- <div class=\"form-group row align-items-center\">\n                                            <label class=\"col-md-5\">Hot Storage Address :</label>\n                                            <div class=\"col-md-7\">\n                                                <input type=\"text\" class=\"form-control form-control2 \" formControlName=\"storageaddress\" maxlength=\"42\" />\n                                                <p  *ngIf=\" customForm.get('storageaddress').hasError('required') &&  customForm.get('storageaddress').dirty\" style=\"color:red\"  padding>*Storageaddress field can not be empty</p>\n                                            </div>\n                                        </div> \n                                        <div class=\"form-group row align-items-center\">\n                                            <label class=\"col-md-5\">Hot Storage Pvt. Key :</label>\n                                            <div class=\"col-md-7\">\n                                                <input type=\"text\" class=\"form-control form-control2 \" formControlName=\"privatekey\" maxlength=\"66\"/>\n                                                <p  *ngIf=\" customForm.get('privatekey').hasError('required') &&  customForm.get('privatekey').dirty\" style=\"color:red\"  padding>*Storage Private Key field can not be empty</p>\n                                            </div>\n                                        </div> -->\n                                        <div class=\"text-center mt40\">\n                                            <button type=\"button\" href=\"javascript:;\" class=\"btn btn-large font-100 btn-green\" [disabled]=\"!customForm.valid\" (click)=\"customTokenFun(customForm.value)\">Add Token</button>\n                                        </div>\n                                      </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!--Add Custom token End Here -->\n</div>"

/***/ }),

/***/ "./src/app/pages/addtoken/addtoken.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtokenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddtokenComponent = /** @class */ (function () {
    function AddtokenComponent(service, routes) {
        this.service = service;
        this.routes = routes;
        this.base64textString = ['assets/img/token.png'];
        this.token64 = ['assets/img/token.png'];
        this.addtokenForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            image: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required]),
            name: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern(/^[a-zA-Z\s]*$/)]),
            price: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern(/^[0-9\s]*$/)]),
            decimal: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern(/^[0-9\s]*$/)]),
            quantity: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern(/^[0-9\s]*$/)]),
            contactaddress: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required]),
            storageaddress: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required]),
            privatekey: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required]),
        });
        this.customForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            tokenimage: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required]),
            tokencontactaddress: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required]),
        });
    }
    AddtokenComponent.prototype.ngOnInit = function () {
        this.id = localStorage.id;
    };
    ///////////////////// Image Conversion/////////////////////////////////
    AddtokenComponent.prototype.onUploadChange = function (evt) {
        this.base64textString = [];
        // this.service.spinnerShow();
        var file = evt.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
            // this.service.spinnerHide();
        }
    };
    AddtokenComponent.prototype.handleReaderLoaded = function (e) {
        this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
        this.base64 = 'data:image/png;base64,' + btoa(e.target.result);
    };
    ///////////////////// Image Conversion/////////////////////////////////
    /****************** Custom Token Image *******************************/
    AddtokenComponent.prototype.onUploadChangeCustom = function (evt) {
        this.token64 = [];
        // this.service.spinnerShow();
        var file = evt.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = this.handleReaderLoadedCustom.bind(this);
            reader.readAsBinaryString(file);
            // this.service.spinnerHide();
        }
    };
    AddtokenComponent.prototype.handleReaderLoadedCustom = function (e) {
        this.token64.push('data:image/png;base64,' + btoa(e.target.result));
        this.tokenbase64 = 'data:image/png;base64,' + btoa(e.target.result);
    };
    /******************* Custom Token Image End Here *********************/
    /********************* Add Custom Token Function ***********************/
    AddtokenComponent.prototype.customTokenFun = function (formvalue) {
        var _this = this;
        console.log("Form Value ----> ", JSON.stringify(formvalue));
        console.log("Image --<> ", this.tokenbase64);
        var tokenData = {
            "contractAddress": formvalue.tokencontactaddress,
            "_id": this.id,
            "tokenType": "ERC",
            "tokenImage": this.tokenbase64
        };
        console.log("Token Data ====>>>> " + JSON.stringify(tokenData));
        this.service.spinnerShow();
        this.service.postApi("/admin/addToken", tokenData, 1).subscribe(function (response) {
            //  console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                _this.addtokenForm.reset();
                _this.service.toastrSucc(response.body.responseMessage);
                $('#customToken').modal('hide');
                _this.token64 = ['assets/img/token.png'];
                _this.routes.navigate(['/tokenList']);
            }
            else {
                _this.token64 = ['assets/img/token.png'];
                _this.service.toastrErr(response.body.responseMessage);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.token64 = ['assets/img/token.png'];
            _this.service.toastrErr("Something went wrong");
        });
    };
    /********************* Add Custom Token Function ***********************/
    /************************** Open Modal of Custom Token ****************/
    AddtokenComponent.prototype.addcustomToken = function () {
        $('#customToken').modal('show');
    };
    /**************************** End Modal Function ***********************/
    AddtokenComponent.prototype.addtokenFun = function (val) {
        var _this = this;
        // console.log("Form Value==> ",JSON.stringify(val));
        // console.log('image==>> ',this.base64);
        var tokenData = {
            "tokenName": val.name,
            "tokenImage": this.base64,
            "tokenPrice": val.price,
            "contractAddress": val.contactaddress,
            "quantity": val.quantity,
            "ownerAddress": val.storageaddress,
            "privateKey": val.privatekey,
            "tokenDecimal": val.decimal,
            "_id": this.id
        };
        //console.log("Token Data ====>>>> "+ JSON.stringify(tokenData));
        this.service.spinnerShow();
        this.service.postApi("/admin/addToken", tokenData, 1).subscribe(function (response) {
            //  console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                _this.addtokenForm.reset();
                _this.service.toastrSucc(response.body.responseMessage);
                //  console.log(response.body.responseMessage);     
                _this.base64textString = ['assets/img/token.png'];
                _this.routes.navigate(['/tokenList']);
            }
            else {
                _this.base64textString = ['assets/img/token.png'];
                _this.service.toastrErr(response.body.responseMessage);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.base64textString = ['assets/img/token.png'];
            _this.service.toastrErr("Something Went Wrong");
        });
    };
    AddtokenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addtoken',
            template: __webpack_require__("./src/app/pages/addtoken/addtoken.component.html"),
            styles: [__webpack_require__("./src/app/pages/addtoken/addtoken.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["c" /* Router */]])
    ], AddtokenComponent);
    return AddtokenComponent;
}());



/***/ }),

/***/ "./src/app/pages/change/change.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/change/change.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Change Password</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"dashboard.html\">Dashboard </a></li>\n              <li class=\"breadcrumb-item\"><a href=\"profile.html\">Profile </a></li>\n              <li class=\"breadcrumb-item active\">Change Password</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <form class=\"login_box_outer\" [formGroup]= 'changeForm'>\n          <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n              <div class=\"main-block-innner mb40 mt40\">\n                  <div class=\"add-store-block input-style\">\n                      <div class=\"form-group row align-items-center\">\n                          <label class=\"col-md-4\">New Password</label>\n                          <div class=\"col-md-8\">\n                              <input type=\"password\" formControlName=\"password\" class=\"form-control form-control2\">\n                          </div>\n                          <p  *ngIf=\"changeForm.get('password').hasError('required') &&  changeForm.get('password').dirty\" style=\"color:red\"  padding>*Password field can not be empty</p>\n                          <p  *ngIf=\"changeForm.get('password').hasError('minlength') &&  changeForm.get('password').dirty\" style=\"color:red\"  padding>*Password Should be in between 8-16 character</p>\n                      </div>\n                      <div class=\"form-group row align-items-center\">\n                          <label class=\"col-md-4\">Confirm Password</label>\n                          <div class=\"col-md-8\">\n                              <input type=\"password\" formControlName=\"confirmpassword\" class=\"form-control form-control2\">\n                          </div>\n                          <p *ngIf=\"(changeForm.get('password').value != changeForm.get('confirmpassword').value) && changeForm.get('confirmpassword').value!= '' && changeForm.get('confirmpassword').dirty\" style=\"color:red\"  padding>*Confirm Password does not match with Password</p>\n                      </div>\n                      <div class=\"text-center mt40\">\n                          <button type=\"button\"  class=\"btn btn-large  max-WT-150 font-100 btn-green\" [disabled]=\"!changeForm.valid|| (changeForm.get('password').value != changeForm.get('confirmpassword').value)\" (click)=\"change(changeForm.value)\">Change Password</button>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </form>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/pages/change/change.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeComponent = /** @class */ (function () {
    function ChangeComponent(service, route) {
        this.service = service;
        this.route = route;
        this.changeForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            password: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].minLength(8)]),
            confirmpassword: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].minLength(8)]),
        });
    }
    ChangeComponent.prototype.ngOnInit = function () {
        this.id = localStorage.id;
    };
    ChangeComponent.prototype.change = function (val) {
        var _this = this;
        var chnageData = {
            "_id": this.id,
            "password": val.password
        };
        console.log("chnage Data ====>>>> " + JSON.stringify(chnageData));
        this.service.spinnerShow();
        this.service.postApi("/admin/changePasswordOfAdmin", chnageData, 1).subscribe(function (response) {
            console.log(response);
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                _this.changeForm.reset();
                _this.route.navigate(['/home']);
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
                console.log("Something went wrong");
            }
        }, function (error) {
            _this.service.spinnerHide();
            console.log("error");
        });
    };
    ChangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change',
            template: __webpack_require__("./src/app/pages/change/change.component.html"),
            styles: [__webpack_require__("./src/app/pages/change/change.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["c" /* Router */]])
    ], ChangeComponent);
    return ChangeComponent;
}());



/***/ }),

/***/ "./src/app/pages/contentmanagment/contentmanagment.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contentmanagment/contentmanagment.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Content Management</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"user-management.html\">User Management </a></li>\n              <li class=\"breadcrumb-item active\">Transaction Details</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n <div class=\"terms-page\">\n     <form class=\"middle-form\" >\n        <!-- <div class=\"form-group row\">\n          <label class=\"common-label col-md-12\">Title *</label>\n          <div class=\"col-md-12\">\n           <input class=\"form-control\" type=\"text\" value=\"Terms & Condition\" required/>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"common-label col-md-12\">Body *</label>\n            <div class=\"col-md-12\">\n                 <textarea name=\"textarea\" class=\"jqte-test form-control\">\n               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.\n               </textarea>\n            </div>\n        </div> -->\n        <ck-editor name=\"editor1\" *ngIf=\"static == 'about'\" [(ngModel)]=\"about\"  skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n        <ck-editor name=\"editor1\" *ngIf=\"static == 'terms'\" [(ngModel)]=\"terms\"  skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n        <ck-editor name=\"editor1\" *ngIf=\"static == 'privacy'\" [(ngModel)]=\"privacy\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>\n        <div class=\"form-group button-box row\">\n       <div class=\"col-6 \">\n        <button type=\"button\"  class=\"btn btn-green btn-large btn-block\" *ngIf=\"static == 'about'\" (click)=\"update(about)\">Update</button>\n        <button type=\"button\"  class=\"btn btn-green btn-large btn-block\" *ngIf=\"static == 'terms'\" (click)=\"update(terms)\">Update</button>\n        <button  type=\"button\" class=\"btn btn-green btn-large btn-block\" *ngIf=\"static == 'privacy'\" (click)=\"update(privacy)\">Update</button>        \n         </div>\n      <div class=\"col-6\">\n          <button type=\"button\"  class=\"btn btn-large btn-gray btn-block\" [routerLink]=\"['/static']\"> Cancel</button>\n      </div>\n    </div>\n     </form>\n </div> \n</div>\n</main>"

/***/ }),

/***/ "./src/app/pages/contentmanagment/contentmanagment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentmanagmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentmanagmentComponent = /** @class */ (function () {
    function ContentmanagmentComponent(route, routes, service) {
        var _this = this;
        this.route = route;
        this.routes = routes;
        this.service = service;
        this.aboutValue = 'About';
        this.termsValue = 'Terms';
        this.privacyValue = 'Privacy';
        this.about = [];
        this.privacy = {};
        this.terms = [];
        this.route.params.subscribe(function (params) {
            //console.log('params=>'+JSON.stringify(params));
            _this.static = params["static"];
        });
    }
    ContentmanagmentComponent.prototype.ngOnInit = function () {
        this.staticFun();
    };
    /********************Static Function************/
    ContentmanagmentComponent.prototype.staticFun = function () {
        var _this = this;
        if (this.static == 'about') {
            var about = this.aboutValue;
            //console.log("About==> ",about);
            this.service.getApi("/user/aboutUs", 1).subscribe(function (response) {
                //   console.log(JSON.stringify(response))
                if (response.body.responseCode == 200) {
                    _this.about = response.body.data[0].about;
                    _this.aboutid = response.body.data[0]._id;
                    //  console.log('success',this.about);
                }
                else {
                    //  console.log(`Something went wrong`);
                }
            }, function (error) {
                _this.service.toastrErr("Something went wrong");
            });
        }
        else if (this.static == 'terms') {
            var terms = this.termsValue;
            //console.log("terms==> ",terms);
            this.service.getApi("/user/termAndService", 1).subscribe(function (response) {
                //  console.log(JSON.stringify(response))
                if (response.body.responseCode == 200) {
                    _this.terms = response.body.data[0].terms;
                    _this.termsid = response.body.data[0]._id;
                    // console.log('success',this.terms);
                }
                else {
                    // console.log(`Something went wrong`);
                }
            }, function (error) {
                _this.service.toastrErr("Something went wrong");
            });
        }
        else {
            var privacy = this.privacyValue;
            //console.log("privacy==> ",privacy);
            this.service.getApi("/user/privacyPolicy", 1).subscribe(function (response) {
                //console.log(JSON.stringify(response))
                if (response.body.responseCode == 200) {
                    _this.privacy = response.body.data.policy;
                    _this.privacyid = response.body.data._id;
                    //console.log('success',this.privacy);
                }
                else {
                    //console.log(`Something went wrong`);
                }
            }, function (error) {
                _this.service.toastrErr("Something went wrong");
            });
        }
    };
    /****************Update Static Content***************/
    ContentmanagmentComponent.prototype.update = function (val) {
        var _this = this;
        if (this.static == 'about') {
            var data = {
                "_id": this.aboutid,
                "data": val
            };
            //  console.log("Dtat==> ",JSON.stringify(data));
            this.service.spinnerShow();
            this.service.postApi("/admin/updateAboutUs", data, 1).subscribe(function (response) {
                // console.log(response)
                _this.service.spinnerHide();
                if (response.body.responseCode == 200) {
                    _this.staticFun();
                    _this.routes.navigate(['/static']);
                }
                else {
                    _this.service.toastrErr(response.body.responseMessage);
                    // console.log(`Something went wrong`);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.toastrErr("Something went wrong");
                //console.log(`error`);
            });
        }
        else if (this.static == 'terms') {
            var data = {
                "_id": this.termsid,
                "data": val
            };
            //  console.log("Dtat==> ",JSON.stringify(data));
            this.service.spinnerShow();
            this.service.postApi("/admin/updateTermAndService", data, 1).subscribe(function (response) {
                // console.log(response)
                _this.service.spinnerHide();
                if (response.body.responseCode == 200) {
                    _this.staticFun();
                    _this.routes.navigate(['/static']);
                }
                else {
                    _this.service.toastrErr(response.body.responseMessage);
                    // console.log(`Something went wrong`);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.toastrErr("Something went wrong");
            });
        }
        else {
            var data = {
                "_id": this.privacyid,
                "data": val
            };
            //  console.log("Dtat==> ",JSON.stringify(data));
            this.service.spinnerShow();
            this.service.postApi("/admin/updatePolicy", data, 1).subscribe(function (response) {
                // console.log(response)
                _this.service.spinnerHide();
                if (response.body.responseCode == 200) {
                    _this.staticFun();
                    _this.routes.navigate(['/static']);
                }
                else {
                    _this.service.toastrErr(response.body.responseMessage);
                    // console.log(`Something went wrong`);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.toastrErr("Something went wrong");
            });
        }
    };
    ContentmanagmentComponent.prototype.script = function () {
        $('.jqte-test').jqte();
        // settings of status
        var jqteStatus = true;
        $(".status").click(function () {
            jqteStatus = jqteStatus ? false : true;
            $('.jqte-test').jqte({
                "status": jqteStatus
            });
        });
    };
    ContentmanagmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contentmanagment',
            template: __webpack_require__("./src/app/pages/contentmanagment/contentmanagment.component.html"),
            styles: [__webpack_require__("./src/app/pages/contentmanagment/contentmanagment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */]])
    ], ContentmanagmentComponent);
    return ContentmanagmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/editprofile/editprofile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/editprofile/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Edit Profile</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"dashboard.html\">Dashboard </a></li>\n              <li class=\"breadcrumb-item\"><a href=\"profile.html\">Profile </a></li>\n              <li class=\"breadcrumb-item active\">Edit Profile</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n\n      <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n          <div class=\"main-block-innner mb40 mt40\">\n            <form [formGroup]= 'editForm'>\n              <div class=\"add-store-block input-style\">\n                <div class=\"text-right\">\n                   <button type=\"button\"  class=\"btn btn-green\" [routerLink]=\"['/change']\">Change Password</button>\n                </div>\n                <div class=\"form-group row align-items-center\">\n                        <label class=\"col-md-5\">My Profile Pic :</label>\n                        <div class=\"col-md-7\">\n                          <div class=\"user-profile pro-pass\">\n                            <div class=\"image-box m-0\">\n                                 <img *ngFor=\"let item of base64textString\"  src=\"{{item}}\" alt=\"Token Image\" class=\"profile-pic\"> \n                                  <label class=\"upload-label\">\n                                   <input type=\"file\" name=\"image\" formControlName=\"image\" (change)=\"onUploadChange($event)\" accept=\".png, .jpg, .jpeg, .pdf\">\n                                    <i class=\"fas fa-camera\"></i>\n                                </label>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-4\">Name :</label>\n                      <div class=\"col-md-8\">\n                          <input type=\"text\" class=\"form-control form-control2\" formControlName=\"name\" [(ngModel)]=\"profileData.name\"/>\n                      </div>\n                     </div>\n                  <p  *ngIf=\"editForm.get('name').hasError('pattern') &&  editForm.get('name').dirty\" style=\"color:red\"  padding>*Invalid name</p>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-4\">Email :</label>\n                      <div class=\"col-md-8\">\n                          <input type=\"email\" class=\"form-control form-control2\" formControlName=\"email\" [(ngModel)]=\"profileData.email\" readonly/>\n                      </div>\n                      \n                  </div>\n                      <p  *ngIf=\"editForm.get('email').hasError('pattern') &&  editForm.get('email').dirty\" style=\"color:red\"  padding>*Invalid email</p>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-4\">Phone :</label>\n                      <div class=\"col-md-8\">\n                          <input type=\"text\" class=\"form-control form-control2\" formControlName=\"mobile\" maxlength=\"10\"   [(ngModel)]=\"profileData.phoneNumber\"/>\n                      </div>\n                      </div>\n                      <p  *ngIf=\"editForm.get('mobile').hasError('pattern') &&  editForm.get('mobile').dirty\" style=\"color:red\"  padding>*Invalid mobile</p>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-4\">Date of Birth :</label>\n                      <div class=\"col-md-8\">\n                            <my-date-picker name=\"dob\" formControlName=\"dob\" [options]=\"myDatePickerOptions\"  placeholder=\"Date of Birth\" ></my-date-picker>\n                        </div>\n                  </div>\n                  <div class=\"form-group row align-items-center\">\n                      <label class=\"col-md-4\">Gender :</label>\n                      <div class=\"col-md-8\">\n                          <div class=\"inline-block-radio\">\n                             <label class=\"radio-design \">\n                                    <!-- <input type=\"radio\" [value]=\"items.description\" name=\"{{item.question1}}\" ngModel/> -->\n                                    <input type=\"radio\" formControlName=\"gender\" name=\"gender\" value=\"male\" checked>Male\n                               </label>\n                          </div>\n                          <div class=\"inline-block-radio\">\n                             <label class=\"radio-design \" >\n                                    <input type=\"radio\" formControlName=\"gender\" name=\"gender\"  value=\"Female\">Female\n                               </label>\n                          </div>\n                      </div>\n                  </div>\n                 <div class=\"form-group row align-items-basline\">\n                      <label class=\"col-md-4\">Address :</label>\n                    <ng4geo-autocomplete (componentCallback)=\"autoCompleteCallback1($event)\"></ng4geo-autocomplete>\n                </div>\n                <div class=\"text-center mt40\">\n                      <button type=\"button\" class=\"btn btn-large  max-WT-200 font-100 btn-green\"  (click)=\"editProfile(editForm.value)\" >Update Profile</button>\n                      <a  class=\"btn btn-large  max-WT-200 font-100 btn-grey ml5\" [routerLink]=\"['/profile']\">Cancle</a>\n                  </div>\n              </div>\n            </form>\n          </div>\n        \n      </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/pages/editprofile/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent(service, route) {
        this.service = service;
        this.route = route;
        ///////////////////// Image Conversion/////////////////////////////////
        /**************** Date managing***************/
        this.myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            editableDateField: false,
            openSelectorOnInputClick: false,
            disableSince: { year: 0, month: 0, day: 0 }
        };
        this.editForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            image: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"](''),
            name: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern(/^[a-zA-Z\s]*$/)]),
            email: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern(/^[0-9\s]*$/)]),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern(/^[0-9\s]*$/)]),
            dob: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', []),
            gender: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"](''),
            address: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"](''),
        });
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        this.id = localStorage.id;
        this.profileApi();
        this.onDateChanged();
    };
    /**************************Profile Api******************/
    EditprofileComponent.prototype.profileApi = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.getApi("/admin/myProfile", 1).subscribe(function (response) {
            //  console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                //this.service.toastrSucc(response.body.responseMessage);
                _this.profileData = response.body.data;
                _this.gender = _this.profileData.gender;
                _this.base64textString = [_this.profileData.profilePic];
                _this.address = _this.profileData.address;
                // console.log("address==> ",this.address+"  Grnder===> ",this.gender);
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    /**************************Profile Api Ends******************/
    ///////////////////// Image Conversion/////////////////////////////////
    EditprofileComponent.prototype.onUploadChange = function (evt) {
        this.base64textString = [];
        // this.service.spinnerShow();
        var file = evt.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
            // this.service.spinnerHide();
        }
    };
    EditprofileComponent.prototype.handleReaderLoaded = function (e) {
        this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
        this.base64 = 'data:image/png;base64,' + btoa(e.target.result);
    };
    EditprofileComponent.prototype.onDateChanged = function () {
        var d = new Date();
        var copy1 = this.getCopyOfOptions();
        copy1.disableSince = { year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate() };
        this.myDatePickerOptions = copy1;
    };
    //Returns copy of myDatePickerOptions
    EditprofileComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptions));
    };
    /*******************Date managing Ends Here**************/
    EditprofileComponent.prototype.autoCompleteCallback1 = function (selectedData) {
        this.adminaddress = selectedData.data.formatted_address;
        // console.log("select your address==> ",this.adminaddress);
    };
    /****************Update Profile******************/
    EditprofileComponent.prototype.editProfile = function (formvalue) {
        var _this = this;
        var image = this.base64textString[0];
        // console.log("image------->>",image);
        // console.log("admin address------->>",this.adminaddress);
        //var dob = formvalue.dob.jsdate.getTime();
        //  console.log("FDOB------->>",formvalue.dob);
        //  console.log("PDOB------->>",this.profileData.DOB);
        var edit = {
            "_id": this.id,
            "name": formvalue.name ? formvalue.name : this.profileData.name,
            "email": "ph-anuj@mobiloitte.com",
            "phoneNumber": formvalue.mobile ? formvalue.mobile : this.profileData.phoneNumber,
            "profilePic": this.base64 ? this.base64 : image,
            "DOB": (formvalue.dob) ? Number(formvalue.dob.jsdate.getTime()) : Number(this.profileData.DOB),
            "gender": formvalue.gender ? formvalue.gender : this.gender,
            "address": this.adminaddress ? this.adminaddress : 'delhi',
        };
        //  console.log("Token Data ====>>>> "+ JSON.stringify(edit));
        this.service.spinnerShow();
        this.service.postApi("/admin/myProfileEdit", edit, 1).subscribe(function (response) {
            //console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                _this.service.toastrSucc(response.body.responseMessage);
                _this.editForm.reset();
                localStorage.setItem('profilePic', _this.base64);
                _this.service.changeimageSub(localStorage.profilePic);
                _this.route.navigate(['/profile']);
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
                //console.log(`Something went wrong`);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    EditprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__("./src/app/pages/editprofile/editprofile.component.html"),
            styles: [__webpack_require__("./src/app/pages/editprofile/editprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["c" /* Router */]])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/pages/forgot/forgot.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"afterlogin\">\n  <div class=\"login-wrapper\">\n    <div class=\"container-common\">\n       <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"d-flex align-items-center minheight70vh\">\n          <form class=\"login_box_outer w-100\" [formGroup]= 'forgotForm'>\n            <div class=\"login-box max-WT-520\">\n                <div class=\"login-right-block\">\n                  <div class=\"login-heading\">\n                     <h4>FORGOT PASSWORD</h4>\n                  </div>\n                  <div class=\"login-box-body\">\n                    <p class=\"common-paragrph text-center\">Please enter a registered email address so that we can send you reset instruction</p>\n                    <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" formControlName='email' maxlength=\"32\"/>\n                        <span class=\"error\">\n                            <p  *ngIf=\" forgotForm.get('email').hasError('required') &&  forgotForm.get('email').dirty\"  padding>*Email field can not be empty</p>\n                            <p  *ngIf=\" forgotForm.get('email').hasError('pattern') &&  forgotForm.get('email').dirty\"   padding>*Invalid Email</p>\n                        </span>\n                      </div>\n                    </div>\n                      <div class=\"text-center mt40\">\n                        <button type=\"button\" class=\"btn btn-login btn-large  width100 font-100\" [disabled]=\"!forgotForm.valid\" (click)=\"forgotApi(forgotForm.value)\">SUBMIT</button>\n                      </div>\n                  </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n </body>"

/***/ }),

/***/ "./src/app/pages/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(service, routes) {
        this.service = service;
        this.routes = routes;
        this.forgotForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]),
        });
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    /*****************Forgot Form*******************/
    ForgotComponent.prototype.forgotApi = function (val) {
        var _this = this;
        // console.log("Data==>  ",val);
        var forgotData = {
            "email": val.email
        };
        // console.log("Forgot Data== >> ",JSON.stringify(forgotData));
        this.service.spinnerShow();
        this.service.postApi("/admin/forgotPassword", forgotData, 0).subscribe(function (response) {
            // console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                _this.service.toastrSucc(response.body.responseMessage);
                _this.forgotForm.reset();
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("./src/app/pages/forgot/forgot.component.html"),
            styles: [__webpack_require__("./src/app/pages/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["c" /* Router */]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf =\"(!isLoggedIn)\"></div>\n<div class=\"afterlogin\" *ngIf =\"(isLoggedIn)\">\n    <div class=\"wrapper\">\n        <header class=\"header\">\n            <nav class=\"navbar clearfix\">\n                <div class=\"logo-box\">\n                    <a class=\"navbar-brand logo\" [routerLink]=\"['/home']\">\n                        <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"lg-logo\">\n                        <!-- <img src=\"assets/img/sm-logo.png\" alt=\"logo\" class=\"sm-logo\"> -->\n                    </a>\n\n                </div>\n                <div class=\"header-right-part\">\n                    <button class=\"btn btn-toggle\" type=\"button\">\n                                <i class=\"fas fa-bars\" (click)=\"script()\"></i>\n                            </button>\n                    <button class=\"btn btn-outline-secondary btn-mobsearch\" type=\"button\"><i class=\"fas fa-search\"></i></button>\n                </div>\n            </nav>\n        </header>\n        <!-- Header End -->\n\n        <aside class=\"sidebar\">\n            <div class=\"sidebar-scroller\">\n                <!--Accordion Start -->\n                <div id=\"accordion\" class=\"sidebar-menu\">\n                    <div class=\"user-panel clearfix\">\n                        <div class=\"pull-left image\">\n                            <img [src]=\"profilePic\" class=\"img-circle\" alt=\"User Image\">\n                            <button  class=\"online-icon\" [routerLink]=\"['/profile']\"><i class=\"fa fa-circle text-success\"></i></button>\n                        </div>\n                        <div class=\"pull-left info mt10\">\n                          <a [routerLink]=\"['/profile']\">\n                            <p>Welcome</p>\n                            <h4>{{name}}</h4>\n                          </a>\n                        </div>\n                    </div>\n                    <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{active: currUrl ==='home'}\" (click)=\"active()\">\n                        <div class=\"card-header clearfix\" id=\"headingOne\">\n                            <a class=\"side_menu\"  [routerLink]=\"['/home']\">\n                                <span class=\"side_menu_icon\"><!-- <i class=\"fas fa-tachometer-alt\"></i> -->\n                                    <img src=\"assets/img/dashboard-icon.png\" alt=\"icon\"/>\n                                </span>\n                                <span class=\"side_page_name\">Dashboard</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                    <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{active: currUrl==='user'}\" (click)=\"active()\">\n                        <div class=\"card-header clearfix\" id=\"headingTwo\">\n                            <a class=\"side_menu\" [routerLink]=\"['/user']\">\n                                <span class=\"side_menu_icon\"><!-- <i class=\"fas fa-users\"></i> -->\n                                    <img src=\"assets/img/user-manage.png\" alt=\"icon\"/>\n                                </span>\n                                <span class=\"side_page_name\">User Management</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                    <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{active: ((currUrl==='wallet'))}\" (click)=\"active()\">\n                        <div class=\"card-header clearfix\" id=\"headingThree\">\n                            <a class=\"side_menu\" [routerLink]=\"['/wallet','sent']\">\n                                <span class=\"side_menu_icon\">\n                                    <img src=\"assets/img/wallet.png\" alt=\"icon\"/>\n                                    <!-- <i class=\"fas fa-users\"></i> -->\n                                </span>\n                                <span class=\"side_page_name\">Wallet Management</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                     <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{active: ((currUrl==='transactionmanagment'))}\" (click)=\"active()\">\n                        <div class=\"card-header clearfix\" id=\"headingThree\">\n                            <a class=\"side_menu\" [routerLink]=\"['/transactionmanagment','Request']\" >\n                               <!--  <span class=\"side_menu_icon\">\n                                    <img src=\"assets/img/envelope.png\" alt=\"icon\"/>\n                                </span> -->\n                                <span class=\"side_menu_icon\">\n                                    <i class=\"fas fa-exchange-alt\"></i>\n                                </span>\n                                <span class=\"side_page_name\">Transaction Management</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                    <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{active: currUrl==='tokenList'}\" (click)=\"active()\">\n                        <div class=\"card-header clearfix\" id=\"headingThree\">\n                            <a class=\"side_menu\" [routerLink]=\"['/tokenList']\" >\n                               <!--  <span class=\"side_menu_icon\">\n                                    <img src=\"assets/img/envelope.png\" alt=\"icon\"/>\n                                </span> -->\n                                <span class=\"side_menu_icon\">\n                                    <i class=\"fas fa-angle-double-right\"></i>\n                                </span>\n                                <span class=\"side_page_name\">Token List</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                                         <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{active: currUrl==='addtoken'}\" (click)=\"active()\">\n                        <div class=\"card-header clearfix\" id=\"headingThree\">\n                            <a class=\"side_menu\" [routerLink]=\"['/addtoken']\">\n                               <!--  <span class=\"side_menu_icon\">\n                                    <img src=\"assets/img/envelope.png\" alt=\"icon\"/>\n                                </span> -->\n                                <span class=\"side_menu_icon\">\n                                    <i class=\"fas fa-ticket-alt\"></i>\n                                </span>\n                                <span class=\"side_page_name\">Add Token</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                                         <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{active: currUrl==='withdraw'}\" (click)=\"active()\">\n                        <div class=\"card-header clearfix\" id=\"headingThree\">\n                            <a class=\"side_menu\" [routerLink]=\"['/withdraw']\">\n                               <!--  <span class=\"side_menu_icon\">\n                                    <img src=\"assets/img/envelope.png\" alt=\"icon\"/>\n                                </span> -->\n                                <span class=\"side_menu_icon\">\n                                    <i class=\"fas fa-credit-card\"></i>\n                                </span>\n                                <span class=\"side_page_name\">Withdrawal Fee</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                      <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{active: ((currUrl==='static')||(currUrl==='content'))}\" (click)=\"active()\">\n                        <div class=\"card-header clearfix\" id=\"headingThree\">\n                            <a class=\"side_menu\" [routerLink]=\"['/static']\">\n                                <span class=\"side_menu_icon\"><!-- <i class=\"fas fa-users\"></i> -->\n                                    <img src=\"assets/img/static-content.png\" alt=\"icon\"/>\n                                </span>\n                                <span class=\"side_page_name\">Static Content</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                    <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{active: step==='step8'}\" (click)=\"step='step8'\">\n                        <div class=\"card-header clearfix\">\n                            <a class=\"side_menu\" href=\"javascript:;\" (click)=\"signoutmodalFun()\">\n                                <span class=\"side_menu_icon\"><!-- <i class=\"fas fa-sign-out-alt\"></i> -->\n                                    <img src=\"assets/img/logout.png\" alt=\"icon\"/>     \n                                </span>\n                                <span class=\"side_page_name\">Logout</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                </div>\n                <!--Accordion End -->\n            </div>\n       </aside>\n       </div>\n    </div>\n<router-outlet></router-outlet>\n<footer class=\"before-login\">\n    <p>© Kitpay Limited 2018. All rights reserved.</p>\n </footer>\n  <!-- signout_modal Start -->\n  <div class=\"modal fade global-modal reset-modal\" id=\"signout_modal\">\n    <div class=\"modal-dialog max-WT-500\">\n        <div class=\"modal-content\">\n            <div>\n                <!-- Modal body -->\n                <div class=\"modal-body  text-center\">\n                    <div class=\"row align-items-center modal_flax_height\">\n                        <div class=\"col\">\n                            <div class=\"box-title mb40 d-inline-block\">\n                                <i class=\"fas fa-power-off off-icon\"></i>\n                                <p class=\"mt40\">Are you sure you want to logout?</p>\n                            </div>\n                            <div class=\"text-center\">\n                                <a  class=\"btn btn-blue btn-noYes\" data-dismiss=\"modal\" (click)=\"logout()\">YES</a>\n                                <button type=\"button\" class=\"btn btn-red btn-noYes\" data-dismiss=\"modal\">CANCEL</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Signout Modal -->\n <!-- Change Password_modal Start -->\n <div class=\"modal fade global-modal reset-modal\" id=\"change_password_modal\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\">\n            <div class=\"modal-content\">\n                <div class=\"inner_border_area\">\n                    <div class=\"modal-header \">\n                        <h4 class=\"modal-title text-center\">Change Password</h4>\n                        <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> -->\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"row align-items-center modal_flax_height\">\n                            <div class=\"col\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-labe\">Old Password</label>\n                                    <input class=\"form-control\" placeholder=\"\" required=\"\" type=\"text\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"control-labe\">New Password</label>\n                                    <input class=\"form-control\" placeholder=\"\" required=\"\" type=\"text\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"control-labe\">Confirm Password</label>\n                                    <input class=\"form-control\" placeholder=\"\" required=\"\" type=\"text\">\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-6\">\n                                        <button type=\"submit\" class=\"btn btn-gray btn-large radius0 btn-block\">SUBMIT</button>\n                                    </div>\n                                    <div class=\"col-6\">\n                                        <button type=\"button\" class=\"btn btn-red btn-large radius0 btn-block\" data-dismiss=\"modal\">CANCEL</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!-- Change Password_modal End -->"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(routes, service) {
        var _this = this;
        this.routes = routes;
        this.service = service;
        /*********** Routing Managed Start Here ***************/
        routes.events.subscribe(function (event) {
            //console.log("events==>> ",event);
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* NavigationEnd */]) {
                _this.currUrl = event.url.split('/')[1];
                _this.currUrl = (_this.currUrl.indexOf('?') != -1) ? _this.currUrl.substr(0, _this.currUrl.indexOf('?')) : _this.currUrl;
                console.log("current url ==>> " + _this.currUrl);
                if (localStorage.getItem("loginToken") != null) {
                    _this.service.changeLoginSub(localStorage.loginToken);
                    if ((_this.currUrl == "" || _this.currUrl == "forgot" || _this.currUrl == "reset")) {
                        _this.routes.navigate(["/home"]);
                    }
                }
                else {
                    //console.log("else")
                    if (!(_this.currUrl == "/" || _this.currUrl == "reset" || _this.currUrl == "forgot")) {
                        _this.routes.navigate(["/"]);
                        //console.log("else if");
                    }
                    _this.service.changeLoginSub(localStorage.loginToken);
                }
            }
        });
        /*********** Routing Managed End Here ***************/
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.step = window.location.pathname;
        // console.log("URL--->> ",this.step);
        this.name = localStorage.name;
        this.profilePic = localStorage.profilePic;
        // console.log('profilePics--->> ',this.profilePic);
        /*****************Header********************** */
        this.service.changeLoginSub(localStorage.login);
        this.service.loginObs.subscribe(function (response) {
            //  console.log('login observable response => '+ response)
            if (response != undefined) {
                _this.isLoggedIn = true;
                //  console.log("ISlogged======>>>>", this.isLoggedIn);
            }
            else {
                _this.isLoggedIn = false;
                // console.log("ISlogged======>>>>", this.isLoggedIn);
            }
        });
        /*************************Image Profile****************/
        this.service.changeimageSub(localStorage.profilePic);
        this.service.imageObs.subscribe(function (response) {
            // console.log('Image observable response => '+ response)
            _this.profilePic = response;
        });
    };
    HeaderComponent.prototype.signoutmodalFun = function () {
        console.log("logout Modal");
        $("#signout_modal").modal("show");
    };
    HeaderComponent.prototype.logout = function () {
        this.service.toastrSucc("Logout Successfully");
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('profilePic');
        localStorage.removeItem('loginToken');
        this.routes.navigate(['']);
    };
    /******************Router ******/
    HeaderComponent.prototype.active = function () {
        this.step = window.location.pathname;
    };
    /****************Script*************/
    HeaderComponent.prototype.script = function () {
        $(".btn-toggle,.close_panel").click(function () {
            $("body").toggleClass("toggle-wrapper");
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__("./src/app/pages/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Dashboard</h1>\n       <!--  <div class=\"common-bredcrumb\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active\">Dashboard</li>\n            </ol>\n\n        </div> -->\n    </div>\n    <!-- Page Title End -->\n    <div class=\"content-section dashboard-block\">\n      <ul class=\"dash_list d-flex w-100 flex-wrap text-center\">\n          <li>\n             <!-- <div class=\"dash_icon\">\n                  <i class=\"far fa-user\"></i>\n              </div> -->\n              <h2>Total Registered Users</h2>\n              <h4 *ngIf=\"register !=0\">{{register}}</h4>\n              <h4 *ngIf=\"register == 0\">0</h4>\n              \n          </li>\n          <li>\n             <!-- <div class=\"dash_icon\">\n                  <i class=\"far fa-user\"></i>\n              </div> -->\n              <h2>Total Active Users</h2>\n              <h4 *ngIf=\"active !=0\">{{active}}</h4>\n              <h4 *ngIf=\"active == 0\">0</h4>\n              \n          </li>\n          <li>\n             <!-- <div class=\"dash_icon\">\n                  <i class=\"far fa-user\"></i>\n              </div> -->\n              <h2>Total Blocked Users</h2>\n              <h4 *ngIf=\"block !=0\">{{block}}</h4>\n              <h4 *ngIf=\"block == 0\">0</h4>\n             \n          </li>\n          <li>\n             <!-- <div class=\"dash_icon\">\n                  <i class=\"far fa-user\"></i>\n              </div> -->\n              <h2>No. of Tokens</h2>\n              <h4 *ngIf=\"totalcoin !=0\" >{{totalcoin}}</h4>\n              <h4 *ngIf=\"totalcoin == 0\" >0</h4>\n              \n          </li>\n          <li>\n             <!-- <div class=\"dash_icon\">\n                  <i class=\"far fa-user\"></i>\n              </div> -->\n              <h2>No. of Transactions</h2>\n              <h4 *ngIf=\"totalcount !=0\">{{transaction}}</h4>\n              <h4 *ngIf=\"totalcount == 0\">0</h4>\n              \n          </li>\n          <li>\n             <!-- <div class=\"dash_icon\">\n                  <i class=\"far fa-user\"></i>\n              </div> -->\n              <h2>Total Coins</h2>\n              <h4 *ngIf=\"totalcount !=0\">{{totalcount}}</h4>\n              <h4 *ngIf=\"totalcount == 0\">0</h4>\n              \n          </li>\n      </ul>\n    </div>\n</main>\n <!--Modal Start-->\n <div class=\"modal fade global-modal reset-modal\" id=\"delet_farms_modal\">\n    <div class=\"modal-dialog max-WT-500\">\n        <div class=\"modal-content\">\n            <div class=\"inner_border_area\">\n                <!-- Modal body -->\n                <div class=\"modal-body  text-center\">\n                    <div class=\"row align-items-center modal_flax_height\">\n                        <div class=\"col\">\n                            <div class=\"box-title mb40 d-inline-block\">\n                                <h2>Are you sure?</h2>\n                                <p>You won’t be able to revert this!</p>\n                            </div>\n                            <div class=\"max-WT-300 d-inline-block\">\n                                <button type=\"button\" class=\"btn btn-gray btn-large radius0 btn-block\">YES</button>\n                                <button type=\"button\" class=\"btn btn-red btn-large radius0 btn-block\" data-dismiss=\"modal\">CANCEL</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(routes, route, service) {
        this.routes = routes;
        this.route = route;
        this.service = service;
        this.register = 0;
        this.active = 0;
        this.block = 0;
        this.totalcoin = 0;
        this.totalcount = 0;
        this.transaction = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.registeredApi();
        this.activeApi();
        this.blockedApi();
        this.totalcoinApi();
        this.totalCountApi();
        this.transactionApi();
    };
    /*****************Registered User************** */
    HomeComponent.prototype.registeredApi = function () {
        var _this = this;
        this.service.getApi("/admin/totalRegistereduser", 1).subscribe(function (response) {
            //console.log(JSON.stringify(response))
            if (response.body.responseCode == 200) {
                _this.register = response.body.data;
                //  console.log('register',this.register);
            }
            else {
                //  console.log(`Something went wrong`);
            }
        }, function (error) {
            _this.service.toastrErr("Something went wrong");
        });
    };
    /*****************Active User************** */
    HomeComponent.prototype.activeApi = function () {
        var _this = this;
        this.service.getApi("/admin/activeUsers", 1).subscribe(function (response) {
            //console.log(JSON.stringify(response))
            if (response.body.responseCode == 200) {
                _this.active = response.body.data;
                // console.log('active',this.active);
            }
            else {
                // console.log(`Something went wrong`);
            }
        }, function (error) {
            _this.service.toastrErr("Something went wrong");
        });
    };
    /*****************Blocked User************** */
    HomeComponent.prototype.blockedApi = function () {
        var _this = this;
        this.service.getApi("/admin/totalBlockedUser", 1).subscribe(function (response) {
            //console.log(JSON.stringify(response))
            if (response.body.responseCode == 200) {
                _this.block = response.body.data;
                //  console.log('block',this.block);
            }
            else {
                // console.log(`Something went wrong`);
            }
        }, function (error) {
            _this.service.toastrErr("Something went wrong");
        });
    };
    /*****************Total Coin User************** */
    HomeComponent.prototype.totalcoinApi = function () {
        var _this = this;
        this.service.getApi("/admin/totalCoins", 1).subscribe(function (response) {
            //console.log(JSON.stringify(response))
            if (response.body.responseCode == 200) {
                _this.totalcoin = response.body.data;
                //this.convert(coin);
                // console.log('totalcoin',this.totalcoin);
            }
            else {
                // console.log(`Something went wrong`);
            }
        }, function (error) {
            _this.service.toastrErr("Something went wrong");
        });
    };
    /*****************Total Count User************** */
    HomeComponent.prototype.totalCountApi = function () {
        var _this = this;
        this.service.getApi("/admin/numberOfTokens", 1).subscribe(function (response) {
            //console.log(JSON.stringify(response))
            if (response.body.responseCode == 200) {
                _this.totalcount = response.body.data;
                //  var coin = response.body.data ;
                //  this.convert(coin);
                // console.log('totalcount',this.totalcount);
            }
            else {
                // console.log(`Something went wrong`);
            }
        }, function (error) {
            _this.service.toastrErr("Something went wrong");
        });
    };
    //  convert(num) {
    //     //if the number is in scientific notation remove it
    //     if (/\d+\.?\d*e[\+\-]*\d+/i.test(num.toFixed(4))) {
    //     var zero = '0',
    //     parts = String(num).toLowerCase().split('e'), //split into coeff and exponent
    //     es = Number(parts.pop()), //store the exponential part
    //     l = Math.abs(es), //get the number of zeros
    //     sign = es / l,
    //     coeff_array = parts[0].split('.');
    //     if (sign === -1) {
    //     num = zero + '.' + new Array(l).join(zero) + coeff_array.join('');
    //     this.totalcount = num;
    //     console.log('==>>',this.totalcount);
    //     } else {
    //     var dec = coeff_array[1];
    //     if (dec) l = l - dec.length;
    //     num = coeff_array.join('') + new Array(l + 1).join(zero);
    //     this.totalcount = num;
    //     console.log('==>>',this.totalcount)
    //     }
    //     return num;
    //      } 
    //      //else {
    //     // return num;
    //     // }
    //     };
    /*****************Transaction User************** */
    HomeComponent.prototype.transactionApi = function () {
        var _this = this;
        this.service.getApi("/admin/numberOfTransaction", 1).subscribe(function (response) {
            //console.log(JSON.stringify(response))
            if (response.body.responseCode == 200) {
                _this.transaction = response.body.data;
                //  console.log('transaction',this.transaction);
            }
            else {
                // console.log(`Something went wrong`);
            }
        }, function (error) {
            _this.service.toastrErr("Something went wrong");
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"afterlogin\">\n  <div class=\"login-wrapper\">\n    <div class=\"container-common\">\n       <div class=\"row justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"d-flex align-items-center minheight70vh\">\n          <form class=\"login_box_outer w-100\" [formGroup]= 'loginForm'>\n            <div class=\"login-box max-WT-520\">\n                <div class=\"login-right-block\">\n                  <div class=\"login-heading\">\n                     <h4>LOGIN</h4>\n                  </div>\n                  <div class=\"login-box-body\">\n                    <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" formControlName='email' maxlength=\"64\"  placeholder=\"Please enter the Email\" autocomplete />\n                      </div>\n                      <p  *ngIf=\" loginForm.get('email').hasError('required') &&  loginForm.get('email').dirty\" style=\"color:red\"  padding>*Email field can not be empty</p>\n                      <p  *ngIf=\" loginForm.get('email').hasError('pattern') &&  loginForm.get('email').dirty\" style=\"color:red\"  padding>*Invalid Email</p>\n                      <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" formControlName='password' maxlength=\"16\" placeholder=\"Please enter the password\" />\n                      </div>\n                     <div class=\"form-group row\">\n                          <div class=\"col-6\">\n                            <div class=\"remember-text \">\n                              <label class=\"checkbox-design\">\n                                <input type=\"checkbox\"/><span></span>Remember me\n                              </label>\n                            </div>\n                          </div>\n                         <!--  <div class=\"text-right\">\n                             <a href=\"forgot-password.html\" class=\"forget-pass\">Forgot Password?</a>\n                          </div> -->\n                          <div class=\"col-6\">\n                            <div class=\"forgot-links\">\n                              <a [routerLink]=\"['/forgot']\">Forgot Password?</a>\n                            </div>\n                          </div>\n                      </div>\n                    </div>\n                      <div class=\"text-center mt40\">\n                        <button  type=\"button\" class=\"btn btn-login btn-large  width100 font-100\" [disabled]=\"!loginForm.valid\" (click)=\"loginApi(loginForm.value)\">LOGIN</button>\n                      </div>\n                     </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n  </body>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, routes) {
        this.service = service;
        this.routes = routes;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]),
            password: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    /**********************Login Api****************/
    LoginComponent.prototype.loginApi = function (data) {
        var _this = this;
        // console.log(data);
        var loginData = {
            "email": data.email,
            "password": data.password
        };
        //  localStorage.setItem('id','response.body.data._id');
        //  this.routes.navigate(['/home']);
        // console.log("Login Data ====>>>> "+ JSON.stringify(loginData));
        this.service.spinnerShow();
        this.service.postApi("/admin/login", loginData, 0).subscribe(function (response) {
            // console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                _this.service.toastrSucc(response.body.responseMessage);
                _this.loginForm.reset();
                localStorage.setItem('id', response.body.data._id);
                localStorage.setItem('name', response.body.data.name);
                localStorage.setItem('profilePic', response.body.data.profilePic);
                localStorage.setItem('loginToken', response.body.data.jwt);
                _this.routes.navigate(['/home']);
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
                //  console.log(`Something went wrong`);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["c" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/myprofile/myprofile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/myprofile/myprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">My Profile</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"dashboard.html\">Dashboard </a></li>\n              <li class=\"breadcrumb-item active\">Profile</li>\n          </ol>\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n\n      <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n          <div class=\"main-block-innner mb40 mt40\">\n              <div class=\"add-store-block input-style\">\n                <div class=\"text-right\"><button class=\"btn btn-green\" [routerLink]=\"['/change']\">Change Password</button></div>\n                  <div class=\"user-profile pro-pass\">\n                       <div class=\"image-box\">\n                           <img [src]=\"profileData.profilePic\" class=\"profile-pic\"> \n                      </div>\n                  </div>\n                  <div class=\"form-group row align-items-baseline\">\n                      <label class=\"col-md-5\">Name :</label>\n                      <div class=\"col-md-7\">\n                          <label>{{profileData.name}}</label>\n                      </div>\n                  </div>\n                  <div class=\"form-group row align-items-baseline\">\n                      <label class=\"col-md-5\">Email :</label>\n                      <div class=\"col-md-7\">\n                          <label><a href=\"javascrip:;\">{{profileData.email}}</a></label>\n                      </div>\n                  </div>\n                   <div class=\"form-group row align-items-baseline\">\n                      <label class=\"col-md-5\">Phone No:</label>\n                      <div class=\"col-md-7\">\n                          <label><a href=\"javascrip:;\">{{profileData.phoneNumber}}</a></label>\n                      </div>\n                  </div>\n                  <div class=\"form-group row align-items-baseline\">\n                      <label class=\"col-md-5\">Date of Birth :</label>\n                      <div class=\"col-md-7\">\n                          <label>{{profileData.DOB | date :  \"dd.MM.y\"}}</label>\n                      </div>\n                  </div>\n                  <div class=\"form-group row align-items-baseline\">\n                      <label class=\"col-md-5\">Gender :</label>\n                      <div class=\"col-md-7\">\n                          <label>{{profileData.gender}}</label>\n                      </div>\n                  </div>\n                  <div class=\"form-group row align-items-baseline\">\n                      <label class=\"col-md-5\">Address :</label>\n                      <div class=\"col-md-7\">\n                          <label>{{address}}</label>\n                      </div>\n                  </div>\n                  <div class=\"text-left mt40\">\n                      <button type=\"button\" class=\"btn btn-large  max-WT-200 font-100 btn-green\" [routerLink]=\"['/edit']\">Edit Profile</button>\n                      <!-- <button  type=\"button\"  class=\"btn btn-large  max-WT-200 font-100 btn-grey ml5 \" (click)=\"back()\">Cancel</button> -->\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/myprofile/myprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyprofileComponent = /** @class */ (function () {
    function MyprofileComponent(service) {
        this.service = service;
        this.profileData = {};
    }
    MyprofileComponent.prototype.ngOnInit = function () {
        this.profileApi();
    };
    /**********************Profile Pic Api*****************/
    MyprofileComponent.prototype.profileApi = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.getApi("/admin/myProfile", 1).subscribe(function (response) {
            // console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                //this.service.toastrSucc(response.body.responseMessage);
                _this.profileData = response.body.data;
                _this.address = _this.profileData.address;
                // console.log("address==> ",this.profileData.gender);
                // console.log("address==> ",this.address);
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong.");
        });
    };
    MyprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__("./src/app/pages/myprofile/myprofile.component.html"),
            styles: [__webpack_require__("./src/app/pages/myprofile/myprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_main_service__["a" /* MainService */]])
    ], MyprofileComponent);
    return MyprofileComponent;
}());



/***/ }),

/***/ "./src/app/pages/reset/reset.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"afterlogin\">\n  <div class=\"login-wrapper\">\n    <div class=\"container-common\">\n       <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"d-flex align-items-center minheight70vh\">\n          <form class=\"login_box_outer w-100\" [formGroup]= 'resetForm'>\n            <div class=\"login-box max-WT-520\">\n                <div class=\"login-right-block\">\n                  <div class=\"login-heading\">\n                     <h4>FORGOT PASSWORD</h4>\n                     <h4 class=\"f-size-18\">Reset Password</h4>\n                  </div>\n                  <div class=\"login-box-body\">\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" formControlName='password' maxlength=\"16\" placeholder=\"Password\" />\n                    </div>\n                    <p  *ngIf=\" resetForm.get('password').hasError('required') &&  resetForm.get('password').dirty\" style=\"color:red\"  padding>*password field can not be empty</p>\n                      <p  *ngIf=\" resetForm.get('password').hasError('minlength') &&  resetForm.get('password').dirty\" style=\"color:red\"  padding>*Password should be in between 8-16 character</p>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\"  formControlName='confirmpassword' maxlength=\"16\" placeholder=\"Confirm Password\" />\n                    </div>\n                    <p  *ngIf=\" resetForm.get('confirmpassword').hasError('required') &&  resetForm.get('confirmpassword').dirty\" style=\"color:red\"  padding>*Confirmpassword field can not be empty</p>\n                    <p *ngIf=\"(resetForm.get('password').value != resetForm.get('confirmpassword').value) && resetForm.get('confirmpassword').value!= '' && resetForm.get('confirmpassword').dirty\" style=\"color:red\"  padding>*Confirm Password does not match with Password</p>\n                  </div>\n                      <div class=\"text-center mt40\">\n                          <button type=\"button\"  class=\"btn btn-login btn-large  width100 font-100\" [disabled]=\"!resetForm.valid || (resetForm.get('password').value != resetForm.get('confirmpassword').value)\" (click)=\"resetApi(resetForm.value)\">Reset</button>\n                      </div>\n                </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/pages/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetComponent = /** @class */ (function () {
    function ResetComponent(service, routes, activatedRoute) {
        this.service = service;
        this.routes = routes;
        this.activatedRoute = activatedRoute;
        this.resetForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            password: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].minLength(8)]),
            confirmpassword: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].minLength(8)]),
        });
    }
    ResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            // console.log(queryParams)
            _this.id = queryParams._id;
            _this.ran = queryParams.ran;
        });
    };
    /*************Reset Api********************/
    ResetComponent.prototype.resetApi = function (data) {
        var _this = this;
        var url = '/admin/resetPassword?_id=' + this.id + '&ran=' + this.ran;
        // console.log("Reset==> ",url);
        var resetData = {
            "password": data.password
        };
        //  console.log("reset Data ====>>>> "+ JSON.stringify(resetData));
        this.service.spinnerShow();
        this.service.postApi(url, resetData, 0).subscribe(function (response) {
            // console.log(response);
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                _this.service.toastrSucc(response.body.responseMessage);
                _this.routes.navigate(['']);
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__("./src/app/pages/reset/reset.component.html"),
            styles: [__webpack_require__("./src/app/pages/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["a" /* ActivatedRoute */]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/pages/staticontent/staticontent.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/staticontent/staticontent.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Static Content Management</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n\n              <li class=\"breadcrumb-item active\">User Management</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <div class=\"outer-box\">\n\n          <!-- Gloabl Table Box Start -->\n          <div class=\"global-table no-radius p0\">\n\n              <div class=\"tab-content1\">\n                  <div class=\"tab-pane1\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-bordered\" style=\"text-align: center;\">\n                              <thead>\n                                  <tr class=\"no_wrap_th\" >\n                                    <th>ID</th>\n                                      <th>Page Name </th>\n                                      <th class=\"action_td_btn3\">Action</th>\n                                  </tr>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                    <td>1</td>\n                                      <td>About US</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a  (click)=\"aboutus()\"><i class=\"fa fa-eye\"></i></a>\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                    <td>2</td>\n                                      <td>Terms & Services</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a  (click)=\"terms()\" ><i class=\"fa fa-eye\"></i></a>\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                    <td>3</td>\n                                      <td>Privacy</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a (click)=\"privacy()\"><i class=\"fa fa-eye\"></i></a>\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Table Responsive End -->\n\n</main>\n<!-- Middle Content End -->"

/***/ }),

/***/ "./src/app/pages/staticontent/staticontent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticontentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaticontentComponent = /** @class */ (function () {
    function StaticontentComponent(service, routes) {
        this.service = service;
        this.routes = routes;
    }
    StaticontentComponent.prototype.ngOnInit = function () {
    };
    /***********************About US**************/
    StaticontentComponent.prototype.aboutus = function () {
        this.routes.navigate(['/content', 'about']);
    };
    /***********************Terms**************/
    StaticontentComponent.prototype.terms = function () {
        this.routes.navigate(['/content', 'terms']);
    };
    /***********************Privacy Policy**************/
    StaticontentComponent.prototype.privacy = function () {
        this.routes.navigate(['/content', 'privacy']);
    };
    StaticontentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-staticontent',
            template: __webpack_require__("./src/app/pages/staticontent/staticontent.component.html"),
            styles: [__webpack_require__("./src/app/pages/staticontent/staticontent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["c" /* Router */]])
    ], StaticontentComponent);
    return StaticontentComponent;
}());



/***/ }),

/***/ "./src/app/pages/sweep/sweep.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/sweep/sweep.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">View KYC Details</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"user-management.html\">User Management </a></li>\n              <li class=\"breadcrumb-item active\">Transaction Details</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n           <div class=\"main-block-innner mb40 mt40\">\n              <div class=\"add-store-block input-style\" >\n                  <div class=\"form-group row \">\n                      <div class=\"col-md-6 text-center h_key\">\n                        <label class=\"attachment-label\"><qr-code [value]=\"address\" [size]=\"150\"></qr-code> </label>\n                         <label class=\"attachment-label\">Private Key</label>\n                         <div class=\"input-group filter_search_group\">\n                              <input type=\"text\" class=\"form-control text-center\" placeholder=\"#hjjdfkjhdkjfhui\"  disabled>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6 text-center h_key\">\n                        <label class=\"attachment-label\"> <qr-code [value]=\"address\" [size]=\"150\"></qr-code></label>\n                         <label class=\"attachment-label\">Public Key</label>\n                         <div class=\"input-group filter_search_group\">\n                              <input type=\"text\" class=\"form-control text-center\" placeholder=\"#hjjdfkjhdkjfhui\" disabled>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              \n              <div class=\"form-group row align-items-center mt40\">\n                      <label class=\"col-md-12 d-flex align-items-center\">\n                          <h5>Download pdf</h5>                                     \n                          <label class=\"attachment-label ml20 pdf_font\"> \n                              <i class=\"fa fa-download\" aria-hidden=\"true\"  (click)=\"download()\"></i>\n                          </label>\n                      </label>\n                  </div>\n                  <div class=\"text-center mt40\">\n                    <button type=\"button\" href=\"javascript:;\" class=\"btn btn-green max-WT-170\" [routerLink]=\"['/user']\" >Ok</button>\n                  </div>\n              </div>\n          </div>\n          </div>\n      \n\n</main>"

/***/ }),

/***/ "./src/app/pages/sweep/sweep.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SweepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SweepComponent = /** @class */ (function () {
    function SweepComponent(http) {
        this.http = http;
    }
    SweepComponent.prototype.ngOnInit = function () {
        this.address = "Hii I am skp";
    };
    SweepComponent.prototype.download = function () {
        window.print();
    };
    SweepComponent.prototype.script = function () {
        $('.jqte-test').jqte();
        // settings of status
        var jqteStatus = true;
        $(".status").click(function () {
            jqteStatus = jqteStatus ? false : true;
            $('.jqte-test').jqte({
                "status": jqteStatus
            });
        });
    };
    SweepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sweep',
            template: __webpack_require__("./src/app/pages/sweep/sweep.component.html"),
            styles: [__webpack_require__("./src/app/pages/sweep/sweep.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SweepComponent);
    return SweepComponent;
}());



/***/ }),

/***/ "./src/app/pages/tokenlist/tokenlist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tokenlist/tokenlist.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Token List</h1>\n        <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n\n              <li class=\"breadcrumb-item active\">User Management</li>\n          </ol>\n\n      </div> -->\n    </div>\n    <!-- Page Title End -->\n    <div class=\"content-section\">\n        <div class=\"outer-box\">\n            <!-- Gloabl Table Box Start -->\n            <div class=\"global-table no-radius p0\">\n                <div class=\"tab-content1\">\n                    <div class=\"tab-pane1\">\n                        <div class=\"text-right mb20\">\n                            <button type=\"button\" class=\"btn  btn-theme\" [routerLink]=\"['/addtoken']\">Add Kit Token</button>\n                            <button type=\"button\" class=\"btn  btn-theme\" (click)=\"addcustomToken()\">Add Custom Token</button>\n                        </div>\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-bordered\">\n                                <thead>\n                                    <tr class=\"no_wrap_th\">\n                                        <th>ID No.</th>\n                                        <th>Token Name</th>\n                                        <th>Token Image</th>\n                                        <th>Token Price</th>\n                                        <th class=\"action_td_btn3\">Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of tokenList | paginate: { itemsPerPage:limit , currentPage: p1 , totalItems:total} ; let i = index;\">\n                                        <td *ngIf=\"p1 == 1\">{{i + 1}}</td>\n                                        <td *ngIf=\"p1 > 1\">{{i + 1 + (limit * (p1-1))}}</td>\n                                        <td>{{item.tokenName}}</td>\n                                        <th><img [src]=\"item.tokenImage\" width=\"40px;\"></th>\n                                        <td *ngIf=\"item.tokenPrice\">${{item.tokenPrice}}</td>\n                                        <td *ngIf=\"!item.tokenPrice\">N/A</td>\n                                        <td class=\"action_td_btn3\">\n                                            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deletemodal(item._id)\"\n                                                data-toggle=\"modal\">Delete</button>\n                                            <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"viewmodal(item._id)\"\n                                                data-toggle=\"modal\">View</button>\n                                        </td>\n                                    </tr>\n                                    <!-- <tr>\n                                    <td>1</td>\n                                      <td>Token Name</td>\n                                      <th><img src=\"assets/img/bitcoin.png\" width=\"40px;\"></th>\n                                      <td>$400</td>\n\n                                      <td class=\"action_td_btn3\">\n                                         <button class=\"btn btn-danger btn-sm\" data-target=\"#delete\" data-toggle=\"modal\">Delete</button>\n                                         <button class=\"btn btn-info btn-sm\">View</button>\n                                      </td>\n                                  </tr>\n                                   <tr>\n                                    <td>1</td>\n                                      <td>Token Name</td>\n                                      <th><img src=\"assets/img/bitcoin.png\" width=\"40px;\"></th>\n                                      <td>$400</td>\n\n                                      <td class=\"action_td_btn3\">\n                                         <button class=\"btn btn-danger btn-sm\" data-target=\"#delete\" data-toggle=\"modal\">Delete</button>\n                                         <button class=\"btn btn-info btn-sm\">View</button>\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                    <td>1</td>\n                                      <td>Token Name</td>\n                                      <th><img src=\"assets/img/bitcoin.png\" width=\"40px;\"></th>\n                                      <td>$400</td>\n\n                                      <td class=\"action_td_btn3\">\n                                         <button class=\"btn btn-danger btn-sm\" data-target=\"#delete\" data-toggle=\"modal\">Delete</button>\n                                         <button class=\"btn btn-info btn-sm\">View</button>\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                    <td>1</td>\n                                      <td>Token Name</td>\n                                      <th><img src=\"assets/img/bitcoin.png\" width=\"40px;\"></th>\n                                      <td>$400</td>\n\n                                      <td class=\"action_td_btn3\">\n                                         <button class=\"btn btn-danger btn-sm\" data-target=\"#delete\" data-toggle=\"modal\">Delete</button>\n                                         <button class=\"btn btn-info btn-sm\">View</button>\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                    <td>1</td>\n                                      <td>Token Name</td>\n                                      <th><img src=\"assets/img/bitcoin.png\" width=\"40px;\"></th>\n                                      <td>$400</td>\n\n                                      <td class=\"action_td_btn3\">\n                                         <button class=\"btn btn-danger btn-sm\" data-target=\"#delete\" data-toggle=\"modal\">Delete</button>\n                                         <button class=\"btn btn-info btn-sm\">View</button>\n                                      </td>\n                                  </tr> -->\n                                </tbody>\n                                <pagination-controls *ngIf=\"(limit == '')||(limit < total)\"\n                                    (pageChange)=\"tokenListApi($event)\"></pagination-controls>\n                            </table>\n                        </div>\n                        <!-- <div class=\"custom-pagination mt20 text-right\">\n                          <nav aria-label=\"Page navigation example\">\n                              <ul class=\"pagination\">\n                                  <li class=\"page-item\">\n                                      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                                          <span aria-hidden=\"true\">«</span>\n                                          <span class=\"sr-only\">Previous</span>\n                                      </a>\n                                  </li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\n                                  <li class=\"page-item\">\n                                      <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                                          <span aria-hidden=\"true\">»</span>\n                                          <span class=\"sr-only\">Next</span>\n                                      </a>\n                                  </li>\n                              </ul>\n                          </nav>\n                      </div> -->\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!-- Table Responsive End -->\n\n</main>\n<!-- delete_modal Start -->\n<div class=\"modal fade global-modal reset-modal\" id=\"delete\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\">\n            <div class=\"modal-content\">\n                <div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                    <div class=\"modal-body\">\n                        <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                            <div class=\"w-100\">\n                                <p>Are you sure want to delete this user?</p>\n                                <div>\n                                    <button type=\"button\" class=\"btn btn-info\" (click)=\"delete()\">Delete</button>\n                                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!-- delete_modal End -->\n<!-- View_modal Start -->\n<div class=\"modal fade global-modal reset-modal\" id=\"view\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\">\n            <div class=\"modal-content\">\n                <div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                    <div class=\"modal-body\">\n                        <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                            <div class=\"main-block-innner mb40 mt0\">\n                                <div class=\"add-store-block input-style\">\n                                    <img [src]=\"detail.tokenImage\" width=\"40px;\">\n                                    <!-- <h4 class=\"mb30\">Token NAme</h4> -->\n                                    <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Token Name :</label>\n                                        <div class=\"col-md-6  text-left\">\n                                            <p>{{detail.tokenName}}\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Token Id :</label>\n                                        <div class=\"col-md-6 text-left\">\n                                            <p>{{detail._id}}</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Token Address:</label>\n                                        <div class=\"col-md-6 text-left\">\n                                            <p style=\"word-wrap: break-word\">{{detail.contractAddress}}</p>\n                                        </div>\n                                    </div>\n                                    <!-- <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Token Price :</label>\n                                        <div class=\"col-md-6 text-left\">\n                                            <p *ngIf=\"detail.tokenPrice\">{{detail.tokenPrice}}</p>\n                                            <p *ngIf=\"!detail.tokenPrice\">N/A</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Owner Address :</label>\n                                        <div class=\"col-md-6 text-left\">\n                                           <p *ngIf=\"detail.ownerAddress\" style=\"word-wrap: break-word\">{{detail.ownerAddress}}</p>\n                                            <p *ngIf=\"!detail.ownerAddress\" style=\"word-wrap: break-word\">N/A</p>\n                                        </div>\n                                    </div> -->\n                                    <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Date :</label>\n                                        <div class=\"col-md-6 text-left\">\n                                            <p>{{detail.createdAt | date: 'yyyy/MM/dd'}}</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"text-left mt40 text-center\">\n                                        <a class=\"btn btn-large  max-WT-200 font-100 btn-green\" href=\"javascript:;\"\n                                            data-dismiss=\"modal\">OK</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<!-- View_modal End -->\n<!-- Add Custom Token Start Here -->\n<div class=\"modal fade global-modal reset-modal\" id=\"customToken\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\">\n            <div class=\"modal-content\">\n                <div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                    <div class=\"modal-body\">\n                        <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                            <div class=\"main-block-innner mb40 mt0\">\n                                <div class=\"add-store-block input-style\">\n                                    <form [formGroup]= 'customForm'>\n                                        <div class=\"form-group row align-items-center\">\n                                            <label class=\"col-md-5\">Token Image :</label>\n                                            <div class=\"col-md-7\">\n                                              <div class=\"user-profile pro-pass\">\n                                                <div class=\"image-box m-0\">\n                                                     <img *ngFor=\"let item of token64\"  src=\"{{item}}\" alt=\"Token Image\" class=\"profile-pic\"> \n                                                      <label class=\"upload-label\">\n                                                       <input type=\"file\" name=\"image\" formControlName=\"tokenimage\" (change)=\"onUploadChangeCustom($event)\" accept=\".png, .jpg, .jpeg, .pdf\">\n                                                        <i class=\"fas fa-camera\"></i>\n                                                    </label>\n                                                </div>\n                                                <p *ngIf=\"customForm.get('tokenimage').hasError('required') &&   customForm.get('tokenimage').dirty\" style=\"color:red\"  padding>*Please update the token image</p>\n                                              </div>\n                                             </div>\n                                        </div>\n                                         <div class=\"form-group row align-items-center\">\n                                            <label class=\"col-md-5\">Contract Address :</label>\n                                            <div class=\"col-md-7\">\n                                                <input type=\"text\" class=\"form-control form-control2\" formControlName=\"tokencontactaddress\" maxlength=\"42\" />\n                                                <p  *ngIf=\" customForm.get('tokencontactaddress').hasError('required') &&  customForm.get('tokencontactaddress').dirty\" style=\"color:red\"  padding>*Contactaddress field can not be empty</p>\n                                            </div>\n                                        </div>\n                                        <!-- <div class=\"form-group row align-items-center\">\n                                            <label class=\"col-md-5\">Hot Storage Address :</label>\n                                            <div class=\"col-md-7\">\n                                                <input type=\"text\" class=\"form-control form-control2 \" formControlName=\"storageaddress\" maxlength=\"42\" />\n                                                <p  *ngIf=\" customForm.get('storageaddress').hasError('required') &&  customForm.get('storageaddress').dirty\" style=\"color:red\"  padding>*Storageaddress field can not be empty</p>\n                                            </div>\n                                        </div> \n                                        <div class=\"form-group row align-items-center\">\n                                            <label class=\"col-md-5\">Hot Storage Pvt. Key :</label>\n                                            <div class=\"col-md-7\">\n                                                <input type=\"text\" class=\"form-control form-control2 \" formControlName=\"privatekey\" maxlength=\"66\"/>\n                                                <p  *ngIf=\" customForm.get('privatekey').hasError('required') &&  customForm.get('privatekey').dirty\" style=\"color:red\"  padding>*Storage Private Key field can not be empty</p>\n                                            </div>\n                                        </div> -->\n                                        <div class=\"text-center mt40\">\n                                            <button type=\"button\" href=\"javascript:;\" class=\"btn btn-large font-100 btn-green\" [disabled]=\"!customForm.valid\" (click)=\"customTokenFun(customForm.value)\">Add Token</button>\n                                        </div>\n                                      </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!--Add Custom token End Here -->"

/***/ }),

/***/ "./src/app/pages/tokenlist/tokenlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TokenlistComponent = /** @class */ (function () {
    function TokenlistComponent(service, route) {
        this.service = service;
        this.route = route;
        this.tokenList = [];
        this.p1 = 1;
        this.detail = {};
        this.token64 = ['assets/img/token.png'];
        this.customForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            tokenimage: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            tokencontactaddress: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
        });
    }
    TokenlistComponent.prototype.ngOnInit = function () {
        this.tokenListApi(this.p1);
        this.id = localStorage.id;
    };
    /**************************Token List Api**************/
    TokenlistComponent.prototype.tokenListApi = function (page) {
        var _this = this;
        this.p1 = page;
        var tokenData = {
            "tokenName": '',
            "page": this.p1
        };
        // console.log("Search Token==> ",JSON.stringify(tokenData));
        this.service.spinnerShow();
        this.service.postApi("/admin/tokenList", tokenData, 1).subscribe(function (response) {
            console.log(JSON.stringify(response));
            if (response.body.responseCode == 200) {
                _this.service.spinnerHide();
                var tokenDetail = response.body.data;
                _this.tokenList = tokenDetail.data;
                _this.limit = tokenDetail.limit;
                _this.total = tokenDetail.total;
                console.log("Token List ====>>  ", _this.tokenList);
            }
            else {
                _this.service.spinnerHide();
                _this.service.toastrErr("Something went wrong");
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    /********************Delete****************/
    /****************** Custom Token Image *******************************/
    TokenlistComponent.prototype.onUploadChangeCustom = function (evt) {
        this.token64 = [];
        // this.service.spinnerShow();
        var file = evt.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = this.handleReaderLoadedCustom.bind(this);
            reader.readAsBinaryString(file);
            // this.service.spinnerHide();
        }
    };
    TokenlistComponent.prototype.handleReaderLoadedCustom = function (e) {
        this.token64.push('data:image/png;base64,' + btoa(e.target.result));
        this.tokenbase64 = 'data:image/png;base64,' + btoa(e.target.result);
    };
    /******************* Custom Token Image End Here *********************/
    TokenlistComponent.prototype.deletemodal = function (id) {
        this.tokenid = id;
        // console.log("Token Id==> ",this.tokenid);
        $("#delete").modal({ backdrop: 'static' });
    };
    TokenlistComponent.prototype.delete = function () {
        var _this = this;
        var tokenid = {
            "_id": this.tokenid
        };
        // console.log("Search Token==> ",JSON.stringify(tokenid));
        this.service.spinnerShow();
        this.service.postApi("/admin/deleteToken", tokenid, 1).subscribe(function (response) {
            // console.log(JSON.stringify(response))
            if (response.body.responseCode == 200) {
                _this.service.spinnerHide();
                //this.service.toastrSucc(response.body.responseMessage);
                $("#delete").modal('hide');
                _this.tokenListApi(_this.p1);
            }
            else {
                _this.service.spinnerHide();
                _this.service.toastrErr("Something went wrong");
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    /********************View Modal ****************/
    TokenlistComponent.prototype.viewmodal = function (id) {
        var _this = this;
        //$(`#view`).modal({backdrop: 'static'});
        this.tokenid = id;
        // console.log("Token Id==> ",this.tokenid);
        var tokenid = {
            "_id": this.tokenid
        };
        // console.log("Search Token==> ",JSON.stringify(tokenid));
        this.service.spinnerShow();
        this.service.postApi("/admin/viewTokenInfo", tokenid, 1).subscribe(function (response) {
            console.log(JSON.stringify(response));
            if (response.body.responseCode == 200) {
                _this.service.spinnerHide();
                //this.service.toastrSucc(response.body.responseMessage);
                _this.detail = response.body.data;
                console.log("TokenDetail==> ", _this.detail);
                $("#view").modal({ backdrop: 'static' });
            }
            else {
                _this.service.spinnerHide();
                _this.service.toastrErr("Something went wrong");
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    /************************** Open Modal of Custom Token ****************/
    TokenlistComponent.prototype.addcustomToken = function () {
        $('#customToken').modal('show');
    };
    /**************************** End Modal Function ***********************/
    /********************* Add Custom Token Function ***********************/
    TokenlistComponent.prototype.customTokenFun = function (formvalue) {
        var _this = this;
        console.log("Form Value ----> ", JSON.stringify(formvalue));
        console.log("Image --<> ", this.tokenbase64);
        var tokenData = {
            "contractAddress": formvalue.tokencontactaddress,
            "_id": this.id,
            "tokenType": "ERC",
            "tokenImage": this.tokenbase64
        };
        console.log("Token Data ====>>>> " + JSON.stringify(tokenData));
        this.service.spinnerShow();
        this.service.postApi("/admin/addToken", tokenData, 1).subscribe(function (response) {
            //  console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                _this.customForm.reset();
                _this.service.toastrSucc(response.body.responseMessage);
                $('#customToken').modal('hide');
                _this.token64 = ['assets/img/token.png'];
                _this.tokenListApi(_this.p1);
            }
            else {
                _this.token64 = ['assets/img/token.png'];
                _this.service.toastrErr(response.body.responseMessage);
                $('#customToken').modal('hide');
                _this.tokenListApi(_this.p1);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.token64 = ['assets/img/token.png'];
            _this.service.toastrErr("Something went wrong");
            _this.tokenListApi(_this.p1);
        });
    };
    TokenlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tokenlist',
            template: __webpack_require__("./src/app/pages/tokenlist/tokenlist.component.html"),
            styles: [__webpack_require__("./src/app/pages/tokenlist/tokenlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], TokenlistComponent);
    return TokenlistComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/transaction.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Transactions Details</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n\n              <li class=\"breadcrumb-item active\">User Management</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <div class=\"outer-box\">\n          <div class=\"custom_tabs common-tabs\">\n              <div class=\"row mb20 justify-content-center\">\n                  <div class=\"col-sm-12\">\n                      <ul class=\"nav nav-tabs d-flex  justify-content-center text-center\">\n                          <li class=\"nav-item flex-fill\">\n                              <a class=\"nav-link active show\" data-toggle=\"tab\" >\n                                Token 1\n                                <p class=\"m-0\">2653764873648</p>\n                              </a>\n                          </li>\n                          <li class=\"nav-item flex-fill\">\n                              <a class=\"nav-link\" data-toggle=\"tab\"  > \n                                Token 2\n                                <p class=\"m-0\">3543654765756</p>\n                              </a>\n                          </li>\n                          <li class=\"nav-item flex-fill\">\n                              <a class=\"nav-link\" data-toggle=\"tab\"  > \n                                Token 3\n                                <p class=\"m-0\">4356546445666</p>\n                              </a>\n                          </li>\n                          <li class=\"nav-item flex-fill\">\n                              <a class=\"nav-link\" data-toggle=\"tab\"  > \n                                Token 4\n                                <p class=\"m-0\">3565476588787</p>\n                              </a>\n                          </li>\n                       </ul>\n                  </div>\n              </div> \n              <div class=\"tab-content\">\n                  <div class=\"tab-pane active show\" id=\"tab1\">\n                    <div class=\"tab-pane1\">\n                          <div class=\"custom_tabs common-tabs\">\n                          <div class=\"sec_head_new sec_head_new_after\">\n                            <div class=\"row justify-content-between\">\n                              <div class=\"col-md-6 col-xl-3\">\n                                  <div class=\"filter_search mb20 width100\">\n                                    <div class=\"input-group filter_search_group\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Search by Transaction id\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn_search_group\" type=\"button\"><img src=\"img/icon-search.png\" alt=\"Search\"></button>\n                                        </div>\n                                    </div>\n                                 </div>\n                              </div>\n                              <div class=\"col-md-12 col-xl-7\">\n                                  <div class=\"filter_fields d-inline-flex\">\n                                      <div class=\"head_flt_select \">\n                                          <div class=\"head_flt_select align-items-center d-flex h-100\">\n                                              <label>Date of Transaction:</label>\n                                          </div>\n                                      </div>\n                                      <div class=\"head_flt_select\">\n                                          <div class=\"head_flt_select input-label\">\n                                              <span class=\"d-flex align-items-center\">From</span>\n                                              <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                          </div>\n                                      </div>\n                                      <div class=\"head_flt_select\">\n                                          <div class=\"head_flt_select input-label\">\n                                              <span class=\"d-flex align-items-center\">To</span>\n                                              <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"col-md-6 col-xl-2\">\n                                  <div class=\"text-left\">\n                                      <button type=\"submit\" class=\"btn  btn-theme\">Search</button>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                              <div class=\"tab-content\">\n                                  <div class=\"tab-pane active show\">\n                                      <!-- <div class=\"mb10 mt20 show-txt\">\n                                          <span>Show</span>\n                                          <select name=\"\" class=\"form-control form-control2 select_opt\">\n                                              <option value=\"\" selected=\"\">3</option>\n                                              <option value=\"\">2</option>\n                                              <option value=\"\">1</option>\n                                          </select>\n                                          <span>from all</span>\n                                      </div> -->\n                                      <div class=\"table-responsive\">\n                                          <table class=\"table table-bordered\">\n                                              <thead>\n                                                  <tr class=\"no_wrap_th\">\n                                                    <th>Sr no.</th>\n                                                      <th>Amount</th>\n                                                      <th>No. of Token</th>\n                                                      <th>Transaction ID</th>\n                                                      <th>Private Key</th>\n                                                      <th>Date</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>sdfsdfsd</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n\n                                                  </tr>\n                                                 <tr>\n                                                      <td>01</td>\n                                                      <td>sdfdsfdsfsd</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                     <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n                                                  </tr>\n                                                 <tr>\n                                                      <td>01</td>\n                                                      <td>dsfdsfsd</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>dsfdsfdsff</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>sdfsdfdsf</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>sdfdsfdsf</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>sdfdsfdsfds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n\n\n\n\n                          \n                      </div>\n                  </div>\n                  <div class=\"tab-pane active show\" id=\"tab2\">\n                    <div class=\"tab-pane1\">\n                          <div class=\"custom_tabs common-tabs\">\n                          <div class=\"sec_head_new sec_head_new_after\">\n                            <div class=\"row justify-content-between\">\n                              <div class=\"col-md-6 col-xl-3\">\n                                  <div class=\"filter_search mb20 width100\">\n                                    <div class=\"input-group filter_search_group\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Search by Transaction id\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn_search_group\" type=\"button\"><img src=\"img/icon-search.png\" alt=\"Search\"></button>\n                                        </div>\n                                    </div>\n                                 </div>\n                              </div>\n                              <div class=\"col-md-12 col-xl-7\">\n                                  <div class=\"filter_fields d-inline-flex\">\n                                      <div class=\"head_flt_select \">\n                                          <div class=\"head_flt_select align-items-center d-flex h-100\">\n                                              <label>Date of Transaction:</label>\n                                          </div>\n                                      </div>\n                                      <div class=\"head_flt_select\">\n                                          <div class=\"head_flt_select input-label\">\n                                              <span class=\"d-flex align-items-center\">From</span>\n                                              <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                          </div>\n                                      </div>\n                                      <div class=\"head_flt_select\">\n                                          <div class=\"head_flt_select input-label\">\n                                              <span class=\"d-flex align-items-center\">To</span>\n                                              <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"col-md-6 col-xl-2\">\n                                  <div class=\"text-left\">\n                                      <button type=\"submit\" class=\"btn  btn-theme\">Search</button>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                              <div class=\"tab-content\">\n                                  <div class=\"tab-pane active show\">\n                                      <div class=\"mb10 mt20 show-txt\">\n                                          <span>Show</span>\n                                          <select name=\"\" class=\"form-control form-control2 select_opt\">\n                                              <option value=\"\" selected=\"\">3</option>\n                                              <option value=\"\">2</option>\n                                              <option value=\"\">1</option>\n                                          </select>\n                                          <span>from all</span>\n                                      </div>\n                                      <div class=\"table-responsive\">\n                                          <table class=\"table table-bordered\">\n                                              <thead>\n                                                  <tr class=\"no_wrap_th\">\n                                                    <th>Sr no.</th>\n                                                      <th>Amount</th>\n                                                      <th>No. of Token</th>\n                                                      <th>Transaction ID</th>\n                                                      <th>Private Key</th>\n                                                      <th>Date</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>dfgdfsgds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n\n                                                  </tr>\n                                                 <tr>\n                                                      <td>01</td>\n                                                      <td>asdgvdsfg</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                     <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n                                                  </tr>\n                                                 <tr>\n                                                      <td>01</td>\n                                                      <td>dfsgavdfsg</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>dfghbtryhj</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>trujhtredyr</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>trehuywrtshb</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>regbtedrh</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n\n\n\n\n                          \n                      </div>\n                  </div>\n                  <div class=\"tab-pane active show\" id=\"tab3\">\n                    <div class=\"tab-pane1\">\n                          <div class=\"custom_tabs common-tabs\">\n                          <div class=\"sec_head_new sec_head_new_after\">\n                            <div class=\"row justify-content-between\">\n                              <div class=\"col-md-6 col-xl-3\">\n                                  <div class=\"filter_search mb20 width100\">\n                                    <div class=\"input-group filter_search_group\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Search by Transaction id\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn_search_group\" type=\"button\"><img src=\"img/icon-search.png\" alt=\"Search\"></button>\n                                        </div>\n                                    </div>\n                                 </div>\n                              </div>\n                              <div class=\"col-md-12 col-xl-7\">\n                                  <div class=\"filter_fields d-inline-flex\">\n                                      <div class=\"head_flt_select \">\n                                          <div class=\"head_flt_select align-items-center d-flex h-100\">\n                                              <label>Date of Transaction:</label>\n                                          </div>\n                                      </div>\n                                      <div class=\"head_flt_select\">\n                                          <div class=\"head_flt_select input-label\">\n                                              <span class=\"d-flex align-items-center\">From</span>\n                                              <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                          </div>\n                                      </div>\n                                      <div class=\"head_flt_select\">\n                                          <div class=\"head_flt_select input-label\">\n                                              <span class=\"d-flex align-items-center\">To</span>\n                                              <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"col-md-6 col-xl-2\">\n                                  <div class=\"text-left\">\n                                      <button type=\"submit\" class=\"btn  btn-theme\">Search</button>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                              <div class=\"tab-content\">\n                                  <div class=\"tab-pane active show\">\n                                      <div class=\"mb10 mt20 show-txt\">\n                                          <span>Show</span>\n                                          <select name=\"\" class=\"form-control form-control2 select_opt\">\n                                              <option value=\"\" selected=\"\">3</option>\n                                              <option value=\"\">2</option>\n                                              <option value=\"\">1</option>\n                                          </select>\n                                          <span>from all</span>\n                                      </div>\n                                      <div class=\"table-responsive\">\n                                          <table class=\"table table-bordered\">\n                                              <thead>\n                                                  <tr class=\"no_wrap_th\">\n                                                    <th>Sr no.</th>\n                                                      <th>Amount</th>\n                                                      <th>No. of Token</th>\n                                                      <th>Transaction ID</th>\n                                                      <th>Private Key</th>\n                                                      <th>Date</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>sdfdsfds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n\n                                                  </tr>\n                                                 <tr>\n                                                      <td>01</td>\n                                                      <td>sdfsdfds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                     <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n                                                  </tr>\n                                                 <tr>\n                                                      <td>01</td>\n                                                      <td>sdfdsfds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>sdfdsfds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>dfsfdsfds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>dsfdsfds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>fsdfdsfdsf</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n\n\n\n\n                          \n                      </div>\n                  </div>\n                  <div class=\"tab-pane active show\" id=\"tab4\">\n                    <div class=\"tab-pane1\">\n                          <div class=\"custom_tabs common-tabs\">\n                          <div class=\"sec_head_new sec_head_new_after\">\n                            <div class=\"row justify-content-between\">\n                              <div class=\"col-md-6 col-xl-3\">\n                                  <div class=\"filter_search mb20 width100\">\n                                    <div class=\"input-group filter_search_group\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Search by Transaction id\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn_search_group\" type=\"button\"><img src=\"img/icon-search.png\" alt=\"Search\"></button>\n                                        </div>\n                                    </div>\n                                 </div>\n                              </div>\n                              <div class=\"col-md-12 col-xl-7\">\n                                  <div class=\"filter_fields d-inline-flex\">\n                                      <div class=\"head_flt_select \">\n                                          <div class=\"head_flt_select align-items-center d-flex h-100\">\n                                              <label>Date of Transaction:</label>\n                                          </div>\n                                      </div>\n                                      <div class=\"head_flt_select\">\n                                          <div class=\"head_flt_select input-label\">\n                                              <span class=\"d-flex align-items-center\">From</span>\n                                              <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                          </div>\n                                      </div>\n                                      <div class=\"head_flt_select\">\n                                          <div class=\"head_flt_select input-label\">\n                                              <span class=\"d-flex align-items-center\">To</span>\n                                              <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"col-md-6 col-xl-2\">\n                                  <div class=\"text-left\">\n                                      <button type=\"submit\" class=\"btn  btn-theme\">Search</button>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                              <div class=\"tab-content\">\n                                  <div class=\"tab-pane active show\">\n                                      <div class=\"mb10 mt20 show-txt\">\n                                          <span>Show</span>\n                                          <select name=\"\" class=\"form-control form-control2 select_opt\">\n                                              <option value=\"\" selected=\"\">3</option>\n                                              <option value=\"\">2</option>\n                                              <option value=\"\">1</option>\n                                          </select>\n                                          <span>from all</span>\n                                      </div>\n                                      <div class=\"table-responsive\">\n                                          <table class=\"table table-bordered\">\n                                              <thead>\n                                                  <tr class=\"no_wrap_th\">\n                                                    <th>Sr no.</th>\n                                                      <th>Amount</th>\n                                                      <th>No. of Token</th>\n                                                      <th>Transaction ID</th>\n                                                      <th>Private Key</th>\n                                                      <th>Date</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>sdfgvdsgf</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n\n                                                  </tr>\n                                                 <tr>\n                                                      <td>01</td>\n                                                      <td>sdfdsfds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                     <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n                                                  </tr>\n                                                 <tr>\n                                                      <td>01</td>\n                                                      <td>sdfdsfds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>sdfdsfdsf</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                          <button class=\"btn btn-info btn-sm\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                      </td>\n\n\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>dfsfdsfds</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>dsfdsfdsf</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>01</td>\n                                                      <td>dsfdsfdsf</td>\n                                                      <td>4</td>\n                                                      <td>KTY1234</td>\n                                                      <td>dshbcjhTYRUK1056</td>\n                                                      <td>02/01/2018</td>\n                                                      <td>completed</td>\n                                                  </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n\n\n\n\n                          \n                      </div>\n                  </div>\n\n              </div>\n          </div>\n      </div>\n  <!-- Table Responsive End -->\n  </div>\n</main>\n<!--Reject Modal-->\n<div class=\"modal fade global-modal reset-modal\" id=\"rejected\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\">\n            <div class=\"modal-content\">\n                <div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                    <div class=\"modal-body\">\n                        <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                            <div class=\"w-100\">\n                                <p>Are you sure want to Reject this Transaction?</p>\n                                <div>\n                                    <button type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Yes</button>\n                                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!--Payment Modal-->\n<div class=\"modal fade global-modal reset-modal\" id=\"payment\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\">\n            <div class=\"modal-content\">\n                <div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                    <div class=\"modal-body\">\n                        <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                            <div class=\"main-block-innner mb40 mt0\">\n                                <div class=\"add-store-block input-style\">\n                                  <h4 class=\"mb30\">Payment</h4>\n                                    <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Payment Method :</label>\n                                        <div class=\"col-md-6  text-left\">\n                                            <label><input type=\"text\" class=\"form-control\" placeholder=\"Paypal\">\n                                            </label>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Transaction Id :</label>\n                                        <div class=\"col-md-6 text-left\">\n                                            <label>YTHSLSjsjsjsT1010</label>\n                                        </div>\n                                    </div>\n                                     <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Private Key :</label>\n                                        <div class=\"col-md-6 text-left\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"#fdksfjl\">\n                                        </div>\n                                    </div>\n                                     <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Amount :</label>\n                                        <div class=\"col-md-6 text-left\">\n                                            <label>100000000</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">No. of Token :</label>\n                                        <div class=\"col-md-6 text-left\">\n                                            <label>4</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group row align-items-baseline\">\n                                        <label class=\"col-md-6 text-left\">Date :</label>\n                                        <div class=\"col-md-6 text-left\">\n                                            <label>23-08-2018</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"text-left mt40 text-center\">\n                                        <a  class=\"btn btn-large  max-WT-200 font-100 btn-green\"  href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#paysuccess\" data-dismiss=\"modal\">Pay</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!--Payment Success Modal-->\n<div class=\"modal fade global-modal reset-modal\" id=\"paysuccess\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\">\n            <div class=\"modal-content\">\n                <div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                    <div class=\"modal-body\">\n                        <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                            <div class=\"w-100\">\n                                <p>Your Payment has been done!</p>\n                                <div>\n                                    <button type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">OK</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionComponent = /** @class */ (function () {
    function TransactionComponent() {
    }
    TransactionComponent.prototype.ngOnInit = function () {
    };
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__("./src/app/pages/transaction/transaction.component.html"),
            styles: [__webpack_require__("./src/app/pages/transaction/transaction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/pages/transactionmanagment/transactionmanagment.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/transactionmanagment/transactionmanagment.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Transaction Details</h1>\n       \n    </div>\n    <!-- Page Title End -->\n    <div class=\"content-section\">\n        <div class=\"outer-box\">\n            <div class=\"custom_tabs common-tabs\">\n                <div class=\"row mb20 justify-content-center\">\n                    <div class=\"col-sm-12\">\n                        <ul class=\"nav nav-tabs d-flex  justify-content-center text-center\">\n                            <li class=\"nav-item flex-fill\">\n                                <a class=\"nav-link\" [ngClass]=\"{'active': tab =='Request'}\" data-toggle=\"tab\" [routerLink]=\"['/transactionmanagment','Request']\" >\n                                  InProgress\n                                </a>\n                            </li>\n                            <li class=\"nav-item flex-fill\">\n                                <a class=\"nav-link\" data-toggle=\"tab\" [ngClass]=\"{'active': tab =='Complete'}\" data-toggle=\"tab\" [routerLink]=\"['/transactionmanagment','Complete']\"> \n                                 Complete\n                                </a>\n                            </li>\n                       </ul>\n                    </div>\n                </div> \n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active show\" [ngClass]=\"{'active': tab =='Request'}\" *ngIf=\"(tab == 'Request')\" id=\"Request\">\n                      <div class=\"tab-pane1\">\n                            <div class=\"custom_tabs common-tabs\">\n                               <div class=\"sec_head_new sec_head_new_after\">\n                            <div class=\"row justify-content-between\">\n                                <div class=\"col-md-12 col-xl-8\">\n                                   <form [formGroup]= 'tab1Form'>\n                                    <div class=\"filter_fields d-inline-flex\">\n                                        <div class=\"head_flt_select\">\n                                            <div class=\"w-100\">\n                                                <span class=\"d-flex align-items-center\">Select The Token Name</span>\n                                                <select name=\"\" class=\"form-control form-control2 select_opt\" formControlName=\"tokenname\" >\n                                                    <option value=\"\" >Select Token</option>\n                                                    <option *ngFor=\"let item of tokenList\" value=\"{{item.tokenName}}\" >{{item.tokenName}}</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div>\n                                                  <span class=\"d-flex align-items-center\">From Date:</span>\n                                                  <my-date-picker name=\"startdate\" formControlName=\"startdate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"onChange($event)\"  placeholder=\"Start Date\" ></my-date-picker>\n                                              </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div>\n                                                <span class=\"d-flex align-items-center\">To Date:</span>\n                                                <my-date-picker name=\"enddate\" [disabled]='beDisable' formControlName=\"enddate\" [options]=\"todate\"  placeholder=\"End Date\" ></my-date-picker>\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                              <span class=\"d-flex align-items-center\">&nbsp;</span>\n                                              <button type=\"submit\" class=\"btn  btn-theme\"  (click)=\"search(tab1Form.value,p1)\">Search</button>\n                                        </div>\n                                    </div>\n                                </form>\n                                </div>\n                              </div>\n                        </div>   \n                                 <div class=\"tab-content\">\n                                    <div class=\"tab-pane active show\">\n                                          <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead>\n                                                        <tr class=\"no_wrap_th\">\n                                                                <th>Sr.No.</th>\n                                                                <th>Amount</th>\n                                                                <th>No. of Token</th>\n                                                                <th>Payment Id</th>\n                                                                <th>Date & Time</th>\n                                                                <th>Action</th>\n                                                        </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let item of transactionList | paginate: { itemsPerPage:transactionDetail.limit , currentPage: p1 , totalItems:transactionDetail.total} let i = index ;\">\n                                                                <td *ngIf=\"p1 == 1\">{{i + 1}}</td>\n                                                                <td *ngIf=\"p1 > 1\">{{i + 1 + transactionDetail.limit * (p1-1)}}</td>\n                                                                <td>{{item.amount}}</td>\n                                                                <td>{{item.numberofToken}}</td>\n                                                                <td>{{item.paymentId}}</td>\n                                                                <td>{{item.createdAt | date: 'MMM d, y, h:mm:ss a'}}</td>\n                                                                <td>                                                            \n                                                                    <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" (click)=\"payment(item._id,item.decimal)\">Payment</button>\n                                                                    <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" (click)=\"reject(item._id)\">Rejected</button>\n                                                                </td>\n                                                            </tr>\n                                                            <tr *ngIf=\"(transactionList == '')\" style=\"font-weight:bold; font-size: 30px;\">No Data Found</tr>\n                                                   <!-- <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsfsd</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                       <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfsd</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfdsff</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfsdfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr> -->\n                                                </tbody>\n                                            </table>\n                                            <pagination-controls  style=\"text-align: center\" *ngIf=\"(transactionDetail.limit < transactionDetail.total)\" (pageChange)=\"search(tab1Form.value,$event)\"></pagination-controls> \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>                         \n                        </div>\n                    </div>\n                    <div class=\"tab-pane active show\" [ngClass]=\"{'active': tab =='Complete'}\" *ngIf=\"(tab == 'Complete')\" id=\"Complete\">\n                      <div class=\"tab-pane1\">\n                            <div class=\"custom_tabs common-tabs\">\n                                <div class=\"sec_head_new sec_head_new_after\">\n                                    <div class=\"row justify-content-between\">\n                                      <form [formGroup]= 'tab2Form'>\n                                        <div class=\"col-md-12 col-xl-8\">\n                                            <div class=\"filter_fields d-inline-flex\">\n                                                <div class=\"head_flt_select \">\n                                                    <div class=\"w-100\">\n                                                        <span class=\"d-flex align-items-center\">Select The Token Name</span>\n                                                        <select name=\"\" class=\"form-control form-control2 select_opt\" formControlName=\"tokenname\" >\n                                                            <option value=\"\" >Select Token</option>\n                                                            <option *ngFor=\"let item of tokenList\" value=\"{{item.tokenName}}\" >{{item.tokenName}}</option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n                                                <div class=\"head_flt_select\">\n                                                    <div>\n                                                          <span class=\"d-flex align-items-center\">From Date:</span>\n                                                          <my-date-picker name=\"startdate\" formControlName=\"startdate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"onChange($event)\"  placeholder=\"Start Date\" ></my-date-picker>\n                                                      </div>\n                                                </div>\n                                                <div class=\"head_flt_select\">\n                                                    <div>\n                                                        <span class=\"d-flex align-items-center\">To Date:</span>\n                                                        <my-date-picker name=\"enddate\" [disabled]='beDisable' formControlName=\"enddate\" [options]=\"todate\"  placeholder=\"End Date\" ></my-date-picker>\n                                                    </div>\n                                                </div>\n                                                <div class=\"head_flt_select\">\n                                                      <span class=\"d-flex align-items-center\">&nbsp;</span>\n                                                      <button type=\"submit\" class=\"btn  btn-theme\"  (click)=\"search(tab2Form.value,p1)\">Search</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                      </form>\n                                    </div>\n                                </div>   \n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active show\">\n                                         <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead>\n                                                    <tr class=\"no_wrap_th\">\n                                                        <th>Sr.No.</th>\n                                                        <th>Amount</th>\n                                                        <th>No. of Token</th>\n                                                        <th>Payment Id</th>\n                                                        <th>Token Name</th>\n                                                        <th>Date & Time</th>\n                                                        <th>Status</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let item of transactionList | paginate: { itemsPerPage:transactionDetail.limit , currentPage: p1 , totalItems:transactionDetail.total } let i = index ;\">\n                                                        <td *ngIf=\"p1 == 1\">{{i + 1}}</td>\n                                                        <td *ngIf=\"p1 > 1\">{{i + 1 + transactionDetail.limit * (p1-1)}}</td>\n                                                        <td>{{item.amount}}</td>\n                                                        <td>{{item.numberofToken}}</td>\n                                                        <td>{{item.paymentId}}</td>\n                                                        <td>{{item.tokenName}}</td>\n                                                        <td>{{item.createdAt | date: 'MMM d, y, h:mm:ss a'}}</td>\n                                                        <td>{{item.action}}</td>\n                                                    </tr>\n                                                    <tr *ngIf=\"(transactionList == '')\" style=\"font-weight:bold; font-size: 30px;\">No Data Found</tr>\n                                                   <!-- <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsfsd</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                       <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfsd</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfdsff</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfsdfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr> -->\n                                                </tbody>\n                                            </table>\n                                            <pagination-controls style=\"text-align: center\" *ngIf=\"(transactionDetail.limit < transactionDetail.total)\" (pageChange)=\"search(tab2Form.value,$event)\"></pagination-controls> \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>                            \n                        </div>\n                    </div>\n                    <!-- <div class=\"tab-pane active show\" id=\"tab3\">\n                      <div class=\"tab-pane1\">\n                            <div class=\"custom_tabs common-tabs\">\n                            <div class=\"sec_head_new sec_head_new_after\">\n                              <div class=\"row justify-content-between\">\n                                <div class=\"col-md-6 col-xl-3\">\n                                    <div class=\"filter_search mb20 width100\">\n                                      <div class=\"input-group filter_search_group\">\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Search by Transaction id\">\n                                          <div class=\"input-group-append\">\n                                              <button class=\"btn btn_search_group\" type=\"button\"><img src=\"img/icon-search.png\" alt=\"Search\"></button>\n                                          </div>\n                                      </div>\n                                   </div>\n                                </div>\n                                <div class=\"col-md-12 col-xl-7\">\n                                    <div class=\"filter_fields d-inline-flex\">\n                                        <div class=\"head_flt_select \">\n                                            <div class=\"head_flt_select align-items-center d-flex h-100\">\n                                                <label>Date of Transaction:</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div class=\"head_flt_select input-label\">\n                                                <span class=\"d-flex align-items-center\">From</span>\n                                                <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div class=\"head_flt_select input-label\">\n                                                <span class=\"d-flex align-items-center\">To</span>\n                                                <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-xl-2\">\n                                    <div class=\"text-left\">\n                                        <button type=\"submit\" class=\"btn  btn-theme\">Search</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active show\">\n                                        <div class=\"mb10 mt20 show-txt\">\n                                            <span>Show</span>\n                                            <select name=\"\" class=\"form-control form-control2 select_opt\">\n                                                <option value=\"\" selected=\"\">3</option>\n                                                <option value=\"\">2</option>\n                                                <option value=\"\">1</option>\n                                            </select>\n                                            <span>from all</span>\n                                        </div>\n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead>\n                                                    <tr class=\"no_wrap_th\">\n                                                      <th>Sr no.</th>\n                                                        <th>Amount</th>\n                                                        <th>No. of Token</th>\n                                                        <th>Transaction ID</th>\n                                                        <th>Private Key</th>\n                                                        <th>Date</th>\n                                                        <th>Action</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>sdfsdfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                       <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dfsfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>fsdfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n\n\n                            \n                        </div>\n                    </div>\n                    <div class=\"tab-pane active show\" id=\"tab4\">\n                      <div class=\"tab-pane1\">\n                            <div class=\"custom_tabs common-tabs\">\n                            <div class=\"sec_head_new sec_head_new_after\">\n                              <div class=\"row justify-content-between\">\n                                <div class=\"col-md-6 col-xl-3\">\n                                    <div class=\"filter_search mb20 width100\">\n                                      <div class=\"input-group filter_search_group\">\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Search by Transaction id\">\n                                          <div class=\"input-group-append\">\n                                              <button class=\"btn btn_search_group\" type=\"button\"><img src=\"img/icon-search.png\" alt=\"Search\"></button>\n                                          </div>\n                                      </div>\n                                   </div>\n                                </div>\n                                <div class=\"col-md-12 col-xl-7\">\n                                    <div class=\"filter_fields d-inline-flex\">\n                                        <div class=\"head_flt_select \">\n                                            <div class=\"head_flt_select align-items-center d-flex h-100\">\n                                                <label>Date of Transaction:</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div class=\"head_flt_select input-label\">\n                                                <span class=\"d-flex align-items-center\">From</span>\n                                                <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div class=\"head_flt_select input-label\">\n                                                <span class=\"d-flex align-items-center\">To</span>\n                                                <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-xl-2\">\n                                    <div class=\"text-left\">\n                                        <button type=\"submit\" class=\"btn  btn-theme\">Search</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active show\">\n                                        <div class=\"mb10 mt20 show-txt\">\n                                            <span>Show</span>\n                                            <select name=\"\" class=\"form-control form-control2 select_opt\">\n                                                <option value=\"\" selected=\"\">3</option>\n                                                <option value=\"\">2</option>\n                                                <option value=\"\">1</option>\n                                            </select>\n                                            <span>from all</span>\n                                        </div>\n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead>\n                                                    <tr class=\"no_wrap_th\">\n                                                      <th>Sr no.</th>\n                                                        <th>Amount</th>\n                                                        <th>No. of Token</th>\n                                                        <th>Transaction ID</th>\n                                                        <th>Private Key</th>\n                                                        <th>Date</th>\n                                                        <th>Action</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfgvdsgf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                       <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dfsfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n\n\n                            \n                        </div>\n                    </div> -->\n                </div>\n            </div>\n        </div>\n    <!-- Table Responsive End -->\n    </div>\n</main>\n<!--Reject Modal-->\n<div class=\"modal fade global-modal reset-modal\" id=\"rejected\">\n        <div class=\"modal-dialog max-WT-500\">\n            <form class=\"change_password\">\n                <div class=\"modal-content\">\n                    <div>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n    \n                        <div class=\"modal-body\">\n                            <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                                <div class=\"w-100\">\n                                    <p>Are you sure want to Reject this Transaction?</p>\n                                    <div>\n                                        <button type=\"submit\" class=\"btn btn-success\" (click)=\"confirmreject()\">Yes</button>\n                                        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <!--Payment Modal-->\n    <div class=\"modal fade global-modal reset-modal\" id=\"payment\">\n        <div class=\"modal-dialog max-WT-500\">\n            <form class=\"change_password\">\n                <div class=\"modal-content\">\n                    <div>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n    \n                        <div class=\"modal-body\">\n                            <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                                <div class=\"main-block-innner mb40 mt0\">\n                                    <div class=\"add-store-block input-style\">\n                                      <h4 class=\"mb30\">Payment</h4>\n                                        <div class=\"form-group row align-items-baseline\">\n                                            <label class=\"col-md-6 text-left\">Payment Method :</label>\n                                            <div class=\"col-md-6  text-left\">\n                                                <label>PayPal\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row align-items-baseline\">\n                                            <label class=\"col-md-6 text-left\">Payment Id :</label>\n                                            <div class=\"col-md-6 text-left\">\n                                                <label>{{payData.paymentId}}</label>\n                                            </div>\n                                        </div>\n                                         <!-- <div class=\"form-group row align-items-baseline\">\n                                            <label class=\"col-md-6 text-left\">Private Key :</label>\n                                            <div class=\"col-md-6 text-left\">\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"#fdksfjl\">\n                                            </div>\n                                        </div> -->\n                                         <div class=\"form-group row align-items-baseline\">\n                                            <label class=\"col-md-6 text-left\">Amount :</label>\n                                            <div class=\"col-md-6 text-left\">\n                                                <label>{{payData.amount}}</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row align-items-baseline\">\n                                            <label class=\"col-md-6 text-left\">No. of Token :</label>\n                                            <div class=\"col-md-6 text-left\">\n                                                <label>{{payData.numberofToken}}</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row align-items-baseline\">\n                                            <label class=\"col-md-6 text-left\">Date :</label>\n                                            <div class=\"col-md-6 text-left\">\n                                                <label>{{payData.createdAt | date: 'yyyy/MM/dd'}}</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"text-left mt40 text-center\">\n                                            <a  class=\"btn btn-large  max-WT-200 font-100 btn-green\"  href=\"javascript:;\" (click)=\"pay()\" data-dismiss=\"modal\">Pay</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <!--Payment Success Modal-->\n    <div class=\"modal fade global-modal reset-modal\" id=\"paysuccess\">\n        <div class=\"modal-dialog max-WT-500\">\n            <form class=\"change_password\">\n                <div class=\"modal-content\">\n                    <div>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n    \n                        <div class=\"modal-body\">\n                            <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                                <div class=\"w-100\">\n                                    <h3>Your Payment Hash</h3>\n                                    <p style=\"word-wrap: break-word\">{{hash}}</p>\n                                    <div>\n                                        <button type=\"submit\" class=\"btn btn-success\" (click)=\"update()\">OK</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/pages/transactionmanagment/transactionmanagment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionmanagmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionmanagmentComponent = /** @class */ (function () {
    function TransactionmanagmentComponent(route, routes, service) {
        this.route = route;
        this.routes = routes;
        this.service = service;
        this.beDisable = true;
        this.p1 = 1;
        this.transactionDetail = {};
        this.transactionList = [];
        this.payData = {};
        this.data = {};
        /**************** Date managing***************/
        this.myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            editableDateField: false,
            openSelectorOnInputClick: false,
            disableSince: { year: 0, month: 0, day: 0 }
        };
        this.toDate = {
            dateFormat: 'yyyy-mm-dd',
            editableDateField: false,
            openSelectorOnInputClick: false,
            disableUntil: { year: 0, month: 0, day: 0 }
        };
        /**********Form Validation*************/
        this.tab1Form = new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormGroup"]({
            tokenname: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["Validators"].required]),
            startdate: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["Validators"].required]),
            enddate: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["Validators"].required]),
        });
        this.tab2Form = new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormGroup"]({
            tokenname: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["Validators"].required]),
            startdate: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["Validators"].required]),
            enddate: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["Validators"].required]),
        });
    }
    TransactionmanagmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // console.log('params=>'+JSON.stringify(params));
            _this.tab = params['tab'];
            _this.tokenListApi();
            _this.search('', _this.p1);
            _this.onDateChanged();
        });
    };
    TransactionmanagmentComponent.prototype.onDateChanged = function () {
        var d = new Date();
        var copy1 = this.getCopyOfOptions();
        copy1.disableSince = { year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate() };
        this.myDatePickerOptions = copy1;
    };
    //Returns copy of myDatePickerOptions
    TransactionmanagmentComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptions));
    };
    TransactionmanagmentComponent.prototype.onChange = function (event) {
        // console.log(this.transantionForm.value)
        // console.log(event)
        if (event.formatted) {
            this.beDisable = false;
            var d = new Date(event.jsdate.getTime());
            d.setDate(d.getDate() - 1);
            var copy = this.getCopyOfToDateOpt();
            copy.disableUntil = { year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDate()
            };
            this.toDate = copy;
        }
        else {
            this.beDisable = true;
            this.tab1Form.patchValue({
                'to': null,
                'from': null
            });
        }
    };
    TransactionmanagmentComponent.prototype.getCopyOfToDateOpt = function () {
        return JSON.parse(JSON.stringify(this.toDate));
    };
    /*******************Date managing Ends Here**************/
    /*******************Filter***********/
    TransactionmanagmentComponent.prototype.search = function (val, page) {
        var _this = this;
        // console.log("Page Value==>",page);
        this.p1 = page;
        this.data = val;
        //  console.log("Form Value==>",this.data);
        if (this.tab == 'Request') {
            var status = 'Request';
        }
        else {
            var status = 'Complete';
        }
        var userData = {
            "tokenName": this.data.tokenname ? this.data.tokenname : null,
            "action": status,
            "fromDate": this.data.startdate ? Number(this.data.startdate.jsdate.getTime()) : null,
            "toDate": this.data.enddate ? Number(this.data.enddate.jsdate.getTime()) : null,
            'page': this.p1
        };
        // console.log("Data==> ",JSON.stringify(userData));
        this.service.spinnerShow();
        this.service.postApi("/admin/transactionDetails", userData, 1).subscribe(function (response) {
            // console.log(JSON.stringify(response))
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                if (_this.tab == 'Request') {
                    _this.tab1Form.reset();
                    _this.transactionDetail = response.body.data;
                    _this.transactionList = _this.transactionDetail.docs;
                    // console.log(`succces`,this.transactionList);
                }
                else {
                    _this.tab2Form.reset();
                    _this.transactionDetail = response.body.data;
                    _this.transactionList = _this.transactionDetail.docs;
                    // console.log(`succces`,this.transactionList);
                }
            }
            else {
                _this.service.toastrErr("Something went wrong");
            }
        }, function (error) {
            _this.service.toastrErr('Something went wrong');
            _this.service.spinnerHide();
            // console.log(`Error`)
        });
    };
    /***************TokenListApi**************/
    TransactionmanagmentComponent.prototype.tokenListApi = function () {
        var _this = this;
        var tokenData = {
            "tokenName": ''
        };
        // console.log("Search Token==> ",JSON.stringify(tokenData));
        this.service.spinnerShow();
        this.service.postApi("/user/searchListToken", tokenData, 1).subscribe(function (response) {
            //console.log(JSON.stringify(response))
            if (response.body.responseCode == 200) {
                _this.service.spinnerHide();
                _this.tokenDetail = response.body.data;
                _this.tokenList = _this.tokenDetail.docs;
                //  console.log("Token List ====>>  ",this.tokenList)         
            }
            else {
                _this.service.spinnerHide();
                _this.service.toastrErr("Something went wrong");
            }
        }, function (error) {
            ///this.service.toastrErr(JSON.stringify(error));
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    /**************Payment****************/
    TransactionmanagmentComponent.prototype.payment = function (id, deci) {
        var _this = this;
        this.id = id;
        this.deci = deci;
        // console.log("id====>> ",this.deci);
        var paymentData = {
            "_id": this.id
        };
        // console.log("DAta==> ",JSON.stringify(paymentData));
        this.service.spinnerShow();
        this.service.postApi("/admin/payInfo", paymentData, 1).subscribe(function (response) {
            // console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                //this.service.toastrSucc(response.body.responseMessage);
                $('#payment').modal({ backdrop: 'static' });
                _this.payData = response.body.data;
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    /**********pay Function*************/
    TransactionmanagmentComponent.prototype.pay = function () {
        var _this = this;
        var paymentData = {
            "_id_tokenPurchase": this.id,
            "tokenName": this.payData.tokenName,
            "toAddress": this.payData.userWalletAddress,
            "amount": this.payData.numberofToken,
            "tokenAddress": this.payData.tokenAddress,
            "decimal": 2
        };
        // console.log("DAta==> ",JSON.stringify(paymentData));
        this.service.spinnerShow();
        this.service.postApi("/admin/payToken", paymentData, 1).subscribe(function (response) {
            console.log(response);
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                //this.service.toastrSucc(response.body.responseMessage);
                _this.hash = response.body.data;
                $('#payment').modal('hide');
                $('#paysuccess').modal({ backdrop: 'static' });
                _this.search('', _this.p1);
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    TransactionmanagmentComponent.prototype.update = function () {
        $('#paysuccess').modal('hide');
        this.search('', this.p1);
    };
    /************Reject***************/
    TransactionmanagmentComponent.prototype.reject = function (id) {
        this.id = id;
        // console.log("id====>> ",id);
        $('#rejected').modal({ backdrop: 'static' });
    };
    /************ Confirm Reject***************/
    TransactionmanagmentComponent.prototype.confirmreject = function () {
        var _this = this;
        var rejectData = {
            "_id_tokenPurchase": this.id
        };
        // console.log("DAta==> ",JSON.stringify(rejectData));
        this.service.spinnerShow();
        this.service.postApi("/admin/rejectRequest", rejectData, 1).subscribe(function (response) {
            // console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                //this.service.toastrSucc(response.body.responseMessage);
                $('#rejected').modal('hide');
                _this.search('', _this.p1);
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    TransactionmanagmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transactionmanagment',
            template: __webpack_require__("./src/app/pages/transactionmanagment/transactionmanagment.component.html"),
            styles: [__webpack_require__("./src/app/pages/transactionmanagment/transactionmanagment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */]])
    ], TransactionmanagmentComponent);
    return TransactionmanagmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/usermanagment/usermanagment.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/usermanagment/usermanagment.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">User Management</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n\n              <li class=\"breadcrumb-item active\">User Management</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <div class=\"outer-box\">\n          <!-- Gloabl Table Box Start -->\n          <div class=\"global-table no-radius p0\">\n              <div class=\"tab-content1\">\n                  <div class=\"tab-pane1\">\n                      <div class=\"sec_head_new sec_head_new_after\">\n                        <form [formGroup]= 'userForm'>\n                          <div class=\"row justify-content-between\">\n                              <div class=\"col-md-12 col-xl-7\">\n                                 <div class=\"filter_fields d-inline-flex align-items-center\">\n                                     <div class=\"head_flt_select \">\n                                          <div class=\"head_flt_select align-items-center d-flex h-100\">\n                                              <label class=\"minwt130 mt30\">Registration Date :</label>\n                                        </div>\n                                      </div>\n                                      \n                                      <div class=\"head_flt_select\">\n                                          <div class=\"\">\n                                              <label class=\"d-flex align-items-left\">From</label>\n                                              <my-date-picker name=\"startdate\" formControlName=\"startdate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"onChange($event)\" placeholder=\"start Date\" ></my-date-picker>\n                                            </div>\n                                      </div>\n                                      <div class=\"head_flt_select\">\n                                          <div class=\"\">\n                                              <label class=\"d-flex align-items-left\">To</label>\n                                              <my-date-picker name=\"enddate\" [disabled]='beDisable' formControlName=\"enddate\" [options]=\"toDate\"  placeholder=\"End Date\" ></my-date-picker>\n                                          </div>\n                                      </div>\n                                      <div class=\"head_flt_select\">\n                                            <div class=\"head_flt_select w-100 mt30\">\n                                                <span>&nbsp;</span>\n                                                    <button type=\"button\" class=\"btn  btn-theme\" [disabled]=\"!userForm.valid\" (click)=\"search(userForm.value,p1)\">Search</button>\n                                            </div>\n                                        </div>\n                                    \n                                  </div>\n                              </div>\n                           \n                            \n                          </div>\n                        </form>\n                      </div>\n                     \n                      <div class=\"table-responsive\">\n                          <table class=\"table table-bordered\">\n                              <thead>\n                                  <tr class=\"no_wrap_th\">\n                                    <th>Sr. No</th>\n                                      <th>Private Key</th>\n                                      <th>Registeration Date & Time</th>\n                                      <th class=\"action_td_btn3\">Action</th>\n                                  </tr>\n                              </thead>\n                              <tbody>\n                                  <tr  *ngFor=\"let item of userdetail | paginate: { itemsPerPage:user.limit , currentPage: p1 , totalItems:user.total } ; let i = index\">\n                                      <td *ngIf=\"p1 == 1\">{{i + 1}}</td>\n                                      <td *ngIf=\"p1 > 1\">{{i + 1 + user.limit * (p1-1)}}</td>\n                                      <td>{{item.privateKey}}</td>\n                                      <td>{{item.createdAt | date: 'MMM d, y, h:mm:ss a'}}</td>\n\n                                      <td class=\"action_td_btn3\">\n                                         <button type=\"button\" class=\"btn btn-danger btn-sm\" data-toggle=\"modal\" (click)=\"change(item._id)\">Change Password</button>\n                                         <button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" (click)='sweepModal(item._id)'>Sweep</button>\n                                          <button type=\"button\"  class=\"btn btn-info btn-sm\" *ngIf=\"item.status == 'ACTIVE'\" data-toggle=\"modal\" (click)='getuserid(item._id)'>Block</button>\n                                          <button  type=\"button\"  class=\"btn btn-info btn-sm\" *ngIf=\"item.status == 'BLOCKED'\" data-toggle=\"modal\" (click)='getid(item._id)'>Unblock</button>\n                                          <button   type=\"button\" class=\"btn btn-info btn-sm\" [routerLink]=\"['/wallet','sent']\">Wallet</button>\n                                          <button type=\"button\" class=\"btn btn-info btn-sm\" [routerLink]=\"['/transactionmanagment','Request']\">Transaction</button>\n\n                                      </td>\n                                  </tr>\n                         \n                              </tbody>\n                          </table>\n                          <h3 *ngIf = \"(userdetail == '')\">No User Found</h3>\n                          <pagination-controls style=\"text-align: center\"  *ngIf = '(user.limit < user.total)' (pageChange)=\"search(userForm.value,$event)\" ></pagination-controls> \n                      </div>\n                 </div>\n\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Table Responsive End -->\n</main>\n<!-- Block Modal -->\n<div class=\"modal fade global-modal reset-modal\" id=\"block\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\">\n            <div class=\"modal-content\">\n                <div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                    <div class=\"modal-body\">\n                        <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                            <div class=\"w-100\">\n                                <p>Are you sure want to block this user?</p>\n                                <div>\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"block()\">Yes</button>\n                                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!--UnBlock Modal -->\n<div class=\"modal fade global-modal reset-modal\" id=\"unblock\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\">\n            <div class=\"modal-content\">\n                <div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                    <div class=\"modal-body\">\n                        <div class=\"text-center modal_flax_height d-flex align-items-center justify-content-center\">\n                            <div class=\"w-100\">\n                                <p>Are you sure want to Unblock this user?</p>\n                                <div>\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"unblock()\">Yes</button>\n                                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<!-- Change Password Modal -->\n<div class=\"modal fade global-modal reset-modal\" id=\"changepassword\">\n        <div class=\"modal-dialog max-WT-500\">\n                    <form class=\"change_password\" [formGroup]= 'changeForm'>\n                          <div>\n                               <div class=\"modal-content\">\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                    <div class=\"modal-body\">\n                                        <div class=\"form-group row align-items-center\">\n                                            <label class=\"col-md-4\">New Password</label>\n                                            <div class=\"col-md-8\">\n                                                <input type=\"password\" formControlName=\"password\" maxlength=\"16\"  class=\"form-control form-control2\">\n                                                <p  *ngIf=\"changeForm.get('password').hasError('required') &&  changeForm.get('password').dirty\" style=\"color:red\"  padding>*Password field can not be empty</p>\n                                                <p  *ngIf=\"changeForm.get('password').hasError('minlength') &&  changeForm.get('password').dirty\" style=\"color:red\"  padding>*Password Should be in between 8-16 character</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row align-items-center\">\n                                            <label class=\"col-md-4\">Confirm Password</label>\n                                            <div class=\"col-md-8\">\n                                                <input type=\"password\" formControlName=\"confirmpassword\" class=\"form-control form-control2\">\n                                                <p *ngIf=\"(changeForm.get('password').value != changeForm.get('confirmpassword').value) && changeForm.get('confirmpassword').value!= '' && changeForm.get('confirmpassword').dirty\" style=\"color:red\"  padding>*Confirm Password does not match with Password</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"text-center mt40\">\n                                            <button  type=\"button\"  class=\"btn btn-large  max-WT-150 font-100 btn-green\" [disabled]=\"!changeForm.valid|| (changeForm.get('password').value != changeForm.get('confirmpassword').value)\" (click)=\"changepasswordApi(changeForm.value)\">Change Password</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                  \n        </div>\n    </div> \n<!-- Sweep Modal -->\n<div class=\"modal fade global-modal reset-modal\" id=\"sweep\">\n            <div class=\"modal-dialog max-WT-500\">\n                <form class=\"change_password\">\n                    <div class=\"modal-content\">\n                    <div>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n                                    <div class=\"main-block-innner mb40 mt40\">\n                                       <div class=\"add-store-block input-style\" >\n                                           <p>PDF</p>\n                                           <div class=\"form-group row \">\n                                               <div class=\"col-md-6 text-center h_key\">\n                                                 <label class=\"attachment-label\"><qr-code [value]=\"privateKey\" [size]=\"150\"></qr-code> </label>\n                                                  <label class=\"attachment-label\">Private Key</label>\n                                                  <div class=\"input-group filter_search_group\">\n                                                       <input type=\"text\" class=\"form-control text-center\" [(ngModel)]=\"privateKey\" [ngModelOptions]=\"{standalone: true}\"  disabled>\n                                                   </div>\n                                               </div>\n                                               <div class=\"col-md-6 text-center h_key\">\n                                                 <label class=\"attachment-label\"> <qr-code [value]=\"address\"  [size]=\"150\"></qr-code></label>\n                                                  <label class=\"attachment-label\">Public Key</label>\n                                                  <div class=\"input-group filter_search_group\">\n                                                       <input type=\"text\" class=\"form-control text-center\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\" disabled>\n                                                   </div>\n                                               </div>\n                                           </div>\n                                       </div>\n                                       \n                                       <div class=\"form-group row align-items-center mt40\">\n                                               <label class=\"col-md-12 d-flex align-items-center\">\n                                                   <h5>Download pdf</h5>                                     \n                                                   <label class=\"attachment-label ml20 pdf_font\"> \n                                                       <i class=\"fa fa-download\" aria-hidden=\"true\"  (click)=\"download()\"></i>\n                                                   </label>\n                                               </label>\n                                           </div>\n                                           <div class=\"text-center mt40\">\n                                             <button href=\"javascript:;\"  type=\"button\" class=\"btn btn-green max-WT-170\" data-dismiss=\"modal\" [routerLink]=\"['/user']\" >Ok</button>\n                                           </div>\n                                       </div>\n                                   </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div> "

/***/ }),

/***/ "./src/app/pages/usermanagment/usermanagment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsermanagmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsermanagmentComponent = /** @class */ (function () {
    function UsermanagmentComponent(service, routes) {
        this.service = service;
        this.routes = routes;
        this.userdetail = [];
        this.p1 = 1;
        this.user = {};
        this.beDisable = true;
        /**************** Date managing***************/
        this.myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            editableDateField: false,
            openSelectorOnInputClick: false,
            disableSince: { year: 0, month: 0, day: 0 }
        };
        this.toDate = {
            dateFormat: 'yyyy-mm-dd',
            editableDateField: false,
            openSelectorOnInputClick: false,
            disableUntil: { year: 0, month: 0, day: 0 }
        };
        /***********Form *************/
        this.userForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            startdate: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required]),
            enddate: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required]),
        });
        this.changeForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            password: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].minLength(8)]),
            confirmpassword: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].minLength(8)]),
        });
    }
    UsermanagmentComponent.prototype.ngOnInit = function () {
        this.adminid = localStorage.id;
        this.onDateChanged();
        this.search('', 1);
        //console.log("Block Val==>> ",this.blockval);
    };
    UsermanagmentComponent.prototype.onDateChanged = function () {
        var d = new Date();
        var copy1 = this.getCopyOfOptions();
        copy1.disableSince = { year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate() };
        this.myDatePickerOptions = copy1;
    };
    //Returns copy of myDatePickerOptions
    UsermanagmentComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptions));
    };
    UsermanagmentComponent.prototype.onChange = function (event) {
        // console.log(this.transantionForm.value)
        // console.log(event)
        if (event.formatted) {
            this.beDisable = false;
            var d = new Date(event.jsdate.getTime());
            d.setDate(d.getDate() - 1);
            var copy = this.getCopyOfToDateOpt();
            copy.disableUntil = { year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDate()
            };
            this.toDate = copy;
        }
        else {
            this.beDisable = true;
            // this.filter(3)
            this.userForm.patchValue({
                'to': null,
                'from': null
            });
        }
    };
    UsermanagmentComponent.prototype.getCopyOfToDateOpt = function () {
        return JSON.parse(JSON.stringify(this.toDate));
    };
    /*******************Date managing Ends Here**************/
    /***************Search Filter*************/
    UsermanagmentComponent.prototype.search = function (data, page) {
        var _this = this;
        this.p1 = page;
        //console.log("Page Value",data);
        var userData = {
            "fromDate": data.startdate ? data.startdate.jsdate.getTime() : null,
            "toDate": data.startdate ? data.enddate.jsdate.getTime() : null,
            'page': this.p1
        };
        //console.log("userdata==> ",JSON.stringify(userData));
        this.service.spinnerShow();
        this.service.postApi("/admin/userManagement", userData, 1).subscribe(function (response) {
            //console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                // this.service.toastrSucc(response.body.responseMessage);
                _this.user = response.body.data;
                _this.userdetail = _this.user.docs;
                //console.log("data===> ",this.user);
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
                //console.log(`Something went wrong`);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr('Something went wrong');
        });
    };
    /****************Change Password Api**************/
    UsermanagmentComponent.prototype.change = function (id) {
        this.userid = id;
        //console.log("user id==>",this.userid);
        $('#changepassword').modal({ backdrop: 'static' });
    };
    UsermanagmentComponent.prototype.changepasswordApi = function (data) {
        var _this = this;
        var change = {
            "newPassword": data.password,
            "userId": this.userid,
            "_id": this.adminid
        };
        //console.log("DAta==> ",JSON.stringify(change));
        this.service.spinnerShow();
        this.service.postApi("/admin/changePasswordOfUser", change, 1).subscribe(function (response) {
            // console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                //this.service.toastrSucc(response.body.responseMessage);
                $('#changepassword').modal('hide');
                _this.changeForm.reset();
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
                $('#changepassword').modal('hide');
                _this.changeForm.reset();
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr(error);
            $('#changepassword').modal('hide');
            _this.changeForm.reset();
        });
    };
    /*****************Sweep***************/
    UsermanagmentComponent.prototype.sweepModal = function (id) {
        var _this = this;
        this.userid = id;
        //console.log("user id==>",this.userid);
        var sweep = {
            "userId": this.userid,
            "_id": this.adminid
        };
        //console.log("DAta==> ",JSON.stringify(sweep));
        this.service.spinnerShow();
        this.service.postApi("/admin/sweepPaperWallet", sweep, 1).subscribe(function (response) {
            //console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                // this.service.toastrSucc(response.body.responseMessage);
                var sweepData = response.body.data;
                _this.privateKey = sweepData.privateKey;
                _this.address = sweepData.address;
                // console.log('sweep Data == > ',JSON.stringify(sweepData));
                // console.log('Private Key==>',this.privateKey);
                // console.log('address==> ',this.address);
                $('#sweep').modal({ backdrop: 'static' });
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr('Something went wrong');
        });
    };
    UsermanagmentComponent.prototype.download = function () {
        //window.print();
        //console.log("Save Pdf");
        var doc = new __WEBPACK_IMPORTED_MODULE_4_jspdf__();
        doc.addHTML(document.getElementById("sweep"), function () {
            doc.save("Sweepdata.pdf");
        });
    };
    /******************Block & Unblock **************/
    UsermanagmentComponent.prototype.getuserid = function (id) {
        this.userid = id;
        // this.ind = index;
        $('#block').modal({ backdrop: 'static' });
    };
    UsermanagmentComponent.prototype.getid = function (id) {
        this.userid = id;
        // this.ind = index;
        // console.log("Index=>>" ,index);
        $('#unblock').modal({ backdrop: 'static' });
    };
    UsermanagmentComponent.prototype.block = function () {
        var _this = this;
        var blockdata = {
            "userId": this.userid,
            "_id": this.adminid,
            "status": "BLOCKED"
        };
        // console.log("Data==> ",JSON.stringify(blockdata));
        this.service.spinnerShow();
        this.service.postApi("/admin/blockUserByAdmin", blockdata, 1).subscribe(function (response) {
            // console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                //this.service.toastrSucc(response.body.responseMessage);
                //  this.status = response.body.data.status;
                $('#block').modal('hide');
                _this.search(_this.userForm.value, _this.p1);
                // this.blockval = this.ind; 
                // console.log("bbb==>",this.blockval) ;
                // console.log("ind==> ",this.ind)   ;   
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
                $('#block').modal('hide');
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr('Something went wrong');
            $('#block').modal('hide');
        });
    };
    UsermanagmentComponent.prototype.unblock = function () {
        var _this = this;
        var blockdata = {
            "userId": this.userid,
            "_id": this.adminid,
            "status": "ACTIVE"
        };
        //console.log("Data==> ",JSON.stringify(blockdata));
        this.service.spinnerShow();
        this.service.postApi("/admin/blockUserByAdmin", blockdata, 1).subscribe(function (response) {
            // console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                //this.service.toastrSucc(response.body.responseMessage);
                // this.status = response.body.data.status;
                $('#unblock').modal('hide');
                _this.search(_this.userForm.value, _this.p1);
                /* this.blockval = 1;
                console.log("bbb==>",this.blockval) ;
                console.log("ind==> ",this.ind)   ;   */
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
                $('#unblock').modal('hide');
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr('Something went wrong');
            $('#unblock').modal('hide');
        });
    };
    UsermanagmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usermanagment',
            template: __webpack_require__("./src/app/pages/usermanagment/usermanagment.component.html"),
            styles: [__webpack_require__("./src/app/pages/usermanagment/usermanagment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["c" /* Router */]])
    ], UsermanagmentComponent);
    return UsermanagmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/viewfee/viewfee.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/viewfee/viewfee.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Withdrawl Fee</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"dashboard.html\">Dashboard </a></li>\n              <li class=\"breadcrumb-item\"><a href=\"profile.html\">Profile </a></li>\n              <li class=\"breadcrumb-item active\">Change Password</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <form class=\"login_box_outer\" >\n          <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n              <div class=\"main-block-innner mb40 mt40\">\n                  <div class=\"add-store-block input-style\">\n                      <div class=\"form-group row align-items-center\">\n                          <label class=\"col-md-6\">Kit Token Withdrawl Fee</label>\n                          <div class=\"col-md-6\">\n                              <input type=\"email\" class=\"form-control form-control2\">\n                          </div>\n                      </div>\n                      <div class=\"form-group button-box mt30 text-center\">\n                        <a  class=\"btn btn-green max-WT-100 mb10\" [routerLink]=\"['/static']\">Save</a>\n                        <a  class=\"btn btn-gray max-WT-100 mb10 mL10\" [routerLink]=\"['/static']\"> Cancel</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </form>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/pages/viewfee/viewfee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewfeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewfeeComponent = /** @class */ (function () {
    function ViewfeeComponent() {
    }
    ViewfeeComponent.prototype.ngOnInit = function () {
    };
    ViewfeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewfee',
            template: __webpack_require__("./src/app/pages/viewfee/viewfee.component.html"),
            styles: [__webpack_require__("./src/app/pages/viewfee/viewfee.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewfeeComponent);
    return ViewfeeComponent;
}());



/***/ }),

/***/ "./src/app/pages/wallet-managment/wallet-managment.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/wallet-managment/wallet-managment.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Wallet Details</h1>\n       \n    </div>\n    <!-- Page Title End -->\n    <div class=\"content-section\">\n        <div class=\"outer-box\">\n            <div class=\"custom_tabs common-tabs\">\n                <div class=\"row mb20 justify-content-center\">\n                    <div class=\"col-sm-12\">\n                        <ul class=\"nav nav-tabs d-flex  justify-content-center text-center\">\n                            <li class=\"nav-item flex-fill\">\n                                <a class=\"nav-link\" [ngClass]=\"{'active': tab =='sent'}\" data-toggle=\"tab\" [routerLink]=\"['/wallet','sent']\" >\n                                  SENT\n                                </a>\n                            </li>\n                            <li class=\"nav-item flex-fill\">\n                                <a class=\"nav-link\" data-toggle=\"tab\" [ngClass]=\"{'active': tab =='receive'}\" data-toggle=\"tab\" [routerLink]=\"['/wallet','receive']\"> \n                                    RECEIVE\n                                </a>\n                            </li>\n                       </ul>\n                    </div>\n                </div> \n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active show\" [ngClass]=\"{'active': tab =='sent'}\" *ngIf=\"(tab == 'sent')\" id=\"sent\">\n                      <div class=\"tab-pane1\">\n                            <div class=\"custom_tabs common-tabs\">\n                               <div class=\"sec_head_new sec_head_new_after\">\n                            <div class=\"row justify-content-between\">\n                              <form [formGroup]= 'token1Form'>\n                                <div class=\"col-md-12 col-xl-8\">\n                                    <div class=\"filter_fields d-inline-flex align-items-center\">\n                                        <div class=\"head_flt_select \">\n                                            <div class=\"w-100 \">\n                                                    <span class=\"d-flex align-items-center\">Select Your Token:</span>\n                                                <select name=\"\" class=\"form-control form-control2 select_opt\" formControlName=\"tokenname\" >\n                                                    <option value=\"\" >Select Token</option>\n                                                    <option *ngFor=\"let item of tokenList\" value=\"{{item.tokenName}}\" >{{item.tokenName}}</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div>\n                                                  <span class=\"d-flex align-items-center\">From Date:</span>\n                                                  <my-date-picker name=\"startdate\" formControlName=\"startdate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"onChange($event)\"  placeholder=\"Start Date\" ></my-date-picker>\n                                              </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div>\n                                                <span class=\"d-flex align-items-center\">To Date:</span>\n                                                <my-date-picker name=\"enddate\" [disabled]='beDisable' formControlName=\"enddate\" [options]=\"todate\"  placeholder=\"End Date\" ></my-date-picker>\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select mt10\">\n                                            <label class=\"mb0\">&nbsp;</label>\n                                              <button type=\"button\" class=\"btn  btn-theme\" [disabled]=\"!token1Form.valid\" (click)=\"search(token1Form.value,p1)\">Search</button>\n                                        </div>\n                                    </div>\n                                </div>\n                              </form>\n                            </div>\n                        </div>   \n                                 <div class=\"tab-content\">\n                                    <div class=\"tab-pane active show\">\n                                          <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead>\n                                                    <tr class=\"no_wrap_th\">\n                                                      <th>Sr No.</th>\n                                                      <th>Token Name</th>\n                                                      <th>Transaction Id</th>\n                                                      <th>Date & Time</th>\n                                                      <th>Address </th>\n                                                      <th>Status</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let item of walletList | paginate: { itemsPerPage:walletDetail.limit , currentPage: p1 , totalItems:walletDetail.total} let i = index;\">\n                                                        <td *ngIf=\"p1 == 1\">{{i + 1}}</td>\n                                                        <td *ngIf=\"p1 > 1\">{{i + 1 + walletDetail.limit * (p1-1)}}</td>\n                                                        <td>{{item.token}}</td>\n                                                        <td>{{item.transactionId}}</td>\n                                                        <td>{{item.transactionDate | date: 'MMM d, y, h:mm:ss a'}}</td>\n                                                        <td>{{item.contractAddress}}</td>\n                                                        <td>{{item.status}}</td>\n                                                        <!-- <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td> -->\n                                                    </tr>\n                                                    <tr *ngIf=\"(walletList == '')\" style=\"font-weight:bold; font-size: 30px;\">No Data Found</tr>\n                                                   <!-- <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsfsd</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                       <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfsd</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfdsff</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfsdfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr> -->\n                                                </tbody>\n                                            </table>\n                                            <pagination-controls style=\"text-align: center\"   *ngIf=\"(walletDetail.limit < walletDetail.total)\" (pageChange)=\"search(token1Form.value,$event)\"></pagination-controls> \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>                         \n                        </div>\n                    </div>\n                    <div class=\"tab-pane active show\" [ngClass]=\"{'active': tab =='receive'}\" *ngIf=\"(tab == 'receive')\" id=\"receive\">\n                      <div class=\"tab-pane1\">\n                            <div class=\"custom_tabs common-tabs\">\n                                <div class=\"sec_head_new sec_head_new_after\">\n                                    <div class=\"row justify-content-between align-items-center\">\n                                      <form [formGroup]= 'token2Form' class=\"w-100\" >\n                                        <div class=\"col-md-12 col-xl-8 w-100\">\n                                            <div class=\"filter_fields d-inline-flex w-100 align-items-center\">\n                                                <div class=\"head_flt_select \">\n                                                    <div class=\"w-100\">\n                                                            <span class=\"d-flex align-items-center\">Select Your Token:</span>\n                                                        <select name=\"\" class=\"form-control form-control2 select_opt\" formControlName=\"tokenname\" >\n                                                            <option value=\"\" >Select Token</option>\n                                                            <option *ngFor=\"let item of tokenList\" value=\"{{item.tokenName}}\" >{{item.tokenName}}</option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n                                                <div class=\"head_flt_select\">\n                                                    <div>\n                                                          <span class=\"d-flex align-items-center\">From Date:</span>\n                                                          <my-date-picker name=\"startdate\" formControlName=\"startdate\" [options]=\"myDatePickerOptions\" (dateChanged)=\"onChange($event)\"  placeholder=\"Start Date\" ></my-date-picker>\n                                                      </div>\n                                                </div>\n                                                <div class=\"head_flt_select\">\n                                                    <div>\n                                                        <span class=\"d-flex align-items-center\">To Date:</span>\n                                                        <my-date-picker name=\"enddate\" [disabled]='beDisable' formControlName=\"enddate\" [options]=\"todate\"  placeholder=\"End Date\" ></my-date-picker>\n                                                    </div>\n                                                </div>\n                                                <div class=\"head_flt_select mt10\">\n                                                    <label class=\"mb0\">&nbsp;</label>\n                                                      <button type=\"button\" class=\"btn  btn-theme\" [disabled]=\"!token2Form.valid\" (click)=\"search(token2Form.value,p1)\">Search</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                      </form>\n                                    </div>\n                                </div>   \n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active show\">\n                                         <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead>\n                                                    <tr class=\"no_wrap_th\">\n                                                        <th>Sr No.</th>\n                                                        <th>Token Name</th>\n                                                        <th>Transaction Id</th>\n                                                        <th>Date & Time</th>\n                                                        <th>Address </th>\n                                                        <th>Status</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let item of walletList | paginate: { itemsPerPage:walletDetail.limit , currentPage: p1 , totalItems:walletDetail.total} let i = index ;\">\n                                                        <td *ngIf=\"p1 == 1\">{{i + 1}}</td>\n                                                        <td *ngIf=\"p1 > 1\">{{i + 1 + walletDetail.limit * (p1-1)}}</td>\n                                                        <td>{{item.token}}</td>\n                                                        <td>{{item.transactionId}}</td>\n                                                        <td>{{item.transactionDate | date: 'MMM d, y, h:mm:ss a'}}</td>\n                                                        <td>{{item.contractAddress}}</td>\n                                                        <td>{{item.status}}</td>\n                                                        <!-- <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td> -->\n                                                    </tr>\n                                                    <tr *ngIf=\"(walletList == '')\" style=\"font-weight:bold; font-size: 30px;\">No Data Found</tr>\n                                                   <!-- <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsfsd</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                       <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfsd</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfdsff</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfsdfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr> -->\n                                                </tbody>\n                                            </table>\n                                            <pagination-controls style=\"text-align: center\" *ngIf=\"(walletDetail.limit < walletDetail.total)\" (pageChange)=\"search(token2Form.value,$event)\"></pagination-controls> \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>                            \n                        </div>\n                    </div>\n                    <!-- <div class=\"tab-pane active show\" id=\"tab3\">\n                      <div class=\"tab-pane1\">\n                            <div class=\"custom_tabs common-tabs\">\n                            <div class=\"sec_head_new sec_head_new_after\">\n                              <div class=\"row justify-content-between\">\n                                <div class=\"col-md-6 col-xl-3\">\n                                    <div class=\"filter_search mb20 width100\">\n                                      <div class=\"input-group filter_search_group\">\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Search by Transaction id\">\n                                          <div class=\"input-group-append\">\n                                              <button class=\"btn btn_search_group\" type=\"button\"><img src=\"img/icon-search.png\" alt=\"Search\"></button>\n                                          </div>\n                                      </div>\n                                   </div>\n                                </div>\n                                <div class=\"col-md-12 col-xl-7\">\n                                    <div class=\"filter_fields d-inline-flex\">\n                                        <div class=\"head_flt_select \">\n                                            <div class=\"head_flt_select align-items-center d-flex h-100\">\n                                                <label>Date of Transaction:</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div class=\"head_flt_select input-label\">\n                                                <span class=\"d-flex align-items-center\">From</span>\n                                                <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div class=\"head_flt_select input-label\">\n                                                <span class=\"d-flex align-items-center\">To</span>\n                                                <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-xl-2\">\n                                    <div class=\"text-left\">\n                                        <button type=\"submit\" class=\"btn  btn-theme\">Search</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active show\">\n                                        <div class=\"mb10 mt20 show-txt\">\n                                            <span>Show</span>\n                                            <select name=\"\" class=\"form-control form-control2 select_opt\">\n                                                <option value=\"\" selected=\"\">3</option>\n                                                <option value=\"\">2</option>\n                                                <option value=\"\">1</option>\n                                            </select>\n                                            <span>from all</span>\n                                        </div>\n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead>\n                                                    <tr class=\"no_wrap_th\">\n                                                      <th>Sr no.</th>\n                                                        <th>Amount</th>\n                                                        <th>No. of Token</th>\n                                                        <th>Transaction ID</th>\n                                                        <th>Private Key</th>\n                                                        <th>Date</th>\n                                                        <th>Action</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>sdfsdfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                       <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dfsfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>fsdfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n\n\n                            \n                        </div>\n                    </div>\n                    <div class=\"tab-pane active show\" id=\"tab4\">\n                      <div class=\"tab-pane1\">\n                            <div class=\"custom_tabs common-tabs\">\n                            <div class=\"sec_head_new sec_head_new_after\">\n                              <div class=\"row justify-content-between\">\n                                <div class=\"col-md-6 col-xl-3\">\n                                    <div class=\"filter_search mb20 width100\">\n                                      <div class=\"input-group filter_search_group\">\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Search by Transaction id\">\n                                          <div class=\"input-group-append\">\n                                              <button class=\"btn btn_search_group\" type=\"button\"><img src=\"img/icon-search.png\" alt=\"Search\"></button>\n                                          </div>\n                                      </div>\n                                   </div>\n                                </div>\n                                <div class=\"col-md-12 col-xl-7\">\n                                    <div class=\"filter_fields d-inline-flex\">\n                                        <div class=\"head_flt_select \">\n                                            <div class=\"head_flt_select align-items-center d-flex h-100\">\n                                                <label>Date of Transaction:</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div class=\"head_flt_select input-label\">\n                                                <span class=\"d-flex align-items-center\">From</span>\n                                                <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                            </div>\n                                        </div>\n                                        <div class=\"head_flt_select\">\n                                            <div class=\"head_flt_select input-label\">\n                                                <span class=\"d-flex align-items-center\">To</span>\n                                                <input type=\"\" name=\"\" class=\"form-control datepicker\" placeholder=\"Search by date\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-xl-2\">\n                                    <div class=\"text-left\">\n                                        <button type=\"submit\" class=\"btn  btn-theme\">Search</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active show\">\n                                        <div class=\"mb10 mt20 show-txt\">\n                                            <span>Show</span>\n                                            <select name=\"\" class=\"form-control form-control2 select_opt\">\n                                                <option value=\"\" selected=\"\">3</option>\n                                                <option value=\"\">2</option>\n                                                <option value=\"\">1</option>\n                                            </select>\n                                            <span>from all</span>\n                                        </div>\n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead>\n                                                    <tr class=\"no_wrap_th\">\n                                                      <th>Sr no.</th>\n                                                        <th>Amount</th>\n                                                        <th>No. of Token</th>\n                                                        <th>Transaction ID</th>\n                                                        <th>Private Key</th>\n                                                        <th>Date</th>\n                                                        <th>Action</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfgvdsgf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                       <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                   <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>sdfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#payment\">Payment</button>\n                                                            <button class=\"btn btn-info btn-sm\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#rejected\">Rejected</button>\n                                                        </td>\n\n\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dfsfdsfds</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>01</td>\n                                                        <td>dsfdsfdsf</td>\n                                                        <td>4</td>\n                                                        <td>KTY1234</td>\n                                                        <td>dshbcjhTYRUK1056</td>\n                                                        <td>02/01/2018</td>\n                                                        <td>completed</td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n\n\n                            \n                        </div>\n                    </div> -->\n                </div>\n            </div>\n        </div>\n    <!-- Table Responsive End -->\n    </div>\n</main>"

/***/ }),

/***/ "./src/app/pages/wallet-managment/wallet-managment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletManagmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalletManagmentComponent = /** @class */ (function () {
    function WalletManagmentComponent(route, routes, service) {
        this.route = route;
        this.routes = routes;
        this.service = service;
        this.beDisable = true;
        this.p1 = 1;
        this.walletDetail = {};
        this.walletList = [];
        this.data = {};
        /**************** Date managing***************/
        this.myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            editableDateField: false,
            openSelectorOnInputClick: false,
            disableSince: { year: 0, month: 0, day: 0 }
        };
        this.toDate = {
            dateFormat: 'yyyy-mm-dd',
            editableDateField: false,
            openSelectorOnInputClick: false,
            disableUntil: { year: 0, month: 0, day: 0 }
        };
        /***************Form Validations ********************/
        this.token1Form = new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormGroup"]({
            tokenname: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', []),
            startdate: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', []),
            enddate: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', []),
        });
        this.token2Form = new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormGroup"]({
            tokenname: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', []),
            startdate: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', []),
            enddate: new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["FormControl"]('', []),
        });
    }
    WalletManagmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // console.log('params=>'+JSON.stringify(params));
            _this.tab = params['tab'];
            _this.tokenListApi();
            _this.search('', _this.p1);
            _this.onDateChanged();
        });
    };
    WalletManagmentComponent.prototype.onDateChanged = function () {
        var d = new Date();
        var copy1 = this.getCopyOfOptions();
        copy1.disableSince = { year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate() };
        this.myDatePickerOptions = copy1;
    };
    //Returns copy of myDatePickerOptions
    WalletManagmentComponent.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerOptions));
    };
    WalletManagmentComponent.prototype.onChange = function (event) {
        // console.log(this.transantionForm.value)
        // console.log(event)
        if (event.formatted) {
            this.beDisable = false;
            var d = new Date(event.jsdate.getTime());
            d.setDate(d.getDate() - 1);
            var copy = this.getCopyOfToDateOpt();
            copy.disableUntil = { year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDate()
            };
            this.toDate = copy;
        }
        else {
            this.beDisable = true;
            this.token1Form.patchValue({
                'to': null,
                'from': null
            });
        }
    };
    WalletManagmentComponent.prototype.getCopyOfToDateOpt = function () {
        return JSON.parse(JSON.stringify(this.toDate));
    };
    /*******************Date managing Ends Here**************/
    WalletManagmentComponent.prototype.search = function (val, page) {
        var _this = this;
        // console.log("val Value==>",val);
        this.data = val;
        // console.log("val Value==>",this.data);
        this.p1 = page;
        if (this.tab == 'sent') {
            var status = 'sent';
        }
        else {
            var status = 'receive';
        }
        var userData = {
            "token": this.data.tokenname ? this.data.tokenname : null,
            "status": status,
            "fromDate": this.data.startdate ? Number(this.data.startdate.jsdate.getTime()) : null,
            "toDate": this.data.enddate ? Number(this.data.enddate.jsdate.getTime()) : null,
            'page': this.p1
        };
        // console.log("Data==> ",JSON.stringify(userData));
        this.service.spinnerShow();
        this.service.postApi("/admin/walletManagement", userData, 1).subscribe(function (response) {
            // console.log(JSON.stringify(response))
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                if (status == 'sent') {
                    _this.token1Form.reset();
                    _this.walletDetail = response.body.data;
                    _this.walletList = _this.walletDetail.docs;
                    // console.log(`succces`,this.walletList);
                }
                else {
                    _this.token2Form.reset();
                    _this.walletDetail = response.body.data;
                    _this.walletList = _this.walletDetail.docs;
                    // console.log(`succces`,this.walletList);
                }
            }
            else {
                _this.service.toastrErr("Something went wrong");
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    /**************************Token List Api**************/
    WalletManagmentComponent.prototype.tokenListApi = function () {
        var _this = this;
        var tokenData = {
            "tokenName": ''
        };
        console.log("Search Token==> ", JSON.stringify(tokenData));
        this.service.spinnerShow();
        this.service.postApi("/user/searchListToken", tokenData, 1).subscribe(function (response) {
            //  console.log(JSON.stringify(response))
            if (response.body.responseCode == 200) {
                _this.service.spinnerHide();
                _this.tokenDetail = response.body.data;
                _this.tokenList = _this.tokenDetail.docs;
                // console.log("Token List ====>>  ",this.tokenList)         
            }
            else {
                _this.service.spinnerHide();
                _this.service.toastrErr("Something went wrong");
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    WalletManagmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wallet-managment',
            template: __webpack_require__("./src/app/pages/wallet-managment/wallet-managment.component.html"),
            styles: [__webpack_require__("./src/app/pages/wallet-managment/wallet-managment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */]])
    ], WalletManagmentComponent);
    return WalletManagmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/withdrawlfee/withdrawlfee.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/withdrawlfee/withdrawlfee.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Withdrawal</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n\n              <li class=\"breadcrumb-item active\">User Management</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <div class=\"outer-box\">\n\n          <!-- Gloabl Table Box Start -->\n          <div class=\"global-table no-radius p0\">\n              <div class=\"tab-content1\">\n                  <div class=\"tab-pane1\">\n                      <div class=\"sec_head_new\">\n                            <form [formGroup]='withdrawForm'>\n                          <div class=\"row\">\n                            \n                              <div class=\"col-md-3\">\n                                  <div class=\"filter_fields d-inline-flex flex-wrap\">\n                                      <div class=\"head_flt_select \">\n                                          <div class=\"head_flt_select align-items-center d-flex h-100\">\n                                              <label>Search By :</label>\n                                          </div>\n                                      </div>\n                                     \n                                      <!-- <div class=\"head_flt_select\">\n                                          <div class=\"head_flt_select\">\n                                              <input type=\"\" name=\"\" class=\"form-control max-WT-160\" placeholder=\"Coin Name\">\n                                          </div>\n                                      </div> -->\n                                  </div>\n                              </div>\n                              <div class=\"col-md-5\">\n                                  <div class=\"filter_search mb20 width100\">\n                                    <div class=\"input-group filter_search_group\">\n                                         <input style=\"min-width:210px;\" type=\"text\" name=\"coinname\" formControlName=\"coinname\" class=\"form-control max-WT-160\" placeholder=\"Enter the Token Name\">\n                                         <button style=\"margin-left:10px;\" type=\"button\" class=\"btn  btn-theme\" [disabled]=\"!withdrawForm.valid\" (click)=\"search(withdrawForm.value)\">Search</button>\n                                    </div>\n                                 </div>\n                                 <p  *ngIf=\"withdrawForm.get('coinname').hasError('pattern') &&  withdrawForm.get('coinname').dirty\" style=\"color:red\"  padding>*Invalid Coin Name field </p>    \n                              </div> \n                          \n                          </div>\n                        </form>\n                      </div>\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-bordered\">\n                              <thead>\n                                  <tr class=\"no_wrap_th\">\n                                    <th>Id.No.</th>\n                                      <th>Token Name</th>\n                                      <th>Withdrawal</th>\n                                      <th class=\"action_td_btn3\">Action</th>\n                                  </tr>\n                              </thead>\n                              <tbody>\n                                  <tr *ngFor=\"let item of withdrawlist \">\n                                    <td >{{item._id}}</td>\n                                      <td>{{item.tokenName}}</td>\n                                      <td>{{item.withDrawFee}}</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a (click)=\"edit(item._id)\"><i class=\"fa fa-eye\"></i></a>\n                                      </td>\n                                  </tr>\n                                   <!-- <tr>\n                                    <td>2</td>\n                                      <td>Token 1</td>\n                                      <td>0.22Token name</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a ><i class=\"fa fa-eye\"></i></a>\n                                      </td>\n                                  </tr>\n                                   <tr>\n                                    <td>3</td>\n                                      <td>Token 1</td>\n                                      <td>0.22Token name</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a ><i class=\"fa fa-eye\"></i></a>\n                                      </td>\n                                  </tr>\n                                   <tr>\n                                    <td>4</td>\n                                      <td>Token 1</td>\n                                      <td>0.22Token name</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a ><i class=\"fa fa-eye\"></i></a>\n                                      </td>\n                                  </tr>\n                                   <tr>\n                                    <td>5</td>\n                                      <td>Token 1</td>\n                                      <td>0.22Token name</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a ><i class=\"fa fa-eye\"></i></a>\n                                      </td>\n                                  </tr>\n                                   <tr>\n                                    <td>6</td>\n                                      <td>Token 1</td>\n                                      <td>0.22Token name</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a ><i class=\"fa fa-eye\"></i></a>\n                                      </td>\n                                  </tr>\n                                   <tr>\n                                    <td>7</td>\n                                      <td>Token 1</td>\n                                      <td>0.22Token name</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a ><i class=\"fa fa-eye\"></i></a>\n                                      </td>\n                                  </tr> -->\n\n                              </tbody>\n                          </table>\n                      </div>\n                   \n                  </div>\n\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Table Responsive End -->\n\n</main>\n\n<!-- withdraw Modal -->\n<div class=\"modal fade global-modal reset-modal\" id=\"withdraw\">\n    <div class=\"modal-dialog max-WT-500\">\n        <form class=\"change_password\" [formGroup]= 'editForm'>\n            <div class=\"modal-content\">\n                <div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                    <div class=\"modal-body\">\n                        <div class=\"add-store-block input-style\">\n                            <div class=\"form-group row align-items-center\">\n                                <label class=\"col-md-6\">Kit Token Withdrawal</label>\n                                <div class=\"col-md-6\">\n                                    <input type=\"text\" name = \"price\" formControlName=\"price\"  maxlength=\"12\"  [(ngModel)]=\"withdrawfee\"  class=\"form-control form-control2\">\n                                </div>\n                                <p  *ngIf=\"editForm.get('price').hasError('required') &&  editForm.get('price').dirty\" style=\"color:red\"  padding>*Price field can not be empty</p>\n                                <p  *ngIf=\"editForm.get('price').hasError('pattern') &&  editForm.get('price').dirty\" style=\"color:red\"  padding>*Invalid Price</p>\n                            </div>\n                            <div class=\"form-group button-box mt30 text-center\">\n                              <button type=\"button\" class=\"btn btn-green max-WT-100 mb10\" [disabled]=\"!editForm.valid\" (click)=\"editwithdraw(editForm.value)\" data-dismiss=\"modal\">Save</button>\n                              <a  class=\"btn btn-gray max-WT-100 mb10 mL10\"  data-dismiss=\"modal\"> Cancel</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/withdrawlfee/withdrawlfee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawlfeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service__ = __webpack_require__("./src/app/providers/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WithdrawlfeeComponent = /** @class */ (function () {
    function WithdrawlfeeComponent(service) {
        this.service = service;
        this.withdrawlist = [];
        this.withdrawForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            coinname: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern(/^[^\s][a-zA-Z\s]*$/)]),
        });
        this.editForm = new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormGroup"]({
            price: new __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_forms__["Validators"].pattern(/^(?=.*[1-9])\d+(\.\d{1,2})?$/)]),
        });
    }
    WithdrawlfeeComponent.prototype.ngOnInit = function () {
        this.search('');
    };
    WithdrawlfeeComponent.prototype.search = function (data) {
        var _this = this;
        // console.log(data);
        var withdrawData = {
            "coinName": data ? data.coinname : ''
        };
        // console.log("Withdraw Data ====>>>> "+ JSON.stringify(withdrawData));
        this.service.spinnerShow();
        this.service.postApi("/admin/withDrawFee", withdrawData, 1).subscribe(function (response) {
            // console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                //this.service.toastrSucc(response.body.responseMessage);
                _this.withdrawlist = response.body.data;
                // console.log("withdraw==> ",this.withdrawlist);
            }
            else {
                _this.service.toastrErr(response.body.responseMessage);
                //  console.log(`Something went wrong`);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    /***********************Edit Fee************/
    WithdrawlfeeComponent.prototype.edit = function (id) {
        // console.log('id==> ',id);
        this.id = id;
        for (var i = 0; i < this.withdrawlist.length; i++) {
            if (id == this.withdrawlist[i]._id) {
                this.withdrawfee = this.withdrawlist[i].withDrawFee;
                // console.log("withdraw==>> ",this.withdrawfee);
            }
        }
        $('#withdraw').modal({ backdrop: 'static' });
    };
    WithdrawlfeeComponent.prototype.editwithdraw = function (val) {
        var _this = this;
        //console.log('Price==> '+val+"   "+this.id)
        var price = {
            "tokenId": this.id,
            "fee": val.price
        };
        // console.log("Val===>  ",JSON.stringify(price))
        this.service.spinnerShow();
        this.service.postApi("/admin/editWithDrawFee", price, 1).subscribe(function (response) {
            //  console.log(response)
            _this.service.spinnerHide();
            if (response.body.responseCode == 200) {
                //this.service.toastrSucc(response.body.responseMessage);
                _this.search('');
            }
            else {
                _this.service.toastrErr("Something went wrong");
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.toastrErr("Something went wrong");
        });
    };
    WithdrawlfeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-withdrawlfee',
            template: __webpack_require__("./src/app/pages/withdrawlfee/withdrawlfee.component.html"),
            styles: [__webpack_require__("./src/app/pages/withdrawlfee/withdrawlfee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_main_service__["a" /* MainService */]])
    ], WithdrawlfeeComponent);
    return WithdrawlfeeComponent;
}());



/***/ }),

/***/ "./src/app/providers/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__("./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainService = /** @class */ (function () {
    function MainService(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        //baseUrl:any=`http://172.16.21.33:1412`;
        this.baseUrl = "http://162.222.32.20:1412";
        //baseUrl:any=`http://172.16.6.183:1412`;
        this.loginSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.loginObs = this.loginSub.asObservable();
        this.imageSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.imageObs = this.imageSub.asObservable();
    }
    /*************Header Manage***************/
    MainService.prototype.changeLoginSub = function (msg) {
        this.loginSub.next(localStorage.loginToken);
    };
    /*************Header Manage***************/
    /*****************Image Profile*********************/
    MainService.prototype.changeimageSub = function (msg) {
        this.imageSub.next(localStorage.profilePic);
    };
    /**************************************/
    /**********Spinner Start*************/
    MainService.prototype.spinnerShow = function () {
        this.spinner.show();
    };
    MainService.prototype.spinnerHide = function () {
        this.spinner.hide();
    };
    /***********Spinner Ends***************/
    /***********Toaster Start**************/
    MainService.prototype.toastrSucc = function (msg) {
        // console.log("Succcess Toast")
        this.toastr.success(msg);
    };
    MainService.prototype.toastrErr = function (msg) {
        // console.log("error Toast")
        this.toastr.error(msg);
    };
    /***********Toaster Ends****************/
    /********************* Post Api Structure ***************/
    MainService.prototype.postApi = function (url, data, isHeader) {
        var httpOptions;
        if (isHeader === 0) {
            httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" }),
                observe: 'response'
            };
            return this.http.post((this.baseUrl + url), data, httpOptions);
        }
        else if (isHeader === 1) {
            httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json", "jwt": localStorage.getItem("loginToken") }),
                observe: 'response'
            };
            return this.http.post((this.baseUrl + url), data, httpOptions);
        }
    };
    /********************* Get Api Structure ***************/
    MainService.prototype.getApi = function (url, isHeader) {
        var httpOptions;
        if (isHeader === 0) {
            httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" }),
                observe: 'response'
            };
            return this.http.get((this.baseUrl + url), httpOptions);
        }
        else if (isHeader === 1) {
            httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json", "jwt": localStorage.getItem("loginToken") }),
                observe: 'response'
            };
            return this.http.get((this.baseUrl + url), httpOptions);
        }
    };
    /***************Script*************/
    MainService.prototype.sidemenu = function () {
        $(".btn-toggle,.close_panel").click(function () {
            $("body").toggleClass("toggle-wrapper");
        });
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map