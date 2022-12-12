const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema is json obj that defines structure of your data
const blogSchema = new Schema({
  title: String,
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// create a blog using a schema
module.exports = mongoose.model("Blog", blogSchema); 