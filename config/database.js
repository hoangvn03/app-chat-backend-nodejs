require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '', // ⚠️ cần khai báo lại
    database: process.env.DB_NAME || 'chat_app',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;
// const connection1 = mysql.createConnection({
//     host: dbHost,
//     //   port: dbPort,
//     user: dbUser,
//     database: dbName,
// });