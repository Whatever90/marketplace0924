webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/anonpost.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anonpost; });
var Anonpost = (function () {
    function Anonpost(text) {
        if (text === void 0) { text = ""; }
        this.text = text;
    }
    return Anonpost;
}());

//# sourceMappingURL=anonpost.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products_all_products_all_component__ = __webpack_require__("../../../../../src/app/products/products-all/products-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_product_mylist_product_mylist_component__ = __webpack_require__("../../../../../src/app/products/product-mylist/product-mylist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__new_new_component__["a" /* NewComponent */] },
    {
        path: 'browse', component: __WEBPACK_IMPORTED_MODULE_4__products_products_component__["a" /* ProductsComponent */], children: [
            { path: 'all', component: __WEBPACK_IMPORTED_MODULE_5__products_products_all_products_all_component__["a" /* ProductsAllComponent */] },
            { path: 'listings', component: __WEBPACK_IMPORTED_MODULE_6__products_product_mylist_product_mylist_component__["a" /* ProductMylistComponent */] }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#body{\n\tbackground-color: azure;\n\tmargin: auto 20px;\n\theight: 300px;\n\tborder: 1px solid silver\n}\n#main {\n\tmargin: auto 20px;\n\tmargin-bottom: 50px;\n\tpadding: 10px auto;\n}\n* {box-sizing: border-box;}\n\nbody {\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n}\n\n.header {\n  overflow: hidden;\n  background-color: #f1f1f1;\n  padding: 20px 10px;\n  /* position: fixed; */\n}\n\n.header a {\n  float: left;\n  color: black;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px;\n}\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.header a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n.header a.active {\n  background-color: lightblue;\n  color: white;\n}\n\n.header-right {\n  float: right;\n}\n#content{\n  width: 70%;\n  margin: 0 auto;\n}\n#head_content{\n  width: 70%;\n  margin: 0 auto;\n}\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 6vh;\n  padding: 2vh 0;\n  background-color: #f1f1f1;\n  /* color: white; */\n  text-align: center;\n}\n@media screen and (max-width: 500px) {\n  .header a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n  .header-right {\n    float: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div id=\"head_content\">\n    <a href=\"#default\" class=\"logo\">MarketPlace</a>\n    <div class=\"header-right\">\n      <a class=\"active\" href=\"#home\">Home</a>\n      <a href=\"#contact\">Contact</a>\n      <a [routerLink]=\"['/login']\">Login/Registration</a>\n    </div>\n  </div>\n</div>\n<div id=\"content\">\n  <div id=\"router\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<div class=\"footer\">\n    <p>MarketPlace v.0.2 2018</p>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anonpost__ = __webpack_require__("../../../../../src/app/anonpost.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_taskService) {
        this._taskService = _taskService;
        this.title = 'app';
        this.posts = [];
        this.post = new __WEBPACK_IMPORTED_MODULE_3__anonpost__["a" /* Anonpost */]();
        this.errors = [];
        this.check = [];
    }
    ;
    AppComponent.prototype.onSubmit = function () {
    };
    ;
    AppComponent.prototype.showAll = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__delete_delete_component__ = __webpack_require__("../../../../../src/app/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__posts_posts_component__ = __webpack_require__("../../../../../src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_list_home_list_component__ = __webpack_require__("../../../../../src/app/home/home-list/home-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_new_home_new_component__ = __webpack_require__("../../../../../src/app/home/home-new/home-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__products_product_new_product_new_component__ = __webpack_require__("../../../../../src/app/products/product-new/product-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__products_product_mylist_product_mylist_component__ = __webpack_require__("../../../../../src/app/products/product-mylist/product-mylist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__products_products_all_products_all_component__ = __webpack_require__("../../../../../src/app/products/products-all/products-all.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { Routes, RouterModule } from '@angular/router';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_9__new_new_component__["a" /* NewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__delete_delete_component__["a" /* DeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_12__posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_list_home_list_component__["a" /* HomeListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_home_new_home_new_component__["a" /* HomeNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__products_product_new_product_new_component__["a" /* ProductNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__products_product_mylist_product_mylist_component__["a" /* ProductMylistComponent */],
            __WEBPACK_IMPORTED_MODULE_17__products_products_all_products_all_component__["a" /* ProductsAllComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__task_service__["a" /* TaskService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/delete/delete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Game 3 Status</h1>\n<div *ngFor='let x of users; let ind = index'>\n<span *ngIf='x.position && x.game1 && x.game2 && x.game3'>\n\t<span style=\"color: red\">Name:</span> {{x.name}}\n\t<button (click)=\"status('ready', x._id)\" [ngStyle]=\"{'background-color': colorchange1(x.game3)}\">Ready</button>\n<button (click)=\"status('notready', x._id)\" [ngStyle]=\"{'background-color': colorchange2(x.game3)}\">Not Ready</button>\n<button (click)=\"status('undecided', x._id)\" [ngStyle]=\"{'background-color': colorchange3(x.game3)}\" default>Undecided</button></span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteComponent = (function () {
    function DeleteComponent(_taskService) {
        this._taskService = _taskService;
        this.users = [];
        // this.showAll()
    }
    // showAll(){
    //   this._taskService.show(function(data){
    //      this.users = data
    //   }.bind(this))
    // }
    // status(stat, id){
    //   console.log(id, stat)
    // this._taskService.update3(stat, id);
    // this.showAll()
    // }
    // colorchange1(x){
    //   if(x=='ready'){
    //     return 'green'
    //   }else{
    //     return 'white'
    //   }
    // }
    //   colorchange2(x){
    //     if(x=='notready'){
    //     return 'red'
    //   }else{
    //     return 'white'
    //   }
    // }
    //   colorchange3(x){
    //     if(x=='undecided' || x=='Undecided'){
    //     return 'yellow'
    //   }else{
    //     return 'white'
    //   }
    // }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    return DeleteComponent;
}());
DeleteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-delete',
        template: __webpack_require__("../../../../../src/app/delete/delete.component.html"),
        styles: [__webpack_require__("../../../../../src/app/delete/delete.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */]) === "function" && _a || Object])
], DeleteComponent);

