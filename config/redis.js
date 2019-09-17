
const SITE_RAW_DATA_LIVE = (vendorId, siteId, deviceType) => `RAW_DATA_LIVE_${deviceType.toUpperCase()}_VENDOR${vendorId}_SITE${siteId}`

const INVERTER_DATA = "INVERTER_DATA"

const PANEL_DATA = "PANEL_DATA"

const RADIATOR_DATA = "RADIATOR_DATA"

const VENDOR_INFO = "VENDOR_INFO"

const SITE_INFO = "SITE_INFO"

module.exports = {
    common: {
        INVERTER_DATA,
        PANEL_DATA,
        RADIATOR_DATA,
        VENDOR_INFO,
        SITE_INFO,
    },
    live: {
        SITE_RAW_DATA_LIVE
    }
}
