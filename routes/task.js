const { Router } = require("express");
const router = Router();

//GET
router.get("/add", require("../controllers/task/renderAddTaskPage"));


//POST:
router.post("/add", require("../controllers/task/addTask"));


module.exports = router;