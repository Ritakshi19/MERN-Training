const express = require('express');
const userController = require("../controllers/usercontroller.js");
const userRouter= express.Router();

userRouter.route('/')
  .get(userController.getAllProducts)
  .post(userController.addProduct)
  .delete(userController.deleteProduct)
  .put(userController.updateProduct);

module.exports = userRouter;
