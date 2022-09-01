import 'dotenv/config';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.use('/', require('./Routes/routes'));
app.use('/getUserProtocols/:username', require('./Routes/routes'));

// const util = require('util');

const port = 4000;
app.listen(port, () => {
    console.log(`supra server running at http://localhost:${port}`);
})

module.exports = app;