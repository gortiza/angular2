module.exports =
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
/******/ 	__webpack_require__.p = "/Users/gerginaortiz/universal-starter-master";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	__webpack_require__(16);
	var path = __webpack_require__(20);
	var express = __webpack_require__(19);
	var bodyParser = __webpack_require__(17);
	var cookieParser = __webpack_require__(18);
	var core_1 = __webpack_require__(1);
	var angular2_universal_1 = __webpack_require__(4);
	core_1.enableProdMode();
	var app = express();
	var ROOT = path.join(path.resolve(__dirname, '..'));
	app.engine('.html', angular2_universal_1.expressEngine);
	app.set('views', __dirname);
	app.set('view engine', 'html');
	app.use(cookieParser('Angular 2 Universal'));
	app.use(bodyParser.json());
	app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
	app.use(express.static(path.join(ROOT, 'dist/client'), { index: false }));
	var api_1 = __webpack_require__(10);
	app.get('/data.json', api_1.serverApi);
	var main_node_1 = __webpack_require__(13);
	app.get('/', main_node_1.ngApp);
	app.get('/about', main_node_1.ngApp);
	app.get('/about/*', main_node_1.ngApp);
	app.get('/home', main_node_1.ngApp);
	app.get('/home/*', main_node_1.ngApp);
	function indexFile(req, res) {
	    res.sendFile('/index.html', { root: __dirname });
	}
	app.get('*', function (req, res) {
	    res.setHeader('Content-Type', 'application/json');
	    var pojo = { status: 404, message: 'No Content' };
	    var json = JSON.stringify(pojo, null, 2);
	    res.status(404).send(json);
	});
	app.listen(3000, function () {
	    console.log('Listening on: http://localhost:3000');
	});

	/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(15);
	var About = (function () {
	    function About() {
	    }
	    About = __decorate([
	        core_1.Component({
	            selector: 'about',
	            template: "\n    <div>This is the \"About\" page</div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], About);
	    return About;
	}());
	exports.About = About;
	var App = (function () {
	    function App(http) {
	        this.http = http;
	        this.title = 'ftw';
	        this.data = {};
	    }
	    App.prototype.ngOnInit = function () {
	        var _this = this;
	        this.server = 'This was rendered from the server!';
	        this.http.get('/data.json')
	            .subscribe(function (res) {
	            _this.data = res.json();
	        });
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: router_1.ROUTER_DIRECTIVES.slice(),
	            template: "\n  \n  <div class=\"hero-universal\">\n    <div class=\"inner-hero\">\n      \n      <main>\n        <router-outlet></router-outlet>\n      </main>\n\n      <blockquote>{{ server }}</blockquote>\n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], App);
	    return App;
	}());
	exports.App = App;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = ".home {\n  background-color: pink;\n}\n"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"home\">\n  This is the \"djcndjc\" page\n</div>\n"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var home_1 = __webpack_require__(9);
	var app_component_1 = __webpack_require__(2);
	exports.routes = [
	    { path: '', redirectTo: 'home' },
	    { path: 'home', component: home_1.Home },
	    { path: 'about', component: app_component_1.About },
	    { path: '**', redirectTo: 'home' }
	];


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Home = (function () {
	    function Home() {
	    }
	    Home = __decorate([
	        core_1.Component({
	            moduleId: __filename,
	            selector: 'home',
	            styles: [
	                __webpack_require__(5)
	            ],
	            template: __webpack_require__(6)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Home);
	    return Home;
	}());
	exports.Home = Home;

	/* WEBPACK VAR INJECTION */}.call(exports, "src/app/home/home.component.ts"))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(8));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var db_1 = __webpack_require__(12);
	var cache_1 = __webpack_require__(11);
	var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077';
	function serverApi(req, res) {
	    var key = USER_ID + '/data.json';
	    var cache = cache_1.fakeDemoRedisCache.get(key);
	    if (cache !== undefined) {
	        console.log('/data.json Cache Hit');
	        return res.json(cache);
	    }
	    console.log('/data.json Cache Miss');
	    db_1.fakeDataBase.get()
	        .then(function (data) {
	        cache_1.fakeDemoRedisCache.set(key, data);
	        return data;
	    })
	        .then(function (data) { return res.json(data); });
	}
	exports.serverApi = serverApi;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var _fakeLRUcount = 0;
	exports.fakeDemoRedisCache = {
	    _cache: {},
	    get: function (key) {
	        var cache = exports.fakeDemoRedisCache._cache[key];
	        _fakeLRUcount++;
	        if (_fakeLRUcount >= 10) {
	            exports.fakeDemoRedisCache.clear();
	            _fakeLRUcount = 0;
	        }
	        return cache;
	    },
	    set: function (key, data) { return exports.fakeDemoRedisCache._cache[key] = data; },
	    clear: function () { return exports.fakeDemoRedisCache._cache = {}; }
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	exports.fakeDataBase = {
	    get: function () {
	        var res = { data: 'This fake data came from the db on the server.' };
	        return Promise.resolve(res);
	    }
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular2_universal_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(14);
	var app_component_1 = __webpack_require__(2);
	var app_routes_1 = __webpack_require__(7);
	function ngApp(req, res) {
	    var baseUrl = '/';
	    var url = req.originalUrl || '/';
	    var config = {
	        directives: [
	            app_component_1.App
	        ],
	        platformProviders: [
	            { provide: angular2_universal_1.ORIGIN_URL, useValue: 'http://localhost:3000' },
	            { provide: common_1.APP_BASE_HREF, useValue: baseUrl },
	        ],
	        providers: [
	            { provide: angular2_universal_1.REQUEST_URL, useValue: url },
	            angular2_universal_1.NODE_HTTP_PROVIDERS,
	            router_1.provideRouter(app_routes_1.routes),
	            angular2_universal_1.NODE_LOCATION_PROVIDERS
	        ],
	        async: true,
	        preboot: false
	    };
	    res.render('index', config);
	}
	exports.ngApp = ngApp;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal/polyfills");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);