const express= require('express');
const productsController = require('../Controllers/productsController.js');
const productRouter = express.Router();
productRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProduct);

productRouter.route('/:id')
.put(productsController.replaceProduct)
.delete(productsController.deleteProduct);

module.exports= productRouter;