const express = require("express");
const mongoose = require("mongoose");
const Blogs = require("../model/blogs");
const Seller = require("../model/bestseller");
// require("../model/category");

const Category = require("../model/category");
// import { userModel } from "../Models/User.js";

const router = express.Router();

router.get("/cat", async (req, res) => {
  try {
    const response = await Category.find({});
    res.json(response);
  } catch (err) {
    return res.json(err);
  }
});

router.post("/cat", async (req, res) => {
  //   const { name: name, image: image } = req.body;
  const product = new Category(req.body);
  console.log(product);
  try {
    const resp = await product.save();
    res.json(resp);
  } catch (err) {
    return resp.json(err);
  }
});

router.get("/blogs", async (req, res) => {
  try {
    const response = await Blogs.find({}).limit(3);
    res.json(response);
  } catch (err) {
    return res.json(err);
  }
});

router.get("/seller", async (req, res) => {
  try {
    const response = await Seller.find({}).limit(3);
    res.json(response);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
