const express = require("express")
const { globalController } = require("../controller")

const router = express.Router()

console.log("enter global route")
//@hlaingminthein
router.get("/", globalController.getDataTest)


module.exports = router