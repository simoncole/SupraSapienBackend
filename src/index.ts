import 'dotenv/config';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

const mysql = require('mysql');
const util = require('util');
const connection = mysql.createConnection({
    host: process.env.SQLHOST,
    user: process.env.SQLUSER,
    password: process.env.SQLPASSWORD,
    database: process.env.SQLDATABASE
})
connection.query = util.promisify(connection.query).bind(connection);
connection.connect();

const port = 4000;

app.get('/', (req, res) => {
    connection.query("SELECT * FROM protocols", (err: any, results: any, fields: any) => {
        if (err){
            console.error("there was error: ", err);
            res.status(500).json();
        }
        console.log(results);
        console.log(fields);
        res.status(200).json({"data": results});
    })
    // res.send("SUPRASAPIEN!!!!!");
})

app.get('/protocols/:protocolId', async (req, res) => {
    const protocolId = req.params.protocolId;
    // connection.query("SELECT * FROM protocols WHERE protocolId=?", [protocolId]);
    const protocolData = await connection.query("SELECT * FROM protocols WHERE protocolId=?", [protocolId]);
    
    res.status(200).json({"data": protocolData});
})

app.listen(port, () => {
    console.log(`supra server running at http://localhost:${port}`);
})