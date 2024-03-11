const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

// Define the schema structure
const sellerSchema = new Schema({
  image: {
    type: String,
  },
  text: {
    type: String,
  },

  createdAt: { type: Date, default: Date.now },
});

// Create a model based on the schema
const Seller = mongoose.model("Seller", sellerSchema);

// Export the model
module.exports = Seller;
