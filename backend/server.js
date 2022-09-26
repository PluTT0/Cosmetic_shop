const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");

const app = express();

dotenv.config()

mongoose.
  connect(process.env.MONGO_URL)
  .then(() => console.log("DBConection Succesfull!!"))
  .catch((err) => console.log(err));

  app.get("/api/test", () => {
    console.log('text is successfull')
  });

  app.use(express.json())
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/products", productRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/orders", orderRouter);

app.listen(process.env.PORT || 5000,()=> {
  console.log('Backend server is running...')
});