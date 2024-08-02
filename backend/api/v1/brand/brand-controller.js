const BrandModel = require("./brand-model");

const handleGetBrands = () => {
    BrandModel.retriveBrands();
}

const handleGetBrand = () => {
    BrandModel.retriveBrand();
}

const handleUpdateBrand = () => {
    BrandModel.updateBrand();
}

const handleDeleteBrand = () => {
    BrandModel.deleteBrand();
}

const handleCreateBrand = () => {
    BrandModel.createBrand();
}

module.exports = {
    handleGetBrands,
    handleDeleteBrand,
    handleCreateBrand,
    handleUpdateBrand,
    handleGetBrand
}