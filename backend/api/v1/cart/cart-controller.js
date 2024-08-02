const CartModel = require("./cart-model");

const handleGetCart = () => {
    CartModel.retriveCart();
}

const handleCreateCart = () => {
    CartModel.createCart();
}   

const handleDeleteCart = () => {
    CartModel.deleteCart();
}

const handleUpdateCart = () => {
    CartModel.updateCart();
}

module.exports = {
    handleGetCart,
    handleCreateCart,
    handleDeleteCart,
    handleUpdateCart
}