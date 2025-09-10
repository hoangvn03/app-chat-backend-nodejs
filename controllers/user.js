import connection from '../config/database.js';
import User from '../models/user.js';
import sequelize from 'sequelize';
import db from '../config/connect.js';

const getCurrentUser = async (req, res) => {
    try {
        const { id } = req.user;
        const response = await db.User.findOne(id);
        return res.status(200).json(response);

    } catch (err) {
        return interalServerError(res);
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = User(db, sequelize.DataTypes);
        const data = await users.findAll();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ message: 'Database error', error: err.message });
    }
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

export {
    getCurrentUser,
    getAllUsers,
    updateUser,
    deleteUser,
};
