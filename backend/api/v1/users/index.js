const UserRouter = require("express").Router();
const UserController = require("./user-controller");
const Authenticate = require("./middleware/auth-middleware");

UserRouter.route("/").get(Authenticate.isAdmin, UserController.handleGetUsers).post(UserController.handleCreateUser);

UserRouter.route("/:id").get(UserController.handleGetUser).delete(Authenticate.isAdmin, UserController.handleDeleteUser).put(Authenticate.isAdmin, UserController.handleUpdateUser);

module.exports = UserRouter;