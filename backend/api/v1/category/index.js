const CategoryRouter = require("express").Router();
const CategoryController = require("./category-controller");

CategoryRouter.route("/").get(CategoryController.handleGetCategories).post(CategoryController.handleCreateCategory);

CategoryRouter.route("/:id").get(CategoryController.handleGetCategory).delete(CategoryController.handleDeleteCategory).put(CategoryController.handleUpdateCategory)

module.exports = CategoryRouter;