const connection = require('../config/database');

const queryGetAllUsers = (req, res) => {
    let user = [];
    connection.query('SELECT * FROM `user`', function (err, results, field) {
        user = results;
        console.log("✅ Response trả về:", user);
    });
}

const getAllUsers = (req, res) => {
    connection.query('SELECT * FROM `user`', (err, results) => {
        if (err) {
            return res.status(500).send({ message: 'Database error', error: err.message });
        }
        res.status(200).send({
            status_code: 200,
            message: "User information retrieved successfully!",
            data: results
        });
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { username, password } = req.body;

    const sql = 'UPDATE `user` SET username = ?, password = ? WHERE id = ?';
    connection.query(sql, [username, password, id], (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Database error', error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).send({
                status_code: 404,
                message: "User not found!"
            });
        }
        res.status(200).send({
            status_code: 200,
            message: "User information updated successfully!"
        });
    });
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = 'DELETE FROM `user` WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Database error', error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).send({
                status_code: 404,
                message: "User not found!"
            });
        }
        res.status(200).send({
            status_code: 200,
            message: "User information deleted successfully!"
        });
    });
};

module.exports = {
    getAllUsers,
    updateUser,
    deleteUser,
    queryGetAllUsers
};
