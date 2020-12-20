const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Deffinition du Schéma
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


//Deffinition du Model
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;


