const connection = require('../config/database');
// connection(app);
const listData = [];
const getAllUsers = (req, res) => {
    if (listData.length > 0) {
        res.status(200).send({
            "status_code": 200,
            "message": "User information retrieved successfully!",
            "data": listData
        });
    } else {
        res.status(200).send({
            "status_code": 200,
            "message": []
        });
    }
}
const updateUser = (req, res) => {
    let id = parseInt(req.params.id);
    let updatedUser = listData.find(user => user.id === id);
    let index = listData.indexOf(updatedUser);
    console.log('Update body:', req.body);
    if (index !== -1) {
        listData[index].username = req.body.username;
        listData[index].password = req.body.password;

        res.status(200).send({
            "status_code": 200,
            "message": "User information updated successfully!",
            "data": listData[index]
        });
    } else {
        res.status(404).send({
            "status_code": 404,
            "message": "User not found!"
        });
    }
}
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id); // lấy id từ URL
    const deletedUser = listData.find(user => user.id === id);
    if (!deletedUser) {
        return res.status(404).send({
            "status_code": 404,
            "message": "User not found!"
        });
    }
    const index = listData.indexOf(deletedUser);
    listData.splice(index, 1);
    res.status(200).send({
        "status_code": 200,
        "message": "User information deleted successfully!"
    });
}
module.exports = {
    getAllUsers,
    updateUser,
    deleteUser
}
