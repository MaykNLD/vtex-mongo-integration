const User = require('../models/User');
const userService = require('../services/userService');

const createNewUser = async (req, res) => {
    try {
        const usersPost = req.body;
        const insertedUsers = await userService.createNewUser(usersPost);

        if (insertedUsers.length > 0) {
            res.status(201).json({ status: "OK", data: insertedUsers });
        } else {
            res.status(200).json({ status: "OK", data: "No new data to insert" });
        }
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, email } = req.body;
        
        const updatedUser = await User.findByIdAndUpdate(
            id, 
            { $set: { name, age, email } },
            { new: true }
        );
        
        if(!updatedUser) return res.status(404).json({ message: "User not found"});
        res.json({ status: "OK", data: updatedUser });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message });
    }
};

module.exports = {
    createNewUser,
    updateUser
};
