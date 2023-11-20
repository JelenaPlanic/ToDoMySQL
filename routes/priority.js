const { Router } = require("express");
const router = Router();

//GET
router.get("/", require("../controllers/priority/renderPriorityList")); //*
router.get("/:id/tasks", require("../controllers/priority/renderPriorityTasks")); //*
router.get("/add", require("../controllers/priority/renderAddPriorityPage"));
router.get("/:id/edit", require("../controllers/priority/renderEditPriorityPage"));
router.get("/:id/delete", require("../controllers/priority/deletePriority")); //*




//POST
router.post("/add", require("../controllers/priority/addPriority"));
router.post("/:id/update", require("../controllers/priority/updatePriority")); //* 


module.exports = router;