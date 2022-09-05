const express = require("express");
const productController = require("./../controllers/productController");
const productRouter = express.Router();

//Product Routes
productRouter
    .route("/")
    .get(productController.getAllProducts)
    .post(productController.createProduct);
productRouter.route("/:id")
    .get(productController.showProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = productRouter;