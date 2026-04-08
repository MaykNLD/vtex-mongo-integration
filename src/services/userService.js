const User = require('../models/User');

const createNewUser = async (usersPost) => {
    const jsonNew = JSON.parse(JSON.stringify(usersPost));
    const usersPostKeys = Object.keys(jsonNew);
    const insertedUsers = [];

    for (let i = 0; i < usersPostKeys.length; i++) {
        const userToSave = jsonNew[usersPostKeys[i]];
        const userCount = await User.countDocuments({ email: userToSave.email });

        if (userCount === 0) {
            const user = new User(userToSave);
            const savedUser = await user.save();
            insertedUsers.push(savedUser);
        }
    }
    
    return insertedUsers;
};

module.exports = {
    createNewUser
};
