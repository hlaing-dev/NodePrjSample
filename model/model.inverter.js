//@thaenuwin
class Inverter {
    constructor() {

    }

    set({id, inv_dint , site_id , vendor_id , module }) {
        this.id = id;
        this.inv_dint = inv_dint;
        this.site_id = site_id;
        this.vendor_id = vendor_id;
        this.module = module;
    }

    columns () { 
        return "id, inv_dint , site_id , vendor_id , module";
    }

}

module.exports = Inverter