const connection = require('../config/database');

let currentId = 1;
const listData = [];

const signUp = (req, res) => {

    const user = req.body;
    console.log("Results: ", user);
    const data = {
        "id": currentId++, // Gán id tự tăng
        "username": user.username,
        "password": user.password,
    };
    listData.push(data);
    console.log("List Data: ", data);
    res.status(200).send({
        "status_code": 200,
        "message": "User signUp successfully!",
        "user": data
    });
}
const signUp1 = (req, res) => {
    const { username, password } = req.body;
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            return res.status(500).send({
                message: 'Database error',
                error: err.message
            });
        }

        res.status(200).send({
            status_code: 200,
            message: "User sign up successfully!",
            user: {
                id: result.insertId,
                username,
                password
            }
        });
    });
};
module.exports = {
    signUp
}