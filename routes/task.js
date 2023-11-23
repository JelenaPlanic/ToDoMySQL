const { Router } = require("express");
const router = Router();

//GET
router.get("/", require("../controllers/task/renderAllTaskPage"));
router.get("/add", require("../controllers/task/renderAddTaskPage"));
router.get("/:id/done/:isDone", require("../controllers/task/updateStatus"));
router.get("/edit/:id", require("../controllers/task/renderEditTaskPage"));
router.get("/delete/:id", require("../controllers/task/deleteTask"));
router.get("/category/:id", require("../controllers/task/renderAllTaskByCategory"));

//POST:
router.post("/add", require("../controllers/task/addTask"));
router.post("/edit/:id", require("../controllers/task/updateTask"));


module.exports = router;