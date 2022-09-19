const express = require("express");
const productController = require("./../controllers/productController");
const authController = require("./../controllers/authController");
const productRouter = express.Router();

//Product Routes
productRouter
    .route("/")
    .all(authController.protect)
    .get(productController.getAllProducts)
    .post(productController.createProduct);
productRouter
    .route("/:id")
    .all(authController.protect)
    .get(productController.showProduct)
    .put(productController.updateProduct)
    //.patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = productRouter;