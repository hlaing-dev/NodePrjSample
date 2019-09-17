const { acbeldb } = require("../db")
const db = require("../db/index")
const moment = require('moment')

const getTestGlobal = () => {
    console.log("enter service")
    return acbeldb.readSiteList() // get data from redis global data
}


module.exports = {
    getTestGlobal

}