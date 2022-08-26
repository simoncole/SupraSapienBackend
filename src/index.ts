import 'dotenv/config';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();
// const util = require('util');
const port = 4000;

app.get("/", (req, res) => {
    connection.query('SELECT * FROM users', (err: any, rows: any, fields: any) => {
        if(err) throw err;
        
        res.send(rows);
    })
})

app.listen(port, () => {
    console.log(`supra server running at http://localhost:${port}`);
})