const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const paymentRouter= require("./routes/stripe");
const cors = require('cors');
const app = express();


dotenv.config()

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}


const currentPort = process.env.PORT || 5000;
mongoose.
  connect(process.env.MONGO_URL)
  .then(() => console.log("DBConection Succesfull!!"))
  .catch((err) => console.log(err));

  app.get("/api/test", () => {
    console.log('text is successfull');
  });

  app.use(express.json())
  app.use(cors(corsOptions));
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/products", productRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/orders", orderRouter);
  app.use("/api/checkout/", paymentRouter);

app.listen(currentPort, ()=> {
  console.log(`Backend server is running on port ${currentPort}`);
});