const { acbeldb } = require("../db")

//@maythu
const login = ({ username, password }, callback) => {
    acbeldb.login({username,password},(error,data) => {
      if(error) callback(error, null)
      else callback(null, data)
    })
}

module.exports={
    login
}