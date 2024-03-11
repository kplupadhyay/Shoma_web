const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

// Define the schema structure
const blogsSchema = new Schema({
  image: {
    type: String,
  },
  text: {
    type: String,
  },
  price: {
    type: Number,
  },

  createdAt: { type: Date, default: Date.now },
});

// Create a model based on the schema
const Blogs = mongoose.model("Blog", blogsSchema);

// Export the model
module.exports = Blogs;
