const express = require("express")
const {loginController} = require('../controller')

const router = express.Router()
router.use((req, res, next) => {
    // authentication process here
    // if success
    next()
    // if fail res.json(response({ success: false, message: "Username or password does not match!" }))
    
})

// router.get("/login", ()=> null)
router.post("/login",loginController.login)

module.exports = router