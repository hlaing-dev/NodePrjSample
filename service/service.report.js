const { acbeldb } = require("../db")
const db = require("../db/index")
const moment = require('moment')

// @hlaingminthein
const getDataTest = ({ vendor, site, value, inStart, inEnd }, callback) => {
    const startDate = changeStartDate(inStart);
    const endDate = changeEndDate(inEnd);
    const vendorId = parseInt(vendor);
    const startTbName = 'tbl_site';
    console.log({vendorId})
    const tbname = startTbName.toLocaleLowerCase().concat(site, '_', value, '_data')

    const result = acbeldb.readDynamicData(vendorId, tbname, startDate, endDate)
    result.then(res => callback(null, res))
        .catch(err => callback(err, null))
}


const changeStartDate = (d) => {
    var tmpDate = moment(new Date(d)).format("YYYY-MM-DD");
    return moment(new Date(tmpDate + "T00:00:00.000Z")).valueOf() / 1000;
}

const changeEndDate = (d) => {
    var tmpDate = moment(new Date(d)).format("YYYY-MM-DD");
    return moment(new Date(tmpDate + "T23:59:59.000Z")).valueOf() / 1000;
}

module.exports = {
    //@hlaingminthein
    getDataTest,
    changeStartDate,
    changeEndDate


}