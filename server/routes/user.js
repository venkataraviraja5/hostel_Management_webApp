const user = require("../controllers/user")
const express = require("express")
const router = express.Router()

router.post("/signup",user.signupUser)
router.post("/login",user.loginUser)

module.exports = router