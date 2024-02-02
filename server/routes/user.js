const user = require("../controllers/user")
const express = require("express")
const router = express.Router()

router.post("/signup",user.signupUser)
router.post("/login",user.loginUser)
router.get("/gethostlers/:id",user.getHostlers)
router.post("/delete",user.delete)
router.post("/edit",user.edit)

module.exports = router