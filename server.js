require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const userRouter = require('./router/user'); 
const authRouter = require('./router/auth'); 

const connection = require('./config/database'); 

const app = express();
const port = process.env.PORT || 64850;
const host = process.env.HOST || '0.0.0.0';


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', authRouter);
app.use('/', userRouter);


// connection(app);

// connection.query('SELECT * FROM `user`', (err, results) => {
//     const responseData = {
//         status_code: 200,
//         message: 'Lấy danh sách người dùng thành công!',
//         data: results
//     };
//     console.log("✅ Response trả về:", responseData);

// });

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
