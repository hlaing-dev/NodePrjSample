const mysql = require('mysql');
const model = require("../model")
const { produceToken } = require("../security/token")
const moment = require('moment')
const util = require("util")

require("dotenv").config();

const mypool = mysql.createPool({
    connectionLimit: process.env.DB_POOL_SIZE,
    host: process.env.DB_ACBEL_HOST,
    user: process.env.DB_ACBEL_USER,
    password: process.env.DB_ACBEL_PASS,
    database: process.env.DB_ACBEL_NAME1
});

const mypoolDifferentDBs = {}

const mypoolDifferentDB = dbname => mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_ACBEL_HOST,
    user: process.env.DB_ACBEL_USER,
    password: process.env.DB_ACBEL_PASS,
    database: dbname
});

const readVendorList = () => {
    const vendor = new model.Vendor()
    query = util.promisify(mypool.query).bind(mypool)

    const site = new model.Site()
    return query(`SELECT ${vendor.columns()} from tbl_vendor`)
    // return query(`SELECT ${vendor.columns()} from t`)
    mypool.end();

}

const readVendor = (vendorId) => {

    query = util.promisify(mypool.query).bind(mypool)

    const vendor = new model.Vendor()
    return query(`SELECT ${vendor.columns()} from tbl_vendor where id=${vendorId}`)
    mypool.end();
}

const readSiteList = (vendorId) => {
    query = util.promisify(mypool.query).bind(mypool)

    const site = new model.Site()
    return query(`SELECT ${site.columns()} from tbl_sites ${vendorId ? `where vendor_id=${vendorId}` : ''}`)
    mypool.end();
}

const readSite = (siteId, vendorId) => {
    query = util.promisify(mypool.query).bind(mypool)

    const site = new model.Site()
    return query(`SELECT ${site.columns()} from tbl_sites where hid=${siteId} and vendor_id=${vendorId}`)
    mypool.end();
}


//@maythu
const login = ({ username, password }, callback) => {
    mypool.query(`SELECT * from tbl_account where username='${username}' and password='${password}'`, (error, results, fields) => {
        if (error) callback(error, null)
        if (results.length) {
            const payload = {
                payload: results[0].username,
                role: results[0].role,
                vendor_id: results[0].vendor_id
            }
            const token = produceToken(payload);
            const data = {
                token: token,
                username: results[0].username,
                role: results[0].role,
                vendor_id: results[0].vendor_id
            }
            callback(null, data)
        } else {
            callback("Username and password does not match.", null)
        }
    })
}

//@thaenuwin
const readInverter = (siteId, vendorId) => {
    // const inverter = new model.Inverter();
    // mypool.query(`SELECT ${inverter.columns()} from tbl_inverter where site_id=${siteId} and vendor_id=${vendorId}`, (error, results, fields) => {
    //     if (error) callback(error, null)
    //     else {
    //         const dataList = results.map(v => {
    //             const data = new model.Inverter();
    //             data.set(v)
    //             return data
    //         })
    //         callback(null, dataList)
    //     }
    // })

    query = util.promisify(mypool.query).bind(mypool)

    const inverter = new model.Inverter();
    return query(`SELECT ${inverter.columns()} from tbl_inverter where site_id=${siteId} and vendor_id=${vendorId}`)
    mypool.end();
}

//@thaenuwin
const readInverterByInverterId = (siteId, vendorId, inverterId) => {
    // const inverter = new model.Inverter();
    // mypool.query(`SELECT ${inverter.columns()} from tbl_inverter where site_id=${siteId} and vendor_id=${vendorId} and inv_dint='${inverterId}'`, (error, results, fields) => {
    //     if (error) callback(error, null)
    //     else {
    //         const dataList = results.map(v => {
    //             const data = new model.Inverter();
    //             data.set(v)
    //             return data
    //         })
    //         callback(null, dataList)
    //     }
    // })

    query = util.promisify(mypool.query).bind(mypool)

    const inverter = new model.Inverter();
    return query(`SELECT ${inverter.columns()} from tbl_inverter where site_id=${siteId} and vendor_id=${vendorId} and inv_dint='${inverterId}'`)
    mypool.end();
}


