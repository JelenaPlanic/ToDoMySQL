const pool = require("../../config/connection");
const {formatDate} = require("../../lib/dateFormatting");

const renderPriorityTasks = async (req, res, next) => {

    let values = {priorityID: req.params.id};
    let sql = "SELECT task.*, "+
              "category.categoryName, category.color as category_color, " +
              "priority.priorityName, priority.color as priority_color "+
              "FROM task "+
              "JOIN category ON category.id = task.categoryID "+
              "JOIN priority ON priority.id = task.priorityID "+
              "WHERE task.priorityID = :priorityID";

    try
    {
        let [tasks] = await pool.execute({sql, values});
        console.log("Tasks with JOIN Category and Priority ", tasks);
        let flag = tasks.length > 0? tasks[0].priorityName : "";

        res.render("tasks", {tasks,flag, formatDate});
    }
    catch(error)
    {
        next(error);
    }
};

module.exports = renderPriorityTasks;