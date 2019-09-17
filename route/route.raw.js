const express = require("express")
const { rawController } = require("../controller")
const {verifyToken} = require('../security/token')
const response = require('../model/response')

const router = express.Router()

router.use((req, res, next) => {
    // authentication process here
    // if success

    //@maythu
    // const header = req.headers.authorization
    // if(header !== undefined && header.startsWith("Bearer")){
    //     var token=header.replace("Bearer ","")
    //     verifyToken(token, (err, data) => {
    //             if(err) res.status(400).json({message: err.message})
    //             else {
    //                 console.log({ loginUser : data })
    //                 next()
    //             }
    //         })  
    //      }
    // // if fail
    // else{
    //      res.json(response({ success: false, message: "Please provide header value" }))
    // }

})

router.get("/vendors/:value", rawController.getDynamicDataList)

// router.get("/vendors/:vendorId/sites/:siteId/value/:value", rawController.getDynamicData)


module.exports = router