const pool = require("../../config/connection");

const updatePriority = async (req, res, next) => {
    
    let values ={...req.body, ...req.params};
    //console.log("Values:", values);
    let sql = "UPDATE priority SET priorityName = :priorityName, color =:color "+
                "WHERE id = :id";

    try 
    {
        let [result] = await pool.execute({sql, values});
        res.redirect("/config");
    } catch (error) {
        
        next(error);
    }
};

module.exports = updatePriority;