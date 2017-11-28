const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema =  new Schema(
  {
    title: {
      type: String,
      required: [true, "Please give us a title"]
    },
    location: {
      type: String,
      required: [true, "Please give us a location for your activity"]
    },
    time: {
      type: String,
      required: [true, "Please give us a time for your activity"]
    },
    contact: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please describe your activity"]
    },
    owner: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const PostModel = mongoose.model("Post", postSchema);

module.exports = PostModel;
