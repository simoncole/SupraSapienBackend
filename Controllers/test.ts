const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);


exports.test = (req: any, res: any) => {
    connection.connect();
    connection.query("SELECT * FROM userProtocols", (err: any, rows: any, fields: any) => {
        res.send(rows);
    })
}
