const UserModel = require("./user-model");

const handleGetUsers = () => {
    UserModel.retriveUsers();
}

const handleGetUser = () => {
    UserModel.retriveUser();
}   

const handleCreateUser = () => {
    UserModel.createUser();
}

const handleDeleteUser = () => {
    UserModel.deleteUser();
}

const handleUpdateUser = () => {
    UserModel.updateUser();
}

module.exports = {
    handleGetUser,
    handleGetUsers,
    handleCreateUser,
    handleDeleteUser,
    handleUpdateUser,
}