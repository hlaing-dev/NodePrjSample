const express = require('express')
const vendorRouter = require("./route.vendor")
const authRouter = require("./route.authentication")
const rawRouter = require("./route.raw")
const reportRouter = require("./route.report")
const globalRouter = require("./route.global")

const router = express.Router()

router.use("/vendors", vendorRouter)
router.use("/auth", authRouter)
router.use("/raw", rawRouter)
router.use("/reports", reportRouter)
router.use("/global", globalRouter)

module.exports = router