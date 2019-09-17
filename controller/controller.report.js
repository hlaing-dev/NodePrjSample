const { reportService } = require("../service")
const moment = require('moment')
const JSON2CSV = require('json2csv').parse;
const FileSystem = require('fs');


//@hlaingminthein
const getDataTest = (req, res) => {
    const value = req.query.type;
    console.log({value})
    const date = moment(new Date(), 'YYYYMMDD');
    const values = ['inverter', 'radiator', 'thermometer'];
    const vendor = req.params.vendor;
    const site = req.params.site;
    const inStart = req.params.startDate;
    const inEnd = req.params.endDate;
    if (value !== undefined) {
        reportService.getDataTest({ vendor, site, value, inStart, inEnd }, (err, results) => {
            if (results != null) {
                const csv = JSON2CSV(results);
                FileSystem.appendFile('/home/thaenuwin/WorkProject/' + value + "_" + date + '.csv', csv, function (err) {
                    console.log("enter save file")
                    if (err) console.log(err);
                    res.send("Save Success!");
                })
            }
        });
    }
    else {
        const dataSave = values.map(value => {
            reportService.getDataTest({ vendor, site, value, inStart, inEnd }, (err, results) => {
                if (results != null) {
                    const csv = JSON2CSV(results);
                    FileSystem.appendFile('/home/thaenuwin/WorkProject/' + value + '.csv', csv, function (err) {
                        if (err) console.log(err);
                    })
                }
            });
        })
      Promise.all(dataSave).then(d => res.json('Success Save!'))
    }
}



module.exports = {

    //@hlaingminthein
    getDataTest

}