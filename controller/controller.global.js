const { globalService } = require("../service")



//@thaenuwin
const getDataTest = (req, res) => {
    console.log("enter controller")
    return globalService.getTestGlobal();
}



module.exports = {

    //@thaenuwin
    getDataTest

}