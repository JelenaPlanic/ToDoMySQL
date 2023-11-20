const pool = require("../../config/connection");

const renderCategoryList = async (req, res, next) => {

    let sql = "SELECT category.*, COUNT(task.categoryID) AS task_count "
        + "FROM category "
        + "LEFT OUTER JOIN task ON category.id = task.categoryID "
        + "GROUP BY category.id";

    try {
        let [categories] = await pool.execute({sql});
        res.render("categoryTaskPage", {categories});
    }
    catch (error) {
        next(error);
    }
};

module.exports = renderCategoryList;