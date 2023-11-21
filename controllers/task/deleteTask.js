const pool = require("../../config/connection");

const deleteTask = async (req, res, next) => {

    let values = {...req.params};
    let sql = "DELETE FROM task WHERE id =:id";
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

module.exports = deleteTask; 