"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mysql = require('mysql');
const util = require('util');
const connection = mysql.createConnection({
    host: process.env.SQLHOST,
    user: process.env.SQLUSER,
    password: process.env.SQLPASSWORD,
    database: process.env.SQLDATABASE
});
connection.query = util.promisify(connection.query).bind(connection);
connection.connect();
const port = 4000;
app.get('/', (req, res) => {
    connection.query("SELECT * FROM protocols", (err, results, fields) => {
        if (err) {
            console.error("there was error: ", err);
            res.status(500).json();
        }
        console.log(results);
        console.log(fields);
        res.status(200).json({ "data": results });
    });
    // res.send("SUPRASAPIEN!!!!!");
});
app.get('/protocols/:protocolId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const protocolId = req.params.protocolId;
    // connection.query("SELECT * FROM protocols WHERE protocolId=?", [protocolId]);
    const protocolData = yield connection.query("SELECT * FROM protocols WHERE protocolId=?", [protocolId]);
    res.status(200).json({ "data": protocolData });
}));
app.listen(port, () => {
    console.log(`supra server running at http://localhost:${port}`);
});
