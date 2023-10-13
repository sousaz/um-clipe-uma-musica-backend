const express = require("express")
const clipsController = require("../controller/clipsController")
const musicsController = require("../controller/musicsController")
const router = express.Router()

router.route("/musics").get(musicsController.all)
router.route("/clips").get(clipsController.all)

module.exports = router