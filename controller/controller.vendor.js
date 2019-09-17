const { vendorService } = require("../service")
const response = require("../model/response")

const getSiteList = (req, res) => {
    vendorService.getSiteList()
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

const getSiteById = (req, res) => {
    const siteId = req.params.siteId
    const vendorId = req.params.vendorId
    vendorService.getSiteById(siteId, vendorId)
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

const getSiteListByVendor = (req, res) => {
    const vendorId = req.params.vendorId
    vendorService.getSiteListByVendor(vendorId)
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

const getVendorList = (req, res) => {
    console.log('enter venodr list')
    vendorService.getVendorList()
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

const getVendor = (req, res) => {
    const vendorId = req.params.vendorId
    vendorService.getVendor(vendorId)
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

//@thaenuwin
const getInverter = (req, res) => {
    const siteId = req.params.siteId
    const vendorId = req.params.vendorId
    vendorService.getInverterList(siteId, vendorId)
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

//@thaenuwin
const getInverterByInverterId = (req, res) => {
    const siteId = req.params.siteId
    const vendorId = req.params.vendorId
    const inverterId = req.params.inverterId
    vendorService.getInverterListByInverterlId(siteId, vendorId, inverterId)
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

//@thaenuwin
const getPanel = (req, res) => {
    const siteId = req.params.siteId
    const vendorId = req.params.vendorId
    console.log({ siteId, vendorId })
    vendorService.getPanelList(siteId, vendorId)
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

//@thaenuwin
const getPanelByPanelId = (req, res) => {
    const siteId = req.params.siteId
    const vendorId = req.params.vendorId
    const panelId = req.params.panelId
    vendorService.getPanelListByPanelId(siteId, vendorId, panelId)
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

//@thaenuwin
const getPanelByInverterId = (req, res) => {
    const siteId = req.params.siteId
    const vendorId = req.params.vendorId
    const panelId = req.params.panelId
    const inverterId = req.params.inverterId
    vendorService.getPanelListByInverterlId(siteId, vendorId, panelId, inverterId)
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

const getPanelAndPanelInfo = (req, res) => {
    const siteId = req.params.siteId
    const vendorId = req.params.vendorId
    vendorService.getPanelAndPanelInfo(siteId, vendorId)
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}

const getPanelAndPanelInfoByInverterlId = (req, res) => {
    const siteId = req.params.siteId
    const vendorId = req.params.vendorId
    const inverterId = req.params.inverterId
    vendorService.getPanelAndPanelInfoByInverterId(siteId, vendorId, inverterId)
        .then(data => res.json(response({ payload: data })))
        .catch(error => res.json({ message: 'something wrong', success: false, error }))
}



module.exports = {
    getSiteList,
    getVendorList,
    getVendor,
    getSiteListByVendor,
    getSiteById,
    getInverter,
    getInverterByInverterId,
    getPanel,
    getPanelByPanelId,
    getPanelByInverterId,
    getPanelAndPanelInfo,
    getPanelAndPanelInfoByInverterlId,

}