const OrderLineRouter = require("express").Router();
const OrderLineController = require("./orderlineitem-controller");

OrderLineRouter.route("/").get(OrderLineController.handleGetOrderItems).post(OrderLineController.handleCreateOrderItem);

OrderLineRouter.route("/:id").get(OrderLineController.handleGetOrderItem).delete(OrderLineController.handleDeleteOrderItem).put(OrderLineController.handleUpdateOrderItem);

module.exports = OrderLineRouter;