const mogoose = require("mongoose");

const CartSchema = new mogoose.Schema(
  {
    userId: { type: String , required:true,},
    products: [
      {
        productId:{
          type: String
        },
        quantity:{
          type: Number,
          default: 1,
        }
      }
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mogoose.model("Cart", CartSchema)