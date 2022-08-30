import 'dotenv/config';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

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
})

module.exports = app;