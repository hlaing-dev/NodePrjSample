const express = require("express")
const moment = require("moment")
const { vendorService, redisService } = require("./service")
const { acbeldb } = require("./db")
const redisData = require("./config/redis")
const async = require("async")
const bodyParser = require("body-parser")
const appRouter = require("./route")
const cors = require('cors')

let today = moment(new Date()).unix();
console.log("Today Date = ", today)

const app = express()
const port = 3333
/*
// clear and added
redisService.redisClient.flushall("ASYNC", () => {
    // read all vendors from db to push to redis
    vendorService.getVendorList().then(vendors => {
        vendors.forEach(vendor => {
            redisService.redisClient.hset(redisData.common.VENDOR_INFO, vendor.id, JSON.stringify(vendor))
            // create database for each vendor
            acbeldb.mypoolDifferentDBs[vendor.id] = acbeldb.mypoolDifferentDB(vendor.vendor_name.toLowerCase() + "_db")
            console.log(`Redis===>> Vendor ${vendor.vendor_name} info saved.`)
        })
    })
    vendorService.getSiteList().then(sites => {
        sites.forEach(site => {
            redisService.redisClient.hset(redisData.common.SITE_INFO, `vendor${site.vendor_id}_site${site.hid}`, JSON.stringify(site))
            console.log(`Redis===>> Site_${site.site_name} info saved.`)
        })
    })

})

redisService.redisClient.on('ready', function () {

    console.log("Redis is Ready")
})

redisService.redisClient.on("error", function (err) {
    console.log("Error " + err);
});

setInterval(() => {
    console.log("\n\n Start Scheduler --------------------> ")
    const dataTypes = ["inverter", "panel", "radiator", "thermometer"]
    redisService.getAllSites((error, siteList) => {
        Object.values(siteList).forEach(site1 => { //each site1568448070
            const site = JSON.parse(site1)
            redisService.getVendor(site.vendor_id, (error, vendor1) => {
                const vendor = JSON.parse(vendor1)
                dataTypes.forEach(dataType => { //each device
                    const tableExists = (dataType === "inverter" && site.is_inverter_exist) || (dataType === "panel" && site.is_panel_exist) || (dataType === "radiator" && site.is_radiator_exist) || (dataType === "thermometer" && site.is_thermometer_exist)
                    if (tableExists) {
                        vendorService.getDynamicData(vendor, site, dataType, (results) => {
                            results.forEach(result => {
                                redisService.redisClient.hset(redisData.live.SITE_RAW_DATA_LIVE(site.vendor_id, site.hid, dataType), result.id, JSON.stringify(result))
                                console.log(`Redis===>> Raw Live : Vendor_${vendor.vendor_name} - site_${site.site_name} info saved.`)
                            })
                        })
                    }
                }) //  
            })
        }) //============ 
    })
}, 60 * 1000)
*/

// app.use("/images", express.static(path.join(__dirname, "uploaded-images")))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, *POST*, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(appRouter)

app.listen(port, () => {
    console.log(`Acbel Api server is listening on port ${port}`);
    vendorService.getVendorList().then(vendors => {
        vendors.forEach(vendor => {
            acbeldb.mypoolDifferentDBs[vendor.id] = acbeldb.mypoolDifferentDB(vendor.vendor_name.toLowerCase() + "_db")
        })
        console.log('....ios is=>', acbeldb.mypoolDifferentDBs[1]);
    })
})