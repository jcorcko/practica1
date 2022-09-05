const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRoutes");
const app = express();

//Middleware
app.use(express.json()); //para capturar los req.body
app.use(morgan("dev")); //mide el peso de las rutas (en este caso en modo dev)
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes
app.use("/api/v1/products", productRouter);

module.exports = app;

//Server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});