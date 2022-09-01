import { Express, Request, Response } from 'express';

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);


// exports.test = (req: Request, res: Response) => {
//     connection.connect();
//     connection.query("SELECT * FROM userProtocols", (err: any, rows: any, fields: any) => {
//         res.send(rows);
//     })
// }

exports.getUserProtocols = (req: Request, res: Response) => {
    //gets username from path and queries db to get protocols corresponding to user
    const username = req.params.username;
    console.log(username);
    connection.connect();
    connection.query(`SELECT * FROM userProtocols 
            INNER JOIN users ON users.user_id = userProtocols.user_id
            WHERE users.username = ?;
        `, [username], (err: any, rows: any, fields: any) => {
            if(err){
                console.error(err);
                res.send("There was an error");
            }
            res.send(rows);
        });
    


}


