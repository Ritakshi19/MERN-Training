const express = require('express');
const productController=require('../controllers/productscontroller.js');
const productRouter = express.Router();

productRouter.route('/')
  .get(productController.getAllProducts)
  .post(productController.addProduct);

  
productRouter.route("/:id")
.delete(productController.deleteProduct)
.put(productController.updateProduct);

module.exports = productRouter;