//@thaenuwin
const readPanel = (siteId, vendorId) => {
    // const panel = new model.Panel();
    // // mypool.query(`SELECT ${panel.columns()} from tbl_panel where site_id=${siteId} and vendor_id=${vendorId}`, (error, results, fields) => {
    // mypool.query(`SELECT * FROM tbl_panel_info as pinfo INNER JOIN tbl_panel as p ON p.device_id = pinfo.panel_no where pinfo.vendor_id = ${vendorId} and pinfo.site_id = ${siteId} `, (error, results, fields) => {
    //     if (error) callback(error, null)
    //     else {
    //         const dataList = results.map(v => {
    //             const data = new model.Panel();
    //             data.set(v)
    //             return data
    //         })
    //         callback(null, dataList)
    //     }
    // })
    query = util.promisify(mypool.query).bind(mypool)
    const panel = new model.Panel();
    return query(`SELECT * FROM tbl_panel_info as pinfo INNER JOIN tbl_panel as p ON p.device_id = pinfo.panel_no where pinfo.vendor_id = ${vendorId} and pinfo.site_id = ${siteId}`)
    mypool.end();
}

//@thaenuwin
const readPanelByPanelId = (siteId, vendorId, panelId) => {
    // const panel = new model.Panel();
    // // mypool.query(`SELECT ${panel.columns()} from tbl_panel where site_id=${siteId} and vendor_id=${vendorId} and device_id='${panelId}'`, (error, results, fields) => {
    // mypool.query(`SELECT * FROM tbl_panel_info as pinfo INNER JOIN tbl_panel as p ON p.device_id = pinfo.panel_no where pinfo.vendor_id = ${vendorId} and pinfo.site_id = ${siteId} and pinfo.panel_no='${panelId}'`, (error, results, fields) => {
    //     if (error) callback(error, null)
    //     else {
    //         const dataList = results.map(v => {
    //             const data = new model.Panel();
    //             data.set(v)
    //             return data
    //         })
    //         callback(null, dataList)
    //     }
    // })

    query = util.promisify(mypool.query).bind(mypool)

    const panel = new model.Panel();
    return query(`SELECT * FROM tbl_panel_info as pinfo INNER JOIN tbl_panel as p ON p.device_id = pinfo.panel_no where pinfo.vendor_id = ${vendorId} and pinfo.site_id = ${siteId} and pinfo.panel_no='${panelId}'`)
    mypool.end();

}

//@thaenuwin
const readPanelByInverterId = (siteId, vendorId, panelId, inverterId) => {
    // const panel = new model.Panel();
    // // mypool.query(`SELECT ${panel.columns()} from tbl_panel where site_id=${siteId} and vendor_id=${vendorId} and device_id='${panelId}' and inverter_id='${inverterId}'`, (error, results, fields) => {
    // mypool.query(`SELECT * FROM tbl_panel_info as pinfo INNER JOIN tbl_panel as p ON p.device_id = pinfo.panel_no where pinfo.vendor_id = ${vendorId} and pinfo.site_id = ${siteId} and pinfo.panel_no='${panelId}' and pinfo.inverter_no='${inverterId}'`, (error, results, fields) => {
    //     if (error) callback(error, null)
    //     else {
    //         const dataList = results.map(v => {
    //             const data = new model.Panel();
    //             data.set(v)
    //             return data
    //         })
    //         callback(null, dataList)
    //     }
    // })

    query = util.promisify(mypool.query).bind(mypool)

    const panel = new model.Panel();
    return query(`SELECT * FROM tbl_panel_info as pinfo INNER JOIN tbl_panel as p ON p.device_id = pinfo.panel_no where pinfo.vendor_id = ${vendorId} and pinfo.site_id = ${siteId} and pinfo.panel_no='${panelId}' and pinfo.inverter_no='${inverterId}'`)
    mypool.end();
}


