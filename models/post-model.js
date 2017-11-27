const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema =  new Schema(
  {
    title: {
      type: String,
      required: [true, "Please give us a title"]
    },
    photoUrl: {
      type: String
    },
    description: {
      type: String,
      required: [true, "Please describe your activity"]
    },
    owner: {
      type: Schema.Types.ObjectId,
      require: true
    }
  },
  {
    timestamps: true
  }
);

const PostModel = mongoose.model("Post", roomSchema);

module.exports = PostModel;