var _a;
//# sourceMappingURL=delete.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Edit Product</h1>\n<form name='myFrom' (submit)= \"onSubmit()\" #myForm=\"ngForm\">\n\tName: <input type=\"text\" name=\"name\" required \n    minlength=\"2\" \n    maxlength=\"24\" [(ngModel)]=\"prod.name\" #name='ngModel'><strong *ngIf= 'name.invalid && ( name.dirty || name.touched)'><span style=\"color: red\">  What's wrong with you?</span></strong><br>\n\tPrice: <input type=\"text\" name=\"price\" required \n    minlength=\"1\"\n    pattern=\"^[0-9]+.[0-9]{0,2}$\" \n    maxlength=\"7\" [(ngModel)]=\"prod.price\" #price='ngModel'><strong *ngIf='price.invalid && ( price.dirty || price.touched)'><span style=\"color: red\">  Numbers, Mason, numbers!!!</span></strong>\n\t<br><input type=\"submit\" name=\"submit\" value=\"Change\" [disabled]=\"myForm.invalid\">\n</form>\n<a [routerLink]=\"['products']\" (click)='delete()'>Delete</a>\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product__ = __webpack_require__("../../../../../src/app/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = (function () {
    function EditComponent(_route, _taskService, _r) {
        this._route = _route;
        this._taskService = _taskService;
        this._r = _r;
        this.prod = new __WEBPACK_IMPORTED_MODULE_1__product__["a" /* Product */]();
        // this._route.paramMap
        //    .subscribe(params => {
        //      console.log("HERE ->", params.get('id'));
        //      this.index = params.get('id');
        //      this.item = this._taskService.getItem(params.get('id'))
        //      console.log(this.item)
        //      return this.item;
        //  })
    }
    EditComponent.prototype.onSubmit = function () {
        // this._taskService.update(this.index, this.prod);
        // this.prod = new Product();
        // this._r.navigateByUrl('products')
    };
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.delete = function () {
        this._taskService.delete(this.index);
    };
    return EditComponent;
}());
EditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__task_service__["a" /* TaskService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], EditComponent);

var _a, _b, _c;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-list/home-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-list/home-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>List of Players!</h2>\n<div *ngFor='let x of users; let ind = index'><span *ngIf='x.position && x.game1 && x.game2 && x.game3'><span>Name: {{x.name}}</span><span>; Position: {{x.position}}</span><span style=\"color: red\">         <button (click)='confirm(x._id)'>Delete</button> </span></span></div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home-list/home-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeListComponent = (function () {
    function HomeListComponent(_taskService) {
        this._taskService = _taskService;
        this.users = [];
        this.showAll();
    }
    HomeListComponent.prototype.showAll = function () {
        this._taskService.show(function (data) {
            this.users = data;
        }.bind(this));
    };
    HomeListComponent.prototype.confirm = function (id) {
        var r = confirm("Are you sure?");
        this.id = id;
        if (r == true) {
            this.delete(this.id);
        }
        else {
            console.log('deletion has been canceled');
        }
    };
    HomeListComponent.prototype.delete = function (id) {
        this._taskService.delete(id);
        this.showAll();
    };
    HomeListComponent.prototype.ngOnInit = function () {
    };
    return HomeListComponent;
}());
HomeListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-list',
        template: __webpack_require__("../../../../../src/app/home/home-list/home-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home-list/home-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */]) === "function" && _a || Object])
], HomeListComponent);

