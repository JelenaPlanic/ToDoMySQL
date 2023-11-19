const pool = require("../../config/connection");
const renderPriorityList = async (req, res, next) => {

    let sql = "SELECT priority.*, COUNT(task.priorityID) AS task_count "+   
            "FROM priority "+ 
            "LEFT OUTER JOIN task "+
            "ON priority.id = task.priorityID "+
            "GROUP BY priority.id";
      try
      {
        let[priority] = await pool.execute({sql}); // array (objects + atribute: task_count)
        console.log("Priority-LEFT JOIN AND GROUP BY", priority);
        res.render("priorityTaskPage", {priority});
      } 
      catch(error)
      {
        next(error);
      }     
    
} ;

module.exports = renderPriorityList;