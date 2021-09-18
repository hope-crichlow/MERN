const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/product/test", ProductController.test)
};