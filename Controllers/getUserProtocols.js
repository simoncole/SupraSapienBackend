"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
// exports.test = (req: Request, res: Response) => {
//     connection.connect();
//     connection.query("SELECT * FROM userProtocols", (err: any, rows: any, fields: any) => {
//         res.send(rows);
//     })
// }
exports.getUserProtocols = (req, res) => {
    //gets username from path and queries db to get protocols corresponding to user
    const username = req.params.username;
    console.log(username);
    connection.connect();
    connection.query(`SELECT * FROM userProtocols 
            INNER JOIN users ON users.user_id = userProtocols.user_id
            WHERE users.username = ?;
        `, [username], (err, rows, fields) => {
        if (err) {
            console.error(err);
            res.send("There was an error");
        }
        res.send(rows);
    });
};
