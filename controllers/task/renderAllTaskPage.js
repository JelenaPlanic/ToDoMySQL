const pool = require("../../config/connection");
const {formatDate} = require("../../lib/dateFormatting");

const renderAllTaskPage = async(req, res, next) => {
    let sql = "SELECT t.*, "+ 
              "c.categoryName, c.color AS categoryColor, "+
              "p.priorityName, p.color AS priorityColor "+
              "FROM task t "+
              "JOIN category c ON c.id = t.categoryID "+
              "JOIN priority p ON p.id = t.priorityID";

              try 
              {
                  let[tasks] = await pool.execute({sql});
                  res.render("tasks", {tasks, formatDate});
              } 
              catch (error) 
              {
                  next(error);
              }
} ;

module.exports = renderAllTaskPage;