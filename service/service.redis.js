const redis = require("redis")
const redisData = require("../config/redis")

const redisClient = redis.createClient({ host: '192.168.100.16', port: 6379, password: 'root' });

const getVendor = (vendorId, callback) => redisClient.hget(redisData.common.VENDOR_INFO, vendorId, callback) 

const getAllVendors = (callback) => redisClient.hgetall(redisData.common.VENDOR_INFO, callback) 

const getSite = (vendorId, siteId, callback) => redisClient.hget(redisData.common.SITE_INFO, `vendor${vendorId}_site${siteId}`, callback) 

const getAllSites = (callback) => redisClient.hgetall( redisData.common.SITE_INFO, callback )

module.exports = {
    redisClient,
    getVendor,
    getAllVendors,
    getSite,
    getAllSites,
}