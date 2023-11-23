const pool = require("../../config/connection");
const {formatDate} = require("../../lib/dateFormatting");
const renderAllTaskByCategory = async (req, res, next) => {
    let values = {categoryID: req.params.id};
    let sql = "SELECT t.*, c.categoryName, c.color AS categoryColor, p.priorityName, p.color AS priorityColor "+
     "FROM Task t "+
     "JOIN category c ON c.id = t.categoryID "+
     "JOIN priority p ON p.id = t.priorityID " +
     "WHERE t.categoryID = :categoryID";
    
    try {
        let [tasks] = await pool.execute({sql, values});
        res.render("allTasksByCategory", {tasks, formatDate});
       
    }
    catch (error) {
        next(error);
    }
} ;

module.exports = renderAllTaskByCategory;