"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use('/', require('./Routes/routes'));
app.use('/getUserProtocols/:username', require('./Routes/routes'));
app.use('/getUserActiveProtocols/:username', require('./Routes/routes'));
// const util = require('util');
const port = 4000;
app.listen(port, () => {
    console.log(`supra server running at http://localhost:${port}`);
});
module.exports = app;
