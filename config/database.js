import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const connection = mysql.createPool({
    host: process.env.DB_HOST || '',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '', // ⚠️ nhớ setup trong .env
    database: process.env.DB_NAME || 'chat_app',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default connection;

// Nếu bạn muốn dùng createConnection thay cho pool, thì có thể thêm:
// export const connection1 = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
// });
