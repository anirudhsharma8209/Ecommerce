const OrderLineItemModel = require("./orderlineitem-model");

const handleGetOrderItems = () => {
    OrderLineItemModel.retriveOrderLineItems();
}

const handleGetOrderItem = () => {
    OrderLineItemModel.retriveOrderLineItem();
}

const handleCreateOrderItem = () => {
    OrderLineItemModel.createOrderLineItem();
}

const handleDeleteOrderItem = () => {
    OrderLineItemModel.deleteOrderLineItem();
}

const handleUpdateOrderItem = () => {
    OrderLineItemModel.updateOrderLineItem();
}

module.exports = {
    handleGetOrderItem,
    handleGetOrderItems,
    handleCreateOrderItem,
    handleUpdateOrderItem,
    handleDeleteOrderItem
}