var _a;
//# sourceMappingURL=home-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-new/home-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-new/home-new.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Add Player</h1>\n<form name='myFrom' (submit)= \"onSubmit()\" #myForm=\"ngForm\">\n\tPlayer Name: <input type=\"text\" name=\"name\" required \n    minlength=\"8\" \n    maxlength=\"24\"\n     [(ngModel)]=\"user.name\" #name='ngModel'><strong *ngIf='name.invalid && ( name.dirty || name.touched)'><span style=\"color: red\">  *Name should be at least 8 characters in length</span></strong><br>\n    Preffered Position: <input type=\"text\" name=\"position\" required \n    minlength=\"2\" \n    maxlength=\"24\"\n     [(ngModel)]=\"user.position\" #position='ngModel'><strong *ngIf='position.invalid && ( position.dirty || position.touched)'><span style=\"color: red\">  Position is needed</span></strong><br>\n\t\n\t<br><input type=\"submit\" name=\"submit\" value=\"Add\" [disabled]=\"myForm.invalid\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/home/home-new/home-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeNewComponent = (function () {
    function HomeNewComponent(_route, _taskService, _r) {
        this._route = _route;
        this._taskService = _taskService;
        this._r = _r;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.errors = [];
    }
    ;
    HomeNewComponent.prototype.onSubmit = function () {
        this._taskService.add(this.user);
        console.log(this.user);
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this._r.navigateByUrl('players/list');
    };
    HomeNewComponent.prototype.ngOnInit = function () {
    };
    return HomeNewComponent;
}());
HomeNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new',
        template: __webpack_require__("../../../../../src/app/home/home-new/home-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home-new/home-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__task_service__["a" /* TaskService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HomeNewComponent);

var _a, _b, _c;
//# sourceMappingURL=home-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  div.shop-tab-container{\n    z-index: 10;\n    background-color: #ffffff;\n    padding: 0 !important;\n    border-radius: 0px;\n    -moz-border-radius: 0px;\n    border:1px solid #ddd;\n    margin-top: 0px;\n    margin-left: 0px;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n    -moz-box-shadow: 0 6px 12px rgba(0,0,0,.175);\n    background-clip: padding-box;\n    opacity: 0.97;\n    filter: alpha(opacity=97);\n  }\n  div.shop-tab-menu{\n    padding-right: 0;\n    padding-left: 0;\n    padding-bottom: 0;\n  }\n  div.shop-tab-menu div.list-group{\n    margin-bottom: 0;\n  }\n  div.shop-tab-menu div.list-group>a{\n    margin-bottom: 0;\n  }\n  div.shop-tab-menu div.list-group>a .glyphicon,\n  div.shop-tab-menu div.list-group>a .fa {\n    color: #bee5eb;\n  }\n  div.shop-tab-menu div.list-group>a:first-child{\n    border-top-right-radius: 0;\n    -moz-border-top-right-radius: 0;\n  }\n  div.shop-tab-menu div.list-group>a:last-child{\n    border-bottom-right-radius: 0;\n    -moz-border-bottom-right-radius: 0;\n  }\n  div.shop-tab-menu div.list-group>a.active,\n  div.shop-tab-menu div.list-group>a.active .glyphicon,\n  div.shop-tab-menu div.list-group>a.active .fa{\n    background-color: #ffffff;\n    background-image: #5A55A3;\n    color: #5A55A3;\n  }\n\n  div.shop-tab-content{\n    background-color: #ffffff;\n    /* border: 1px solid #eeeeee; */\n    padding-left: 5px;\n    padding-top: 15px;\n    padding-bottom: 10px;\n    vertical-align: text-middle;\n  }\n  .list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.120);\n  }\n  .btn-group {\n  padding-top: 20px;\n  }\n  .btn-group > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0rem;\n  }\n  .cat {\n  text-align: left;\n  }\n\n  .img-responsive,\n  .thumbnail > img,\n  .thumbnail a > img,\n  .carousel-inner > .item > img,\n  .carousel-inner > .item > a > img {\n    display: relative;\n    width: 100%;\n    height: 360px;\n  }\n\n  .carousel-inner {\n    border-radius: 0px;\n  }\n\n  .carousel-caption {\n    background-color: rgba(0,0,0,.5);\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 10;\n    padding: 0 0 10px 25px;\n    color: #fff;\n    text-align: left;\n  }\n\n  .carousel-indicators {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: 100%;\n    z-index: 15;\n    margin: 0;\n    padding: 0 25px 25px 0;\n    text-align: right;\n  }\n\n  .carousel-control.left,\n  .carousel-control.right {\n    background-image: none;\n  }\n/* #registration{\n\tborder: black solid 1px;\n\twidth: 350px;\n\tpadding: 5px 5px;\n\n}\n#login{\n\tborder: black solid 1px;\n\twidth: 350px;\n\tpadding: 5px 5px;\n}\n#input{\n\tdisplay: flex;\n\tpadding: 10px 10px;\n\tmargin: auto 10;\n}\n.probox{\n\tborder: 1px solid black;\n\tbackground-color: azure;\n\twidth: 712px;\n\tpadding: 5px 5px;\n\tdisplay: flex;\n}\n#day{\n\tmargin-left: 10px;\n\tborder: 1px solid black;\n\twidth: 712px;\n\tpadding: 5px 5px;\n\tdisplay: flex;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"btn-group btn-group-justified\">\n      <a href=\"#\" class=\"btn btn-info cat\"><h4><i class=\"fa fa-bars\" aria-hidden=\"true\"></i> CATEGORIES</h4></a>\n      <a href=\"#\" class=\"btn btn-default\"><h4>ABOUT</h4></a>\n      <a href=\"#\" class=\"btn btn-default\"><h4>RETURNS</h4></a>\n      <a href=\"#\" class=\"btn btn-default\"><h4>DELIVERY</h4></a>\n    </div>\n\n    <div class=\"col-md-12 shop-tab-container\">\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 shop-tab-menu\">\n        <div class=\"list-group\">\n          <a href=\"#\" class=\"list-group-item\">\n            <h4><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> Laptop & PC's</h4>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> Cameras</h4>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> Mens Clothing</h4>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> Womens Clothing</h4>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> Watches</h4>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> Tablets</h4>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> All Categories</h4>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 shop-tab\">\n\n        <div class=\"shop-tab-content active\">\n\n          <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n\n            <ol class=\"carousel-indicators\">\n              <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n              <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n              <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n            </ol>\n\n            <div class=\"carousel-inner\">\n              <div class=\"item active\">\n                <img src=\"http://placehold.it/800x400\" alt=\"...\">\n                <div class=\"carousel-caption\">\n                  <h2>Heading</h2>\n                </div>\n              </div>\n              <div class=\"item\">\n                <img src=\"http://placehold.it/800x400\" alt=\"...\">\n                <div class=\"carousel-caption\">\n                  <h2>Heading</h2>\n                </div>\n              </div>\n              <div class=\"item\">\n                <img src=\"http://placehold.it/800x400\" alt=\"...\">\n                <div class=\"carousel-caption\">\n                  <h2>Heading</h2>\n                </div>\n              </div>\n            </div>\n\n            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </a>\n            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n              <span class=\"glyphicon glyphicon-chevron-right\"></span>\n            </a>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n<!-- <div>\n<div id='day'>\n  <h1><span style=\"color: blue\">Product of the day!</span></h1>\n  <div class='probox' *ngIf='product'>\n    <div id=\"left\">\n      <img src='{{product.image}}' width='150'>\n    </div>\n    <div id='right'>\n      <h2>{{product.title}} </h2>\n      <h5>Description: {{product.description}}</h5>\n      <h3>Price: ${{product.price}}</h3>\n      <h5>Location: {{product.location}}</h5>\n    </div>\n    </div>\n  </div>\n\n<div id='input'>\n  <div id='login'>\n    <h1>Login</h1>\n    <form NAME='myForm2' (submit)= \"login()\" #myForm2=\"ngForm\">\n        <h3>Email: <input class='inbox'\n          type=\"text\"\n          pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n          name=\"login_email\" [(ngModel)]=\"loginUser.email\"\n          #login_email='ngModel'>\n          <strong *ngIf='login_email.invalid && ( login_email.dirty || login_email.touched)'><span style=\"color: red\">   Uphold Email format</span></strong><strong *ngIf='login_email.valid && ( login_email.dirty || login_email.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        </h3>\n        <h3>Password: <input class='inbox'\n          type=\"text\"\n          required\n          minlength=\"5\"\n          maxlength=\"24\" name=\"login_password\" [(ngModel)]=\"loginUser.password\"\n          #login_password='ngModel'>\n        </h3>\n      <input type=\"submit\" value=\"Login\" [disabled]=\"myForm2.invalid\">\n    </form>\n  </div>\n\n  <div id=\"registration\">\n    <h1>Registration</h1>\n    <div>\n      <form name='myForm' (submit)= \"onSubmit()\" #myForm=\"ngForm\">\n\n      <p>*Name: </p>\n\n      <input\n      type=\"text\"\n      name=\"first_name\"\n      required\n      minlength=\"4\"\n      maxlength=\"24\"\n      [(ngModel)]=\"user.first_name\"\n      #first_name='ngModel'\n      ><strong *ngIf='first_name.valid && ( first_name.dirty || first_name.touched)'><span style=\"color: green\">  Looks good!</span></strong>\n      <strong *ngIf='first_name.invalid && ( first_name.dirty || first_name.touched)'><span style=\"color: red\">  First name must be 4 characters long</span></strong>\n\n    <p>*Last name: </p>\n    <script type=\"text/javascript\">\n\n    </script>\n    <input\n      type=\"text\"\n      name=\"last_name\"\n      required\n      minlength=password.value.length.toString()\n      maxlength=\"24\"\n      [(ngModel)]=\"user.last_name\"\n      #last_name='ngModel'\n    ><strong *ngIf='last_name.invalid && ( last_name.dirty || last_name.touched)'><span style=\"color: red\">  Last name must be 4 characters long</span></strong>\n    <strong *ngIf='last_name.valid && ( last_name.dirty || last_name.touched)'><span style=\"color: green\">  Looks good!</span></strong>\n\n    <p>*Email: </p>\n    <input\n      type=\"text\"\n      name=\"email\"\n      required\n      pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n      [(ngModel)]=\"user.email\"\n      #email='ngModel'\n    ><strong *ngIf='email.invalid && ( email.dirty || email.touched)'><span style=\"color: red\">   Uphold Email format</span></strong><strong *ngIf='email.valid && ( email.dirty || email.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n\n\n\n\n    <p>*Password: </p>\n    <input\n    type=\"password\"\n      name=\"password\"\n      required\n      minlength=\"5\"\n      maxlength=\"24\"\n      [(ngModel)]=\"user.password\"\n      #password='ngModel'\n    ><strong *ngIf='password.invalid && ( password.dirty || password.touched)'><span style=\"color: red\">\n    Password name must be 5 characters long. </span></strong><strong *ngIf='password.valid && ( password.dirty || password.touched)'><span style=\"color: green\">Looks Good!</span></strong>\n\n\n\n    <p>*Confirm Password: </p>\n    <input\n      [(ngModel)]=\"user.con_password\"\n      #con_password='ngModel'\n      type=\"password\"\n      name=\"con_password\"\n      required\n      ><span *ngIf='password.invalid && ( con_password.dirty || con_password.touched)'><span style=\"color: red\">Too short! Read above, dude!</span></span>\n    <strong *ngIf='con_password.value != password.value && password.valid && ( con_password.dirty || con_password.touched)'><span style=\"color: red\">Password and confimation have to match</span></strong>\n    <strong *ngIf='con_password.value == password.value && password.valid'><span style=\"color: green\">Looks Good!</span></strong>\n\n\n    <br><br><input type=\"submit\" [disabled]=\"myForm.invalid || con_password.value!=password.value\">\n\n\n      </form>\n\n    </div>\n    {{users|json}}\n  </div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginUser__ = __webpack_require__("../../../../../src/app/loginUser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(_taskService, _r) {
        this._taskService = _taskService;
        this._r = _r;
        this.users = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
        this.loginUser = new __WEBPACK_IMPORTED_MODULE_5__loginUser__["a" /* LoginUser */]();
        this.showOne();
    }
    HomeComponent.prototype.showAll = function () {
        console.log('lets show all!');
        this._taskService.showMe(function (err, data) {
            console.log(data);
            console.log('----------------------');
            console.log(err);
            if (err) {
                console.log('somehow true statement is ERROR, lol');
                console.log(err);
                this.products = err;
                console.log(this.products.length);
                this.product = this.products[Math.floor(Math.random() * this.products.length)];
            }
            if (data) {
                console.log('yes!!!!!!!!!!!!!!');
                this.products = data;
            }
        }.bind(this));
    };
    HomeComponent.prototype.showOne = function () {
        this.showAll();
        this.length = 1;
        console.log('=====================');
        console.log(this.products);
        console.log('=====================');
        // var x = Math.floor(Math.random()*length)
        // this.product = this.product[x]
    };
    HomeComponent.prototype.onSubmit = function () {
        console.log(this.user);
        this._taskService.create(this.user, function (data) {
            console.log(data);
            if (!data) {
                console.log('something wrong');
                alert('email is already used by another user');
            }
            if (data) {
                console.log('exellent!');
                console.log(data);
                this.storeUser(data);
                this.errormessage = '';
                this._r.navigateByUrl('browse/all');
            }
        }.bind(this));
        this.user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
    };
    HomeComponent.prototype.login = function () {
        this._taskService.login(this.loginUser, function (data) {
            console.log(data);
            if (!data) {
                console.log('failed to login');
                alert('wrong email or password');
            }
            if (data) {
                this.storeUser(data);
                console.log('logining');
                this._r.navigateByUrl('browse/all');
            }
        }.bind(this));
        this.loginUser = new __WEBPACK_IMPORTED_MODULE_5__loginUser__["a" /* LoginUser */];
    };
    HomeComponent.prototype.storeUser = function (user) {
        this._taskService.storeUs(user);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginUser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUser; });
