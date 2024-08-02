const OrderModel = require("./order-model");

const handleGetOrders = () => {
    OrderModel.retriveOrders();
}

const handleGetOrder = () => {
    OrderModel.retriveOrder();
}

const handleCreateOrder = () => {
    OrderModel.createOrder();
}

const handleDeleteOrder = () => {
    OrderModel.deleteOrder();
}

const handleUpdateOrder = () => {
    OrderModel.updateOrder();
}

module.exports = {
    handleCreateOrder,
    handleDeleteOrder,
    handleUpdateOrder,
    handleGetOrders,
    handleGetOrder
}