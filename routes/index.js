const { Router } = require("express");
const router = Router();


router.get("/", require("../controllers/home/renderHomePage"));

router.use("/config", require("./config"));
router.use("/category", require("./category"));
router.use("/task", require("./task"));
router.use("/priority", require("./priority"));

module.exports = router;