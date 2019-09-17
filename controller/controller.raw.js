const { vendorService } = require("../service")
const response = require("../model/response")
const db = require("../db/index")

const getDynamicDataList = (req, res) => {
    const vendorId = req.query.vendorId;
    const siteId = req.query.siteId;
    const value = req.params.value
    const startTbName = 'tbl_site';
    vendorId != undefined ?
        vendorService.getVendor({ vendorId }, data => {
            const dbname = data.vendor_name.toLowerCase().concat('_db');
            getSiteListByVendor({ vendorId }, data => {
                data.forEach(d => {
                    const tbname = startTbName.concat(d.hid, '_', value, '_data')
                    // vendorService.getDynamicData({ dbname, tbname }, data => {
                    //     console.log({data,dbname,tbname})
                    // })
                })

            })
        })
        :
        vendorService.getVendorList()
            .then(res => res.map(v => {
                const dbname = { dbname: v.vendor_name.toLowerCase().concat('_db'), vid: v.id }
                const vendorDb = db.acbeldb.mypoolDifferentDB(dbname.dbname)
                const sites = vendorService.getSiteListByVendor(dbname.vid)
                const dataResult = sites.then(res => res.map(v => {
                    const tbname = startTbName.concat(v.hid, '_', value, '_data')
                    console.log({ dbname: dbname.dbname, tb: tbname })
                    const result = vendorService.getDynamicDataList(dbname.dbname, tbname, vendorDb)
                    result.then(res => console.log({ res })) // save res to redis database
                }))
            }))
}
// const getDataDynamic = (req,res) =>{
//     const siteId= req.params.siteId
//     const vendorId = req.params.vendorId
//     const value= req.params.value
// }


module.exports = {
    getDynamicDataList,
    // getDataDynamic

}