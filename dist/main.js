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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/webpack.config.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./webpack/webpack.config.js":
/*!***********************************!*\
  !*** ./webpack/webpack.config.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {/*const path = require('path');\r\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\r\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');*/\r\n\r\nmodule.exports = {\r\n    entry: './src/app/index.js',\r\n    output: {\r\n        path: __dirname + './src/app/public',\r\n        filename: 'bundle.js'\r\n    }\r\n\r\n}; \r\n\r\n///version anterior de module exports \r\n/*    module.exports = {\r\n    entry: './src/app.js',\r\n    output: {\r\n        path: path.resolve(__dirname, '../dist'),\r\n        filename: 'bundle.js'\r\n    },*/\r\n  //este objeto tiene una propiedad llamada rules \r\n    // rules es un arreglo que esta compuesto por varios objetos \r\n    //cada objeto son ordenes para webpack \r\n    //usa babel loader, para convertir mas tipos de archivos \r\n    //va a convertir todos los archivos que terminen en .js\r\n    //y que no tome los que estan en la carpeta node_modules ya que ahi dentro estan los archivos para que node pueda funcionar. \r\n \r\n/*\r\n    module: {  //aqui configuramos los tipos de archivos que se quieren cargar \r\n        rules: [\r\n            {\r\n                test: /\\.(sa|sc|c)ss$/,\r\n                use: [\r\n                    MiniCssExtractPlugin.loader,\r\n                    'css-loader',   // necesario para agregar archivos css\r\n                    'sass-loader'  // necesario para agregar archivos css\r\n\r\n                ]\r\n            },\r\n            {\r\n                test: [/\\.(jpg|png|gif)$/,\r\n                        /\\.js$/]\r\n                use: [\r\n                      {\r\n                        loader: 'file-loader',\r\n                        options: {\r\n                            name: '[name].[ext]',\r\n                            outputPath: 'static/',\r\n                            useRelativePath: true\r\n                        }\r\n\r\n                      }\r\n                    ]\r\n            }\r\n        ]\r\n    },\r\n    plugins: [\r\n        new HtmlWebpackPlugin({\r\n            title: 'My Cool Website',\r\n            template: './src/index.handlebars',\r\n            minify: {\r\n                html5: true,\r\n                collapseWhitespace: true,\r\n                caseSensitive: true,\r\n                removeComments: true,\r\n                removeEmptyElements: true\r\n            }\r\n        \r\n          \r\n        }), \r\n        new MiniCssExtractPlugin({\r\n            filename: 'main.css'\r\n        })\r\n    ]\r\n};*/\r\n\r\n\r\n/*fulll */\r\n/*const path = require('path');\r\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\r\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\r\nconst autoprefixer = require('autoprefixer');\r\n\r\nmodule.exports = {\r\n    entry: './src/app.js',\r\n    output: {\r\n        path: path.resolve(__dirname, '../dist'),\r\n        filename: 'js/bundle.js'\r\n    },\r\n    devtool: 'source-map',\r\n    devServer: {\r\n        port: 4000,\r\n        open: true\r\n    },\r\n    module: {\r\n        rules: [\r\n            {\r\n                test: /\\.handlebars$/,\r\n                loader: 'handlebars-loader'\r\n            },\r\n            {\r\n                test: /\\.(sa|sc|c)ss$/,\r\n                use: [\r\n                    MiniCssExtractPlugin.loader,\r\n                    'css-loader',\r\n                    {\r\n                        loader: 'postcss-loader',\r\n                        options: {\r\n                            autoprefixer: {\r\n                                browser: [\"last 2 versions\"]\r\n                            },\r\n                            plugins: () => [\r\n                                autoprefixer\r\n                            ]\r\n                        }\r\n                    },\r\n                    'sass-loader',\r\n                ],\r\n            },\r\n            {\r\n                test: /\\.(jpg|png|gif)$/,\r\n                use: [\r\n                    {\r\n                        loader: 'file-loader',\r\n                        options: {\r\n                            name: '[name].[ext]',\r\n                            outputPath: 'static/',\r\n                            useRelativePath: true\r\n                        }\r\n                    },\r\n                    {\r\n                        loader: 'image-webpack-loader',\r\n                        options: {\r\n                            mozjpeg: {\r\n                                progressive: true,\r\n                                quality: 65\r\n                            },\r\n                            // optipng.enabled: false will disable optipng\r\n                            optipng: {\r\n                                enabled: false,\r\n                            },\r\n                            pngquant: {\r\n                                quality: '65-90',\r\n                                speed: 4\r\n                            },\r\n                            gifsicle: {\r\n                                interlaced: false,\r\n                            },\r\n                            // the webp option will enable WEBP\r\n                            webp: {\r\n                                quality: 75\r\n                            }\r\n                        }\r\n                    }\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    plugins: [\r\n        new HtmlWebpackPlugin({\r\n            title: 'My Cool Website',\r\n            template: './src/index.handlebars',\r\n            minify: {\r\n                html5: true,\r\n                collapseWhitespace: true,\r\n                caseSensitive: true,\r\n                removeComments: true,\r\n                removeEmptyElements: true\r\n            }\r\n        }),\r\n        new MiniCssExtractPlugin({\r\n            filename: \"css/[name]-styles.css\",\r\n            chunkFilename: \"[id].css\"\r\n        })\r\n    ]\r\n};*/\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./webpack/webpack.config.js?");

/***/ })

/******/ });