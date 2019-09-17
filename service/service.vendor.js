const { acbeldb } = require("../db")
const db = require("../db/index")
const moment = require('moment')

const getSiteList = () => {
    return acbeldb.readSiteList()
}

const getSiteById = (siteId, vendorId) => {
    return acbeldb.readSite(siteId, vendorId)
}

const getSiteListByVendor = (vendorId) => {
    return acbeldb.readSiteList(vendorId)
}


const getVendorList = () => {
    // acbeldb.readVendorList({}, (error, dataList) => {
    //     if (error) throw error
    //     callback(dataList)
    // })
    console.log("I am vendor list");
    return acbeldb.readVendorList()
}

const getVendor = (vendorId) => {
    return acbeldb.readVendor(vendorId)
}

//@thaenuwin
const getInverterList = (siteId, vendorId) => {
    return acbeldb.readInverter(siteId, vendorId)
}

//@thaenuwin
const getInverterListByInverterlId = (siteId, vendorId, inverterId) => {
    return acbeldb.readInverterByInverterId(siteId, vendorId, inverterId)
}

//@thaenuwin
const getPanelList = (siteId, vendorId) => {
    return acbeldb.readPanel(siteId, vendorId)
}

//@thaenuwin
const getPanelListByPanelId = (siteId, vendorId, panelId) => {
    return acbeldb.readPanelByPanelId(siteId, vendorId, panelId)
}

//@thaenuwin
const getPanelListByInverterlId = (siteId, vendorId, panelId, inverterId) => {
    return acbeldb.readPanelByInverterId(siteId, vendorId, panelId, inverterId)
}

//@thaenuwin
const getPanelAndPanelInfo = (siteId, vendorId) => {
    return acbeldb.readPanelAndPanelInfo(siteId, vendorId)
}

//@thaenuwin
const getPanelAndPanelInfoByInverterId = (siteId, vendorId, inverterId) => {
    return acbeldb.readPanelAndPanelInfoByInverterId(siteId, vendorId, inverterId);
}

//@thaenuwin
// const getDynamicData = (vendor, site, value) => {
//     const startTbName = 'tbl_site';
//     const dbname = vendor.vendor_name.toLocaleLowerCase().concat('_db')
//     const tbname = startTbName.toLocaleLowerCase().concat(site.hid, '_', value, '_data')
//     const vendorDb = db.acbeldb.mypoolDifferentDB(dbname)
//     // const vendorDb = mypoolDifferentDBs[`${vendorId}`]
//     const startTime = moment().subtract("minute", 1)
//     const endTime = moment()
//     const result = acbeldb.readDynamicData(tbname, vendorDb, startTime, endTime)
//     result.then(res => console.log({ res })) // save res to redis database
// }

//@thaenuwin
const getDynamicData = (vendor, site, value, callback) => {
    const startTbName = 'tbl_site';
    const tbname = startTbName.toLocaleLowerCase().concat(site.hid, '_', value, '_data')
    const startTime = moment().subtract("minute", 1)
    const endTime = moment()
    // console.log({startTime,endTime})
    const result = acbeldb.readDynamicData(vendor.id, tbname, startTime, endTime)
    result.then(callback)
}


module.exports = {
    getSiteList,
    getVendorList,
    getVendor,
    getSiteListByVendor,
    getSiteById,
    getInverterList,
    getInverterListByInverterlId,
    getPanelList,
    getPanelListByPanelId,
    getPanelListByInverterlId,
    getPanelAndPanelInfo,
    getPanelAndPanelInfoByInverterId,
    getDynamicData,

}