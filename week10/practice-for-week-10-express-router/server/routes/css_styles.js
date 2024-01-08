const express = require("express")
const Router = express.Router;
const cssRouter = Router()


cssRouter.post("/", (req, res) =>{
    res.json("POST /colors/:name/css-styles")

})

cssRouter.delete("/:style", (req, res) =>{
    res.json("DELETE /colors/:name/css-styles/:style")
})

module.exports = cssRouter;