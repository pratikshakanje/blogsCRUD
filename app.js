const cl = console.log;

const express = require("express")

const router = require("./routers/blogRouters")

const app = express();

app.use(express.json())

app.use("/controllerapi/blog", router)

module.exports = app