//@thaenuwin
const readPanelAndPanelInfo = (siteId, vendorId) => {
    // const panel = new model.Panel();
    // mypool.query(`SELECT * FROM tbl_panel_info as pinfo INNER JOIN tbl_panel as p ON p.device_id = pinfo.panel_no where pinfo.vendor_id = ${vendorId} and pinfo.site_id = ${siteId}`, (error, results, fields) => {

    //     if (error) callback(error, null)
    //     else {
    //         const dataList = results.map(v => {
    //             const data = new model.Panel();
    //             data.set(v)
    //             return data
    //         })
    //         callback(null, dataList)
    //     }
    // })

    query = util.promisify(mypool.query).bind(mypool)

    const panel = new model.Panel();
    return query(`SELECT * FROM tbl_panel_info as pinfo INNER JOIN tbl_panel as p ON p.device_id = pinfo.panel_no where pinfo.vendor_id = ${vendorId} and pinfo.site_id = ${siteId} `)
    mypool.end();
}

//@thaenuwin
const readPanelAndPanelInfoByInverterId = (siteId, vendorId, inverterId) => {
    // const panel = new model.Panel();
    // mypool.query(`SELECT * FROM tbl_panel_info as pinfo INNER JOIN tbl_panel as p ON p.device_id = pinfo.panel_no where pinfo.vendor_id = ${vendorId} and pinfo.site_id = ${siteId} and pinfo.inverter_no='${inverterId}'`, (error, results, fields) => {
    //     if (error) callback(error, null)
    //     else {
    //         const dataList = results.map(v => {
    //             const data = new model.Panel();
    //             data.set(v)
    //             return data
    //         })
    //         callback(null, dataList)
    //     }
    // })
    query = util.promisify(mypool.query).bind(mypool)

    const panel = new model.Panel();
    return query(`SELECT * FROM tbl_panel_info as pinfo INNER JOIN tbl_panel as p ON p.device_id = pinfo.panel_no where pinfo.vendor_id = ${vendorId} and pinfo.site_id = ${siteId} and pinfo.inverter_no='${inverterId}'`)
    mypool.end();
}


// var dateString = moment.unix(1568370000).format("MM/DD/YYYY hh:mm:ss");
//@thaenuwin
// const readDynamicData = (dbname, tbname, vendorDb) => {

//     // const todaysix = moment(new Date()).subtract('hour', 5).unix();

//     // const today = moment(new Date()).unix()

//     query = util.promisify(vendorDb.query).bind(vendorDb)
//     return query(`SELECT * FROM ${tbname} where timestamp between ${todaysix} and ${today}`)
//     mypool.end();
// }

//@hlaingminthein
var readDynamicData = (vendorId, tbname, startTime, endTime) => {
    // var dateArr = Object.values(req.body);
    // var startDate = date.startDate(dateArr[0]);
    // var endDate = date.endDate(dateArr[1]);
    // mySqlconnection.query("SELECT * FROM tbl_site2084_" + type + "_data WHERE timestamp BETWEEN \'" + startDate + "\' AND \'" + endDate + "\' LIMIT 50 ", (err, rows, fields) => {
    //     callback(err, rows);
    // });
    // query = util.promisify(vendorDb.query).bind(vendorDb)
    // return query(`SELECT * FROM ${tbname} where timestamp between ${startDate} and ${endDate}`)
    // mypool.end();
    console.log("(1) is=>",  vendorId);
    console.log("(2) is=>",  `${vendorId}`);
    const vendorDb = mypoolDifferentDBs[`${vendorId}`]
    // console.log({ startTime: startTime.unix(), endTime: endTime.unix() })
    // console.log(startTime.unix(), endTime.unix())
    // const todaysix = moment(new Date()).subtract('min', 1).unix();
    // const today = moment(new Date()).unix()
    // console.log("SQL: ", `SELECT * FROM ${tbname} where timestamp between ${todaysix} and ${today}`)
    // console.log(`SELECT * FROM ${tbname} where timestamp between ${startTime.unix()} and ${endTime.unix()}`)

    query = util.promisify(vendorDb.query).bind(vendorDb)
    return query(`SELECT * FROM ${tbname} where timestamp between ${startTime.unix()} and ${endTime.unix()}`)
    mypool.end();
}


module.exports = {
    mypool,
    readSiteList,
    readVendorList,
    readVendor,
    readSite,
    login,
    readInverter,
    readInverterByInverterId,
    readPanel,
    readPanelByPanelId,
    readPanelByInverterId,
    readPanelAndPanelInfo,
    readPanelAndPanelInfoByInverterId,
    readDynamicData,

    //@nayhtet
    mypoolDifferentDB,
    mypoolDifferentDBs

}