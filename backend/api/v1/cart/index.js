const CartRouter = require("express").Router();
const CartController = require("./cart-controller");

CartRouter.route("/").post(CartController.handleCreateCart);

CartRouter.route("/:id").get(CartController.handleGetCart).delete(CartController.handleDeleteCart).put(CartController.handleUpdateCart);

module.exports = CartRouter;