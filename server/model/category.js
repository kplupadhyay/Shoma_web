const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

// Define the schema structure
const userSchema = new Schema({
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
const Category = mongoose.model("User", userSchema);

// Export the model
module.exports = Category;
