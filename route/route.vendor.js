const express = require("express")
const { vendorController } = require("../controller")
const { verifyToken } = require('../security/token')
const response = require('../model/response')

const router = express.Router()

router.use((req, res, next) => {
    // authentication process here
    // if success
    /*
    //@maythu
    const header = req.headers.authorization
    if(header !== undefined && header.startsWith("Bearer")){
        var token=header.replace("Bearer ","")
        verifyToken(token, (err, data) => {
                if(err) res.status(400).json({message: err.message})
                else {
                    console.log({ loginUser : data })
                    next()
                }
            })  
         }
    // if fail
    else{
         res.json(response({ success: false, message: "Please provide header value" }))
    }
    */
    next()

})

router.get("/", vendorController.getVendorList)//fin

router.get("/sites", vendorController.getSiteList)//fin

router.get("/:vendorId/sites", vendorController.getSiteListByVendor)//fin

router.get("/:vendorId/sites/:siteId", vendorController.getSiteById)//fin

router.get("/:vendorId", vendorController.getVendor)//fin

//@thaenuwin
router.get("/:vendorId/sites/:siteId/inverters", vendorController.getInverter)//fin

//@thaenuwin
router.get("/:vendorId/sites/:siteId/inverters/:inverterId", vendorController.getInverterByInverterId)//fin

//@thaenuwin
router.get("/:vendorId/sites/:siteId/panels", vendorController.getPanel)//fn

//@thaenuwin
router.get("/:vendorId/sites/:siteId/panels/:panelId", vendorController.getPanelByPanelId)//fin

//@thaenuwin
router.get("/:vendorId/sites/:siteId/inverters/:inverterId/panels", vendorController.getPanelAndPanelInfoByInverterlId)//fin

//@thaenuwin
router.get("/:vendorId/sites/:siteId/inverters/:inverterId/panels/:panelId", vendorController.getPanelByInverterId)//fin

//@thaenuwin
router.get("/panelInfo/:vendorId/sites/:siteId", vendorController.getPanelAndPanelInfo) // select all new route for inner join with panel info // result same with all panels  api




module.exports = router