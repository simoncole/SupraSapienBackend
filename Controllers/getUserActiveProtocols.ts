import { Express, Request, Response } from 'express';

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);

// exports.getUserProtocols = (req: Request, res: Response) => {
//     //gets username from path and queries db to get protocols corresponding to user
//     const username = req.params.username;
//     console.log(username);
//     connection.connect();
//     connection.query(`SELECT * FROM userProtocols 
//             INNER JOIN users ON users.user_id = userProtocols.user_id
//             WHERE users.username = ?;
//         `, [username], (err: any, rows: any, fields: any) => {
//             if(err){
//                 console.error(err);
//                 res.send("There was an error");
//             }
//             res.send(rows);
//         });
// }
exports.getUserActiveProtocols = (req: Request, res: Response) => {
    const username = req.params.username;
    connection.connect();

    connection.query(
        `SELECT activeProtocols, username FROM activeProtocols
        INNER JOIN users ON activeProtocols.user_id = users.user_id
        WHERE username=?`,  [username], (err: any, rows: any, fields: any) => {
            if(err) res.send(err);
            res.send(rows);
        })
}