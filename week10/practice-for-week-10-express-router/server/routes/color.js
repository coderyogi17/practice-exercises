const express = require('express');

const Router = express.Router  

const cssRouter = require("./css_styles")

const colorsRouter = Router()

colorsRouter.get("/", (req, res) =>{
  res.json("GET /colors")
})

colorsRouter.get("/:name", (req, res) =>{
  res.json("GET /colors/:name")
})

//BONUS
colorsRouter.use("/:name/css-styles", cssRouter )

module.exports = colorsRouter;