const User = require('../models/userModel');

const getUsers = async () => {
    return await User.findAll();
}

const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
}

const addUser = async (user) => {
    return await User.create(user);
}

module.exports = {
    getUsers,
    findUserByEmail,
    addUser
}