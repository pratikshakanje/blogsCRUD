const express = require("express");

const router = express.Router()

const blogController = require("../controllers/blogController.js")

//fetch all data
router.get("/", blogController.sendBlog)

//fetch single data
router.get("/:id", blogController.sendBlogById)

//create
router.post("/", blogController.createBlog)

//update
router.patch("/:id", blogController.updateBlog)

//delete
router.delete("/:id", blogController.deleteBlog)

module.exports = router