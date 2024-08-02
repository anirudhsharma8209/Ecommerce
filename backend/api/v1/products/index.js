const ProductRouter = require("express").Router();
const ProductController = require("./product-controller");

ProductRouter.route("/").get(ProductController.handleGetProducts).post(ProductController.handleCreateProduct);

ProductRouter.route("/:id").get(ProductController.handleGetProduct).delete(ProductController.handleDeleteProduct).put(ProductController.handleUpdateProduct);

module.exports = ProductRouter;