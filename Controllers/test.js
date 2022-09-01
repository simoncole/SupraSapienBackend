"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
exports.test = (req, res) => {
    connection.connect();
    connection.query("SELECT * FROM userProtocols", (err, rows, fields) => {
        res.send(rows);
    });
};
// exports.getUserProtocols = (req: Request, res: Response) => {
//     //gets username from path and queries db to get protocols corresponding to user
//     const username = req.params.username;
// }
