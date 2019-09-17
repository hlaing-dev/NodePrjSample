//@thaenuwin
class Panel {
    constructor() {

    }

    set({ inverter_id , device_id ,site_id , vendor_id ,description,remark,watt,latitude,longitude,height,insert_id,insert_date }) {
        // this.id = id;
        this.inverter_id = inverter_id;
        this.device_id = device_id;
        this.site_id = site_id;
        this.vendor_id = vendor_id;
        this.description=description;
        this.remark=remark;
        this.watt=watt;
        this.latitude=latitude;
        this.longitude=longitude;
        this.height=height;
        this.insert_id=insert_id;
        this.insert_date=insert_date;
        
    }

    columns () { 
        return " inverter_id , site_id , vendor_id , device_id,description,remark,watt,latitude,longitude,height,insert_id,insert_date";
    }

}

module.exports = Panel