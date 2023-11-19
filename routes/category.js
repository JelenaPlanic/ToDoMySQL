const {Router} = require("express");
const router = Router();

//GET
router.get("/add", require("../controllers/category/renderAddCategoryPage"));
router.get("/edit/:id", require("../controllers/category/renderEditCategoryPage"));
router.get("/delete/:id", require("../controllers/category/deleteCategory"));


//POST
router.post("/add", require("../controllers/category/addCategory"));
router.post("/edit/:id", require("../controllers/category/updateCategory"));


module.exports = router;