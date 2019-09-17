
class Site {

    constructor() {

    }

    set({id, hid, site_name, location, vendor_id, time_zone, capacity_kw, is_inverter_exist, inverter_amt, is_panel_exist, panel_amt, is_thermometer_exist, thermomenter_amt, is_radiator_exist, radiator_amt, is_deleted, country, city, project_name, latitude, longitude}) {
        this.id = id;
        this.hid = hid;
        this.site_name = site_name;
        this.location = location;
        this.vendor_id = vendor_id;
        this.capacity_kw = capacity_kw;
        this.is_inverter_exist = is_inverter_exist;
        this.inverter_amt = inverter_amt;
        this.is_panel_exist = is_panel_exist;
        this.panel_amt = panel_amt;
        this.is_thermometer_exist = is_thermometer_exist;
        this.thermomenter_amt = thermomenter_amt;
        this.is_radiator_exist = is_radiator_exist;
        this.radiator_amt = radiator_amt;
        this.is_deleted = is_deleted;
        this.country = country;
        this.city = city;
        this.project_name = project_name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.time_zone = time_zone;
    }

    columns () { 
        return "id, hid, site_name, location, vendor_id, time_zone, capacity_kw, is_inverter_exist, inverter_amt, is_panel_exist, panel_amt, is_thermometer_exist, thermometer_amt, is_radiator_exist, radiator_amt, is_deleted, country, city, project_name, latitude, longitude";
    }

}

module.exports = Site