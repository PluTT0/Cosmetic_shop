const mogoose = require("mongoose");

const ProductSchema = new mogoose.Schema(
  {
    title: { type: String , required:true, unique:true},
    desc: { type: String , required:true,},
    img: { type: String , required:true,},
    categories: { type: Array},
    value: { type: String ,},
    price: { type: Number , required:true,},
  },
  {
    timestamps: true,
  }
);

module.exports = mogoose.model("Product", ProductSchema)