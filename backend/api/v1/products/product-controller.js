const ProductModel = require("./product-model");

const handleGetProducts = (req, res) => {
    ProductModel.retriveProducts();
}

const handleGetProduct = (req, res) => {
    ProductModel.retriveProduct();
}   

const handleCreateProduct = (req, res) => {
    ProductModel.createProduct();
}

const handleDeleteProduct = (req, res) => {
    ProductModel.deleteProduct();
}

const handleUpdateProduct = (req, res) => {
    ProductModel.updaeProducts();
}

module.exports = {
    handleCreateProduct,
    handleGetProducts,
    handleGetProduct,
    handleDeleteProduct,
    handleUpdateProduct
}