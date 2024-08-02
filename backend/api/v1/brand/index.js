const BrandRouter = require("express").Router();
const BrandController = require("./brand-controller");

BrandRouter.route("/").get(BrandController.handleGetBrand).post(BrandController.handleCreateBrand);

BrandRouter.route("/:id").get(BrandController.handleGetBrand).delete(BrandController.handleDeleteBrand).put(BrandController.handleUpdateBrand);

module.exports = BrandRouter;