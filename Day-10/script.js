const { json } = require("body-parser"); //Middleware
const productRouter= require("./routes/productRoute.js")
const userRouter= require("./routes/userRoute.js")
const fsPromises = require("fs/promises");

const express = require("express");
// const fs= require('fs');
const app = express();


app.use(express.json());

// app.use((req, res, next) => {
//   // console.log(req.url);
//   const time = new Date().toLocaleString();
//   fsPromises.appendFile("./log.txt", req.url + "\n" + time);
//   next();
// });


app.use('/api/products', productRouter);
app.use('/api/users',userRouter);





// app.get('/api/products', productController.getAllProducts);
// app.post('/api/products', productController.addProduct);
// app.delete('/api/products/:id', productController.deleteProduct);
// app.put('/api/products/:id', productController.updateProduct);

// app.get('/api/users',userController.getAllProducts);
// app.post('/api/users',userController.addProduct);
// app.delete('/api/users',userController.deleteProduct);
// app.put('/api/users',userController.updateProduct);

app.listen(1400);
