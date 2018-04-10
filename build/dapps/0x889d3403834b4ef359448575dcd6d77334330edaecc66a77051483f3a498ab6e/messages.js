module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var messages = {
  accounts: {
    id: 'dapp.methods.accounts',
    description: 'Explanation of the accounts methodGroup permission',
    defaultMessage: 'Can view your Parity accounts'
  },
  accountsCreate: {
    id: 'dapp.methods.accountsCreate',
    description: 'Explanation of the accountsCreate methodGroup permission',
    defaultMessage: 'Can create new Parity accounts'
  },
  accountsDelete: {
    id: 'dapp.methods.accountsDelete',
    description: 'Explanation of the accountsDelete methodGroup permission',
    defaultMessage: 'Can delete your Parity accounts'
  },
  accountsEdit: {
    id: 'dapp.methods.accountsEdit',
    description: 'Explanation of the accountsEdit methodGroup permission',
    defaultMessage: 'Can edit your Parity accounts'
  },
  dapps: {
    id: 'dapp.methods.dapps',
    description: 'Explanation of the dapps methodGroup permission',
    defaultMessage: 'Can read info about dapps'
  },
  dappsEdit: {
    id: 'dapp.methods.dappsEdit',
    description: 'Explanation of the dappsEdit methodGroup permission',
    defaultMessage: 'Can write info on dapps'
  },
  node: {
    id: 'dapp.methods.node',
    description: 'Explanation of the node methodGroup permission',
    defaultMessage: 'Can read info about node'
  },
  nodeUpgrade: {
    id: 'dapp.methods.nodeUpgrade',
    description: 'Explanation of the nodeUpgrade methodGroup permission',
    defaultMessage: 'Can upgrade Parity'
  },
  shell: {
    id: 'dapp.methods.shell',
    description: 'Explanation of the shell methodGroup permission',
    defaultMessage: 'Can get access to the Shell'
  },
  signerConfirm: {
    id: 'dapp.methods.signerConfirm',
    description: 'Explanation of the signerConfirm methodGroup permission',
    defaultMessage: 'Can confirm or reject requests from the signer'
  },
  signerRequests: {
    id: 'dapp.methods.signerRequests',
    description: 'Explanation of the signerRequests methodGroup permission',
    defaultMessage: 'Can get access to signer requests'
  },
  vaults: {
    id: 'dapp.methods.vaults',
    description: 'Explanation of the vaults methodGroup permission',
    defaultMessage: 'Can get access to your vaults'
  },
  vaultsCreate: {
    id: 'dapp.methods.vaultsCreate',
    description: 'Explanation of the vaultsCreate methodGroup permission',
    defaultMessage: 'Can create new vaults'
  },
  vaultsEdit: {
    id: 'dapp.methods.vaultsEdit',
    description: 'Explanation of the vaultsEdit methodGroup permission',
    defaultMessage: 'Can edit your vaults'
  }
};

exports.default = messages;

/***/ })
/******/ ]);