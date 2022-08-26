"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect();
// const util = require('util');
const port = 4000;
app.get("/", (req, res) => {
    connection.query('SELECT * FROM users', (err, rows, fields) => {
        if (err)
            throw err;
        res.send(rows);
    });
});
app.listen(port, () => {
    console.log(`supra server running at http://localhost:${port}`);
});
