module.exports = (app) => { 
    app.use("/api/v1/products", require('../api/v1/products'));
    app.use("/api/v1/users", require("../api/v1/users"));
    app.use("/api/v1/category", require("../api/v1/category"));
    app.use("/api/v1/cart", require("../api/v1/cart"));
    app.use("/api/v1/brand", require("../api/v1/brand"));

}