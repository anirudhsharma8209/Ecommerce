const OrderRouter = require("express").Router();
const OrderController = require('./order-controller');

OrderRouter.route("/").get(OrderController.handleGetOrders).post(OrderController.handleCreateOrder);

OrderRouter.route("/:id").get(OrderController.handleGetOrder).delete(OrderController.handleDeleteOrder).put(OrderController.handleUpdateOrder);

module.exports = OrderRouter;