const CategoryModel = require("./category-model");

const handleGetCategories =  (req, res) => {
    CategoryModel.retriveCategories();
}

const handleGetCategory =    (req, res) => {
    CategoryModel.retriveCategory();
}

const handleCreateCategory = (req, res) => {
    CategoryModel.createCategory();
}

const handleUpdateCategory = (req, res) => {
    CategoryModel.updateCategory();
}

const handleDeleteCategory = (req, res) => {
    CategoryModel.deleteCategory();
}

module.exports = {
    handleCreateCategory,
    handleDeleteCategory,
    handleUpdateCategory,
    handleGetCategories,
    handleGetCategory
}