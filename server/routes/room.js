const room = require("../controllers/createRoom")
const express = require("express")
const router = express.Router()

router.post("/createroom/:id",room.createRoom)
router.post("/joinroom",room.joinRoom)

module.exports = router