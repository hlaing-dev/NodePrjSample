const vendorService = require("./service.vendor")
const loginService = require("./service.authentication")
const reportService = require("./service.report")
const redisService = require("./service.redis")
const globalService = require("./service.global")

module.exports = {
    vendorService, 
    loginService, 
    reportService,
    redisService,
    globalService
}