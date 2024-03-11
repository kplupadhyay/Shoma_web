// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// import { CategoryRoute } from "./router/route";
const router = require("./router/route");

// Create an instance of Express
const app = express();
app.use(cors());

app.use("/api", router);

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const url =
  "mongodb+srv://upadhyaykapil61:7982540594@cluster0.ufcxmjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB using Mongoose
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Start the server
const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
