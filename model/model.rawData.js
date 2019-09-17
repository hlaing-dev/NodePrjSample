//@thaenuwin
class rawData {
    constructor() {

    }

    set({ id,timestamp , device_id,site_id,error_code ,
         error_code_raw,lifetime_power,
         dc_voltage,dc_current,dc_power,ac_phase1_voltage,
         ac_phase2_voltage,ac_phase3_voltage,ac_phase1_current,
         ac_phase2_current,ac_phase3_current,power_factor,
        ac_active_power,ac_reactive_power,grid_frequency,
        operation_state,operation_state_raw,internal_temp,
        lifetime_operation_hour}) {

        this.id = id;
        this.timestamp = timestamp;
        this.device_id = device_id;
        this.site_id = site_id;
        this.error_code = error_code;
        this.error_code_raw=error_code_raw ;
        this.lifetime_power=lifetime_power;
        this.dc_voltage=dc_voltage !== undefined ? JSON.parse(dc_voltage) :undefined ;
        this.dc_current=dc_current !== undefined ? JSON.parse(dc_current) : undefined;
        this.dc_power=dc_power;

        this.ac_phase1_voltage=ac_phase1_voltage;
        this.ac_phase2_voltage=ac_phase2_voltage;
        this.ac_phase3_voltage=ac_phase3_voltage;

        this.ac_phase1_current=ac_phase1_current;
        this.ac_phase2_current=ac_phase2_current;
        this.ac_phase3_current=ac_phase3_current;

        this.power_factor=power_factor;
        this.ac_active_power=ac_active_power;
        this.ac_reactive_power=ac_reactive_power;
        this.grid_frequency=grid_frequency;
        this.operation_state=operation_state;

        this.operation_state_raw=operation_state_raw;
        this.internal_temp=internal_temp;
        this.lifetime_operation_hour=lifetime_operation_hour;
        
    }

    columns () { 
        return " id,timestamp , device_id,site_id,error_code ,error_code_raw,lifetime_power,dc_voltage,dc_current,dc_power,ac_phase1_voltage,ac_phase2_voltage,ac_phase3_voltage,ac_phase1_current,ac_phase2_current,ac_phase3_current,power_factor,ac_active_power,ac_reactive_power,grid_frequency,operation_state,operation_state_raw,internal_temp,lifetime_operation_hour " ;
    }

}

module.exports = rawData