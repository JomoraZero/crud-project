const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema =  new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Tell us your name"]
    },
    //normal login users
    email: {
      type: String,
      match: [/.+@.+/, "Email's need an @ sign"]
    },
    encryptedPassword: {type: String},
    // //facebook login user
    // facebookID: {type: String},
    //
    // //google login user
    // googleID: {type: String},

    role: {
      type: String,
      enum: ["normal", "admin"],
      default: "normal"
    },
    profilePic: {
      type: String
    },
    aboutMe: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
