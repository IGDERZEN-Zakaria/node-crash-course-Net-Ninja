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
// Mongoose va prendre  l'argument 'Blog'  et le rendre au pluriel et le chercher dans la base de données
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;


