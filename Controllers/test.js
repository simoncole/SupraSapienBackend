"use strict";
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
exports.test = (req, res) => {
    connection.connect();
    connection.query("SELECT * FROM userProtocols", (err, rows, fields) => {
        res.send(rows);
    });
};
