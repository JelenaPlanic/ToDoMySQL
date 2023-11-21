const pool = require("../../config/connection");
const updateStatus = async(req, res, next) => {
     let values = 
     {
        done: parseInt(req.params.isDone), // 0 ili 1
        id : parseInt(req.params.id)
     };

     let sql = "UPDATE task SET done = :done WHERE id = :id";

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

module.exports = updateStatus; 