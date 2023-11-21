const pool = require("../../config/connection");
const updateTask = async (req, res, next) => {

    let values ={...req.params, ...req.body};
    console.log(values);

    let sql = "UPDATE task SET "+
              "task = :task, "+
              "description = :description,"+
              "deadline = :deadline, "+
              "categoryID = :categoryID, "+
              "priorityID = :priorityID "+
              "WHERE id = :id";
    try 
    {
        
        let[result] = await pool.execute({sql, values});
        res.redirect("/task");
             
    } 
    catch (error) 
    {
        next(error);
    }
} ;

module.exports = updateTask; 