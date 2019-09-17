const express = require("express")
const { reportController } = require("../controller")

const router = express.Router()

//@hlaingminthein
router.get("/vendors/:vendor/sites/:site/:startDate/:endDate/value", reportController.getDataTest)


module.exports = router