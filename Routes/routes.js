"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.express = void 0;
exports.express = require('express');
exports.router = exports.express.Router();
const test = require('../Controllers/test');
exports.router.get('/', test.test);
const getUserProtocols = require("../Controllers/getUserProtocols");
exports.router.get('/getUserProtocols/:username', getUserProtocols.getUserProtocols);
module.exports = exports.router;