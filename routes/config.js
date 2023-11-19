const { Router } = require("express");
const router = Router();

//GET
router.get("/", require("../controllers/config/renderConfigPage"));










module.exports = router;