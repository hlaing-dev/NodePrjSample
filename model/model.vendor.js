
class Vendor {
    constructor() {

    }

    set({id, username, vendor_name, time_zone}) {
        this.id = id;
        this.username = username;
        this.vendor_name = vendor_name;
        this.time_zone = time_zone;
    }

    columns () { 
        return "id, username, vendor_name,time_zone";
    }

}

module.exports = Vendor