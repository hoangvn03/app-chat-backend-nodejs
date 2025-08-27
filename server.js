require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRouter = require('./router/user');
const authRouter = require('./router/auth');
const { queryGetAllUsers, getAllUsers } = require('./controllers/userController');
const { connectDatabase } = require('./config/connect');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', authRouter);
app.use('/', userRouter);
app.get('/test', getAllUsers)
// connection(app);
// connectDatabase();


app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
