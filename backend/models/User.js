const mogoose = require("mongoose");

const UserSchema = new mogoose.Schema(
  {
    username: { type: String , required:true, unique:true},
    email: { type: String , required:true, unique:true},
    password: { type: String , required:true, unique:true},
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mogoose.model("User", UserSchema)