var LoginUser = (function () {
    function LoginUser(email, password) {
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        this.email = email;
        this.password = password;
    }
    return LoginUser;
}());

//# sourceMappingURL=loginUser.js.map

/***/ }),

/***/ "../../../../../src/app/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n  background-color: #525252;\n}\n.centered-form{\nmargin-top: 60px;\n}\n\n.centered-form .panel{\nbackground: rgba(255, 255, 255, 0.8);\nbox-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n<div id='day'>\n  <h1><span style=\"color: blue\">Product of the day!</span></h1>\n  <div class='probox' *ngIf='product'>\n    <div id=\"left\">\n      <img src='{{product.image}}' width='150'>\n    </div>\n    <div id='right'>\n      <h2>{{product.title}} </h2>\n      <h5>Description: {{product.description}}</h5>\n      <h3>Price: ${{product.price}}</h3>\n      <h5>Location: {{product.location}}</h5>\n    </div>\n    </div>\n  </div>\n\n<div id='input'>\n  <div id='login'>\n    <h1>Login</h1>\n    <form NAME='myForm2' (submit)= \"login()\" #myForm2=\"ngForm\">\n        <h3>Email: <input class='inbox'\n          type=\"text\"\n          pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n          name=\"login_email\" [(ngModel)]=\"loginUser.email\"\n          #login_email='ngModel'>\n          <strong *ngIf='login_email.invalid && ( login_email.dirty || login_email.touched)'><span style=\"color: red\">   Uphold Email format</span></strong><strong *ngIf='login_email.valid && ( login_email.dirty || login_email.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        </h3>\n        <h3>Password: <input class='inbox'\n          type=\"text\"\n          required\n          minlength=\"5\"\n          maxlength=\"24\" name=\"login_password\" [(ngModel)]=\"loginUser.password\"\n          #login_password='ngModel'>\n        </h3>\n      <input type=\"submit\" value=\"Login\" [disabled]=\"myForm2.invalid\">\n    </form>\n  </div>\n\n  <div id=\"registration\">\n    <h1>Registration</h1>\n    <div>\n      <form name='myForm' (submit)= \"onSubmit()\" #myForm=\"ngForm\">\n\n      <p>*Name: </p>\n\n      <input\n      type=\"text\"\n      name=\"first_name\"\n      required\n      minlength=\"4\"\n      maxlength=\"24\"\n      [(ngModel)]=\"user.first_name\"\n      #first_name='ngModel'\n      ><strong *ngIf='first_name.valid && ( first_name.dirty || first_name.touched)'><span style=\"color: green\">  Looks good!</span></strong>\n      <strong *ngIf='first_name.invalid && ( first_name.dirty || first_name.touched)'><span style=\"color: red\">  First name must be 4 characters long</span></strong>\n\n    <p>*Last name: </p>\n    <script type=\"text/javascript\">\n\n    </script>\n    <input\n      type=\"text\"\n      name=\"last_name\"\n      required\n      minlength=password.value.length.toString()\n      maxlength=\"24\"\n      [(ngModel)]=\"user.last_name\"\n      #last_name='ngModel'\n    ><strong *ngIf='last_name.invalid && ( last_name.dirty || last_name.touched)'><span style=\"color: red\">  Last name must be 4 characters long</span></strong>\n    <strong *ngIf='last_name.valid && ( last_name.dirty || last_name.touched)'><span style=\"color: green\">  Looks good!</span></strong>\n\n    <p>*Email: </p>\n    <input\n      type=\"text\"\n      name=\"email\"\n      required\n      pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n      [(ngModel)]=\"user.email\"\n      #email='ngModel'\n    ><strong *ngIf='email.invalid && ( email.dirty || email.touched)'><span style=\"color: red\">   Uphold Email format</span></strong><strong *ngIf='email.valid && ( email.dirty || email.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n\n\n\n\n    <p>*Password: </p>\n    <input\n    type=\"password\"\n      name=\"password\"\n      required\n      minlength=\"5\"\n      maxlength=\"24\"\n      [(ngModel)]=\"user.password\"\n      #password='ngModel'\n    ><strong *ngIf='password.invalid && ( password.dirty || password.touched)'><span style=\"color: red\">\n    Password name must be 5 characters long. </span></strong><strong *ngIf='password.valid && ( password.dirty || password.touched)'><span style=\"color: green\">Looks Good!</span></strong>\n\n\n\n    <p>*Confirm Password: </p>\n    <input\n      [(ngModel)]=\"user.con_password\"\n      #con_password='ngModel'\n      type=\"password\"\n      name=\"con_password\"\n      required\n      ><span *ngIf='password.invalid && ( con_password.dirty || con_password.touched)'><span style=\"color: red\">Too short! Read above, dude!</span></span>\n    <strong *ngIf='con_password.value != password.value && password.valid && ( con_password.dirty || con_password.touched)'><span style=\"color: red\">Password and confimation have to match</span></strong>\n    <strong *ngIf='con_password.value == password.value && password.valid'><span style=\"color: green\">Looks Good!</span></strong>\n\n\n    <br><br><input type=\"submit\" [disabled]=\"myForm.invalid || con_password.value!=password.value\">\n\n\n      </form>\n\n    </div>\n    {{users|json}}\n  </div>\n</div> -->\n<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"container\" *ngIf='switch===true'>\n  <div class=\"row centered-form\">\n    <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Please sign up for MarketPlace <small>It's free!</small></h3>\n        </div>\n        <div class=\"panel-body\">\n          <form role=\"form\">\n            <div class=\"row\">\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" name=\"first_name\" id=\"first_name\" class=\"form-control input-sm\" placeholder=\"First Name\">\n                </div>\n              </div>\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" name=\"last_name\" id=\"last_name\" class=\"form-control input-sm\" placeholder=\"Last Name\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Email Address\">\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-sm\" placeholder=\"Password\">\n                </div>\n              </div>\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control input-sm\" placeholder=\"Confirm Password\">\n                </div>\n              </div>\n            </div>\n\n            <input type=\"submit\" value=\"Register\" class=\"btn btn-info btn-block\">\n            <button (click)=\"switcher()\" class=\"btn btn-primary btn-block\">Login</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- login form -->\n\n<div class=\"container\" *ngIf='switch===false'>\n  <div class=\"row centered-form\">\n    <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Sign In</h3>\n        </div>\n        <div class=\"panel-body\">\n          <form role=\"form\">\n            <div class=\"row\">\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" name=\"first_name\" id=\"first_name\" class=\"form-control input-sm\" placeholder=\"First Name\">\n                </div>\n              </div>\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" name=\"last_name\" id=\"last_name\" class=\"form-control input-sm\" placeholder=\"Last Name\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Email Address\">\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-sm\" placeholder=\"Password\">\n                </div>\n              </div>\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control input-sm\" placeholder=\"Confirm Password\">\n                </div>\n              </div>\n            </div>\n\n            <input type=\"submit\" value=\"Login\" class=\"btn btn-info btn-block\">\n            <button (click)=\"switcher()\" class=\"btn btn-primary btn-block\">Registration</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginUser__ = __webpack_require__("../../../../../src/app/loginUser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewComponent = (function () {
    function NewComponent(_route, _taskService, _r) {
        this._route = _route;
        this._taskService = _taskService;
        this._r = _r;
        this.users = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
        this.loginUser = new __WEBPACK_IMPORTED_MODULE_5__loginUser__["a" /* LoginUser */]();
        this.switch = true;
    }
    NewComponent.prototype.switcher = function () {
        this.switch = !this.switch;
    };
    NewComponent.prototype.reg = function () {
        console.log(this.user);
        // this._taskService.create(this.user, function (data) {
        //   console.log(data);
        //   if (!data) {
        //     console.log('something wrong');
        //     alert('email is already used by another user');
        //   }
        //   if (data) {
        //     console.log('exellent!');
        //     console.log(data);
        //     this.storeUser(data);
        //     this.errormessage = '';
        //     this._r.navigateByUrl('browse/all');
        //   }
        // }.bind(this));
        // this.user = new User();
    };
    NewComponent.prototype.login = function () {
        console.log(this.loginUser);
        // this._taskService.login(this.loginUser, function (data) {
        //   console.log(data);
        //   if (!data) {
        //     console.log('failed to login');
        //     alert('wrong email or password');
        //   }
        //   if (data) {
        //     this.storeUser(data);
        //     console.log('logining');
        //     this._r.navigateByUrl('browse/all');
        //   }
        // }.bind(this));
        // this.loginUser = new LoginUser;
    };
    NewComponent.prototype.storeUser = function (user) {
        this._taskService.storeUs(user);
    };
    NewComponent.prototype.ngOnInit = function () {
    };
    return NewComponent;
}());
NewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new',
        template: __webpack_require__("../../../../../src/app/new/new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new/new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NewComponent);

var _a, _b, _c;
//# sourceMappingURL=new.component.js.map

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".userBox{\n\tborder: gold 3px solid;\n\twidth: 800px;\n\theight: 500px;\n\tbackground-color: azure;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tdisplay:  -webkit-box;\n\tdisplay:  -ms-flexbox;\n\tdisplay:  flex;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Ranks</h1>\n<div  *ngFor='let x of users'>\n\t<div  *ngIf='x.score'>\n\t<div class=\"userBox\">\n\t\t<img src=\"{{x.photo}}\">\n\t\t<p>{{x.login}} {{x.score}}</p>\n\t\t</div>\n\t</div>\n\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = (function () {
    function PostsComponent(_taskService) {
        this._taskService = _taskService;
        this.users = [];
        this.showAll();
    }
    PostsComponent.prototype.showAll = function () {
        this._taskService.show(function (data) {
            this.users = data;
        }.bind(this));
    };
    PostsComponent.prototype.ngOnInit = function () {
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-posts',
        template: __webpack_require__("../../../../../src/app/posts/posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */]) === "function" && _a || Object])
], PostsComponent);

var _a;
//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(title, price, description, location, image, seller) {
        if (title === void 0) { title = ""; }
        if (price === void 0) { price = 0; }
        if (description === void 0) { description = ""; }
        if (location === void 0) { location = ""; }
        if (image === void 0) { image = ""; }
        if (seller === void 0) { seller = ""; }
        this.title = title;
        this.price = price;
        this.description = description;
        this.location = location;
        this.image = image;
        this.seller = seller;
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-mylist/product-mylist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".probox{\n\tborder: 1px solid black;\n\tbackground-color: azure;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-mylist/product-mylist.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='create'>\n\t<div *ngIf='user'>\n\t<form NAME='myForm2' (submit)= \"newProduct()\" #myForm2=\"ngForm\">\n        <h3>Title: <input class='inbox'\n          type=\"text\"\n          minlength=\"5\" \n          maxlength=\"24\" \n          name=\"title\" \n          [(ngModel)]=\"product.title\"\n          #title='ngModel'>\n          <strong *ngIf='title.invalid && ( title.dirty || title.touched)'><span style=\"color: red\">   Uphold Email format</span></strong><strong *ngIf='title.valid && ( title.dirty || title.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        </h3>\n        <h3>Description: <input class='inbox' \n          type=\"text\" \n          required \n          minlength=\"5\" \n          maxlength=\"100\"\n          rows=\"4\" \n          cols=\"50\" \n          name=\"description\" \n          [(ngModel)]=\"product.description\"\n          #description='ngModel'>\n           <strong *ngIf='description.invalid && ( description.dirty || description.touched)'><span style=\"color: red\">   Uphold Email format</span></strong><strong *ngIf='description.valid && ( description.dirty || description.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        </h3>\n        <h3>Price: <input class='inbox' \n          type=\"text\" \n          required \n          minlength=\"1\" \n    \t  maxlength=\"7\"\n    \t  pattern=\"^[0-9]+.[0-9]{0,2}$\" \n          name=\"price\" \n          [(ngModel)]=\"product.price\"\n          #price='ngModel'>\n           <strong *ngIf='price.invalid && ( price.dirty || price.touched)'><span style=\"color: red\">   Numbers, Mason, numbers!!!</span></strong><strong *ngIf='price.valid && ( price.dirty || price.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        \t\n        </h3>\n        <input type=\"text\" name=\"seller\" value=\"{{user._id}}\" style=\"display: none;\" \n        [(ngModel)]=\"product.seller\" #seller='ngModel'>\n\n        <h3>Location: \n        <input class='inbox' \n          type=\"text\" \n          required \n          minlength=\"2\" \n          maxlength=\"15\"\n          name=\"location\" \n          [(ngModel)]=\"product.location\"\n          #location='ngModel'>\n           <strong *ngIf='location.invalid && ( location.dirty || location.touched)'><span style=\"color: red\">   Location is needed</span></strong><strong *ngIf='location.valid && ( location.dirty || location.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        </h3>\n        <h3>Image URL link: \n        <input class='inbox' \n          type=\"text\" \n          required \n          minlength=\"2\" \n          name=\"image\" \n          [(ngModel)]=\"product.image\"\n          #image='ngModel'>\n           <strong *ngIf='image.invalid && ( image.dirty || image.touched)'><span style=\"color: red\">   URL is needed</span></strong><strong *ngIf='image.valid && ( image.dirty || image.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        </h3>\n\n      <input type=\"submit\" value=\"Login\" [disabled]=\"myForm2.invalid\">\n    </form>\n    </div>\n</div>\n<div id='mylist'>\n\t<div class='probox' *ngFor='let x of products'>\n\t<img src='{{x.image}}' width='100'>\n\n\t<form name='updateForm' #updateForm=\"ngForm\">\n\t\t\t\n\t\t\t<h3>Title: <input class='inbox'\n\t\t\tng-value=\"Doe\"\n          \ttype=\"text\"\n          \tminlength=\"5\" \n          \tmaxlength=\"24\" \n          \tname=\"up_title\"\n          \t[(ngModel)]=\"x.title\"\n          \t#up_title='ngModel'></h3>\n\n         <h3>Description: <input class='inbox' \n\t          type=\"text\" \n\t          required \n\t          minlength=\"5\" \n\t          maxlength=\"100\"\n\t          rows=\"4\" \n\t          cols=\"50\" \n\t          name=\"up_description\" \n\t          [(ngModel)]=\"x.description\"\n\t          #up_description='ngModel'>\n\t           <strong *ngIf='up_description.invalid && ( up_description.dirty || up_description.touched)'><span style=\"color: red\">   Uphold Email format</span></strong><strong *ngIf='up_description.valid && ( up_description.dirty || up_description.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        </h3>\n        <h3>Price: <input class='inbox' \n\t          type=\"text\" \n\t          required \n\t          minlength=\"1\" \n\t    \t  maxlength=\"7\"\n\t    \t  pattern=\"^[0-9]+.[0-9]{0,2}$\" \n\t          name=\"up_price\" \n\t          [(ngModel)]=\"x.price\"\n\t          #up_price='ngModel'>\n\t           <strong *ngIf='up_price.invalid && ( up_price.dirty || up_price.touched)'><span style=\"color: red\">   Numbers, Mason, numbers!!!</span></strong><strong *ngIf='up_price.valid && ( up_price.dirty || up_price.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        </h3>\n        <h3>Location: \n\t        <input class='inbox' \n\t          type=\"text\" \n\t          required \n\t          minlength=\"2\" \n\t          maxlength=\"15\"\n\t          name=\"up_location\" \n\t          [(ngModel)]=\"x.location\"\n\t          #up_location='ngModel'>\n\t           <strong *ngIf='up_location.invalid && ( up_location.dirty || up_location.touched)'><span style=\"color: red\">   Location is needed</span></strong><strong *ngIf='up_location.valid && ( up_location.dirty || up_location.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        </h3>\n\n        <h3>Image URL link: \n\t        <input class='inbox' \n\t          type=\"text\" \n\t          required \n\t          minlength=\"2\" \n\t          name=\"up_image\" \n\t          [(ngModel)]=\"x.image\"\n\t          #up_image='ngModel'>\n\t           <strong *ngIf='up_image.invalid && ( up_image.dirty || up_image.touched)'><span style=\"color: red\">   URL is needed</span></strong><strong *ngIf='up_image.valid && ( up_image.dirty || up_image.touched)'><span style=\"color: green\">   Looks good!</span></strong>\n        </h3>\n        \t<button (click)='update(x._id, updateForm)' [disabled]=\"updateForm.invalid\">Update</button>\n\n    </form>\n\t\t\t<button (click)='deleteProduct(x._id)'>Delete</button>\n\t</div>\n\n\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-mylist/product-mylist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductMylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product__ = __webpack_require__("../../../../../src/app/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__updateProduct__ = __webpack_require__("../../../../../src/app/updateProduct.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductMylistComponent = (function () {
    function ProductMylistComponent(_taskService, _r) {
        this._taskService = _taskService;
        this._r = _r;
        this.products = [];
        this.product = new __WEBPACK_IMPORTED_MODULE_4__product__["a" /* Product */]();
        this.updateProduct = new __WEBPACK_IMPORTED_MODULE_5__updateProduct__["a" /* updateProduct */]();
        this.checkUser();
    }
    ProductMylistComponent.prototype.newProduct = function () {
        this.product.seller = this.user;
        console.log("the seller is", this.product.seller);
        this._taskService.newProduct(this.product);
        this.product = new __WEBPACK_IMPORTED_MODULE_4__product__["a" /* Product */]();
        this.showMine();
    };
    ProductMylistComponent.prototype.checkUser = function () {
        this._taskService.showUser(function (user, data) {
            console.log('products.comp: user =>', user);
            console.log('products.comp: data =>', data);
            if (!user) {
                console.log('no user found in session');
                this._r.navigateByUrl('');
            }
            if (user) {
                this.user = user;
                console.log(this.user);
                console.log('alright, user is here!');
                this.showMine();
            }
        }.bind(this));
    };
    ProductMylistComponent.prototype.showMine = function () {
        console.log('SHOW ME ALL PRODUCTS OF THIS USER =>');
        console.log(this.user);
        this._taskService.showMylist(this.user._id, function (err, data) {
            console.log(data);
            console.log('----------------------');
            console.log(err);
            if (err) {
                console.log('somehow true statement is ERROR, lol');
                console.log(err);
                this.products = err;
            }
            if (data) {
                console.log('yes!!!!!!!!!!!!!!');
                this.products = data;
            }
        }.bind(this));
    };
    ProductMylistComponent.prototype.update = function (id, updateForm) {
        console.log('hey');
        console.log(id);
        console.log(updateForm.form._value);
        this.updateProduct.title = updateForm.form._value.up_title;
        this.updateProduct.description = updateForm.form._value.up_description;
        this.updateProduct.image = updateForm.form._value.up_image;
        this.updateProduct.location = updateForm.form._value.up_location;
        this.updateProduct.price = updateForm.form._value.up_price;
        this.updateProduct.seller = this.user._id;
        this.updateProduct.id = id;
        console.log(this.updateProduct);
        this._taskService.updateProduct(this.updateProduct);
        this.showMine();
    };
    ProductMylistComponent.prototype.deleteProduct = function (id) {
        console.log(id);
        this._taskService.deleteProduct(id);
        this.showMine();
    };
    ProductMylistComponent.prototype.ngOnInit = function () {
    };
    return ProductMylistComponent;
}());
ProductMylistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-product-mylist',
        template: __webpack_require__("../../../../../src/app/products/product-mylist/product-mylist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-mylist/product-mylist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProductMylistComponent);

var _a, _b;
//# sourceMappingURL=product-mylist.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-new/product-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-new/product-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-new works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-new/product-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductNewComponent = (function () {
    function ProductNewComponent() {
    }
    ProductNewComponent.prototype.ngOnInit = function () {
    };
    return ProductNewComponent;
}());
ProductNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-product-new',
        template: __webpack_require__("../../../../../src/app/products/product-new/product-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-new/product-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductNewComponent);

//# sourceMappingURL=product-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products-all/products-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".probox{\n\tborder: 1px solid black;\n\tbackground-color: azure;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding: 10px 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products-all/products-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='all'>\n\t<div  *ngFor='let x of products; let idx = index'>\n\t<div class='probox' *ngIf='x.seller'>\n\t\t<div id='left'>\n\t\t<img src='{{x.image}}' width='200'>\n\t\t</div>\n\t\t<div id='right'>\n\t\t<h3>Title: {{x.title}} </h3>\n\t\t<h5>Description: {{x.description}}</h5>\n\t\t<h5>Price: ${{x.price}}</h5>\n\t\t<h5>Location: {{x.location}}</h5>\n\t\t<div *ngIf='x.seller !=user._id'>\n\t\t\t<button (click)='contact(x.seller)'>Contact seller</button>\n\t\t</div>\n\t\t<div *ngIf='x.seller==user._id'>\n\t\t\t<button (click)='deleteProduct(x._id)'>Delete Product</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/products-all/products-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsAllComponent = (function () {
    function ProductsAllComponent(_taskService, _r) {
        this._taskService = _taskService;
        this._r = _r;
        this.products = [];
        this.checkUser();
        this.showAll();
    }
    ProductsAllComponent.prototype.checkUser = function () {
        this._taskService.showUser(function (user, data) {
            console.log('products.comp: user =>', user);
            console.log('products.comp: data =>', data);
            if (!user) {
                console.log('no user found in session');
                this._r.navigateByUrl('');
            }
            if (user) {
                console.log(user);
                this.user = user;
                console.log('alright, user is here!');
            }
        }.bind(this));
    };
    ProductsAllComponent.prototype.showAll = function () {
        this.checkUser();
        this._taskService.showMe(function (err, data) {
            console.log(data);
            console.log('----------------------');
            console.log(err);
            if (err) {
                console.log('somehow true statement is ERROR, lol');
                console.log(err);
                this.products = err;
            }
            if (data) {
                console.log('yes!!!!!!!!!!!!!!');
                this.products = data;
            }
        }.bind(this));
    };
    ProductsAllComponent.prototype.contact = function (seller) {
        console.log(seller);
        this._taskService.getUser(seller, function (user, data) {
            console.log('this is err', user);
            console.log('this is data', data);
            if (user) {
                alert("Name: " + user[0].first_name + "; Email: " + user[0].email);
            }
            if (data) {
                console.log(data);
            }
        });
    };
    ProductsAllComponent.prototype.deleteProduct = function (id) {
        console.log(id);
        this._taskService.deleteProduct(id);
        this.showAll();
    };
    ProductsAllComponent.prototype.ngOnInit = function () {
    };
    return ProductsAllComponent;
}());
ProductsAllComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products-all',
        template: __webpack_require__("../../../../../src/app/products/products-all/products-all.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products-all/products-all.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProductsAllComponent);

var _a, _b;
//# sourceMappingURL=products-all.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".probox{\n\tborder: 2px solid black;\n\tbackground-color: azure;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/browse','listings']\">My List</a>\n<a [routerLink]=\"['/browse','all']\">All Products</a>\n<button (click)='logout()'>Logout</button>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = (function () {
    function ProductsComponent(_taskService, _r) {
        this._taskService = _taskService;
        this._r = _r;
        this.products = [];
        this.checkUser();
    }
    ProductsComponent.prototype.checkUser = function () {
        this._taskService.showUser(function (user, data) {
            console.log('products.comp: user =>', user);
            console.log('products.comp: data =>', data);
            if (!user) {
                console.log('no user found in session');
                this._r.navigateByUrl('');
            }
            if (user) {
                console.log(user);
                this.user = user;
                console.log('alright, user is here!');
                this.showAll();
            }
        }.bind(this));
    };
    ProductsComponent.prototype.logout = function () {
        console.log('products. logout function');
        this._taskService.logout();
        this._r.navigateByUrl('');
    };
    ProductsComponent.prototype.showAll = function () {
        this._taskService.showMe(function (err, data) {
            console.log(data);
            console.log('----------------------');
            console.log(err);
            if (err) {
                console.log('somehow true statement is ERROR, lol');
                console.log(err);
                this.products = err;
            }
            if (data) {
                console.log('yes!!!!!!!!!!!!!!');
                this.products = data;
            }
        }.bind(this));
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.checkUser();
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProductsComponent);

var _a, _b;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskService = (function () {
    function TaskService(_r, _http) {
        this._r = _r;
        this._http = _http;
        this.key = [];
        this.posts = [];
    }
    ;
    TaskService.prototype.create = function (user, callback) {
        console.log('second step of storing');
        this._http.post("/user/new", user)
            .map(function (data) { return data.json(); }) //
            .subscribe(function (data) { return callback(data); });
    };
    TaskService.prototype.newProduct = function (product) {
        console.log('taskservice: creating a new product');
        console.log(product);
        this._http.post('/products/new', product).subscribe(function (data) { return data = data.json(); }, function (err) { return console.log(err); });
    };
    TaskService.prototype.login = function (user, callback) {
        console.log('second step of login');
        this._http.post("/user/login", user)
            .map(function (data) { return data.json(); }) //
            .subscribe(function (data) { return callback(data); });
    };
    TaskService.prototype.showUser = function (callback) {
        console.log('checking user in session');
        this._http.post("/user/showuser", "lol")
            .map(function (data) { return data.json(); }) //
            .subscribe(function (data) { return callback(data); });
    };
    TaskService.prototype.storeUs = function (user) {
        this._http.post('/user/store', user).subscribe(function (data) { return data = data.json(); }, function (err) { return console.log(err); });
    };
    TaskService.prototype.logout = function () {
        this._http.post('/user/logout', 'lol').subscribe(function (data) { return data = data.json(); }, function (err) { return console.log(err); });
    };
    TaskService.prototype.gimme = function (callback) {
        callback(this.user);
    };
    TaskService.prototype.showMe = function (callback) {
        this._http.post('/products/all', 'lol')
            .map(function (data) { return data.json(); })
            .subscribe(function (data) { return callback(data); });
    };
    TaskService.prototype.showMylist = function (id, callback) {
        console.log(id);
        id = {
            id: id
        };
        this._http.post('/products/mylist', id)
            .map(function (data) { return data.json(); })
            .subscribe(function (data) { return callback(data); });
    };
    TaskService.prototype.getUser = function (user, callback) {
        user = {
            user: user
        };
        this._http.post('/user/contact', user)
            .map(function (data) { return data.json(); })
            .subscribe(function (data) { return callback(data); });
    };
    TaskService.prototype.updateProduct = function (product) {
        console.log('TASKSERVICE:', product);
        this._http.post('/products/update', product).subscribe(function (data) { return data = data.json(); }, function (err) { return console.log(err); });
    };
    TaskService.prototype.deleteProduct = function (id) {
        id = {
            id: id
        };
        this._http.post('/products/delete', id).subscribe(function (data) { return data = data.json(); }, function (err) { return console.log(err); });
    };
    TaskService.prototype.show = function (callback) {
        console.log('show all!');
        this._http.get("/users").subscribe(function (data) { return callback(data.json()); }, function (err) { return console.log(err); });
    };
    TaskService.prototype.add = function (user) {
        this.context = user;
        console.log("service is trying..");
        console.log(this.context);
        this._http.post("/user/new", this.context)
            .map(function (data) { return data.json(); })
            .toPromise();
        console.log('did it work?');
    };
    // update(status, id){
    //    let user ={
    //       id: id,
    //       status: status
    //    }
    //    this._http.post("/user/update/", user)
    //    .map( data => data.json() )
    //     .toPromise();
    // };
    // update1(status, id){
    //    let user ={
    //       id: id,
    //       status: status
    //    }
    //    this._http.post("/user/update/2", user)
    //    .map( data => data.json() )
    //     .toPromise();
    // };
    //  update3(status, id){
    //    let user ={
    //       id: id,
    //       status: status
    //    }
    //    this._http.post("/user/update/3", user)
    //    .map( data => data.json() )
    //     .toPromise();
    // };
    TaskService.prototype.delete = function (id) {
        console.log(id);
        id = { id: id };
        this._http.post("/user/delete/", id)
            .map(function (data) { return data.json(); })
            .toPromise();
        console.log('did it work?');
    };
    return TaskService;
}());
TaskService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
], TaskService);

var _a, _b;
//# sourceMappingURL=task.service.js.map

/***/ }),

/***/ "../../../../../src/app/updateProduct.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateProduct; });
var updateProduct = (function () {
    function updateProduct(title, price, description, location, image, seller, id) {
        if (title === void 0) { title = ""; }
        if (price === void 0) { price = 0; }
        if (description === void 0) { description = ""; }
        if (location === void 0) { location = ""; }
        if (image === void 0) { image = ""; }
        if (seller === void 0) { seller = ""; }
        if (id === void 0) { id = ""; }
        this.title = title;
        this.price = price;
        this.description = description;
        this.location = location;
        this.image = image;
        this.seller = seller;
        this.id = id;
    }
    return updateProduct;
}());

//# sourceMappingURL=updateProduct.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(first_name, last_name, email, password, con_password) {
        if (first_name === void 0) { first_name = ""; }
        if (last_name === void 0) { last_name = ""; }
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        if (con_password === void 0) { con_password = ""; }
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.con_password = con_password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map