const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      ref: "User",
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true, collection: "posts" }
);

module.exports = mongoose.model("Post", postSchema);
