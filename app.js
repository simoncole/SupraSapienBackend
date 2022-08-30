"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use('/', require('./Routes/testRoute'));
// const util = require('util');
// app.get("/profile/:user", (req, res) => {
//     connection.query('SELECT * FROM users WHERE username=?', [req.params.user], (err: any, rows: any, fields: any) => {
//         if(err) throw err;
//         res.send(rows);
//     })
// })
const port = 4000;
app.listen(port, () => {
    console.log(`supra server running at http://localhost:${port}`);
});
module.exports = app;
