const pool = require("../../config/connection");

const renderCategoryList = async (req, res, next) => {

    let sql = "SELECT category.*, COUNT(task.categoryID) AS task_count "
        + "FROM category "
        + "LEFT JOIN task ON category.id = task.categoryID "
        + "GROUP BY category.id"; // task.categoryID

    try {
        let [categories] = await pool.execute({sql});
        res.render("categoryTaskPage", {categories});
    }
    catch (error) {
        next(error);
    }
};

module.exports = renderCategoryList;