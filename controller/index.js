const vendorController = require("./controller.vendor")
const loginController = require("./controller.authentication")
const rawController = require("./controller.raw")
const reportController = require("./controller.report")
const globalController = require("./controller.global")

module.exports = {
    vendorController,
    loginController,
    rawController,
    reportController,
    globalController
}