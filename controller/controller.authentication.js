const { loginService } = require("../service")
const response = require("../model/response")

//@maythu
const login = (req, res) => {
    const username = req.body.username
    const password = new Buffer.from(req.body.password).toString('base64');
  
    loginService.login({ username, password }, (err, data) => {
        if(err) res.json(response({ success: false, message: err, error: err }))
        else res.json(response({ payload: data, }))
    })
}

module.exports ={
    login
}