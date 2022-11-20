const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: "users" }
);

module.exports = mongoose.model("User", authSchema);
