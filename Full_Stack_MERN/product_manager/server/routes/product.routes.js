const ProductController = require("../controllers/product.controller");
// DEFINE ROUTES
// Use the methods written in controller file "module.exports._method_name_"
module.exports = app => {
// TEST ROUTE
  app.get("/api/product/test", ProductController.test),
// CREATE
  app.post("/api/product/new", ProductController.createProduct),
// READ
  app.get("/api/product", ProductController.getAllProducts),
  app.get("/api/product/:product_id", ProductController.getOneProduct),
// UPDATE
  app.put("/api/product/:product_id", ProductController.updateProductByID),
// DELETE
  app.delete("/api/product/:product_id", ProductController.deleteProduct)
};