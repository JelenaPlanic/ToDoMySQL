const pool = require("../../config/connection");

const addPriority = async(req, res, next) => {
    let values = {...req.body};
    console.log("VALUES:", values);
    let sql = "INSERT INTO priority (priorityName, color) "+
              "VALUES (:priorityName, :color)";
     
     try 
     {
        let [result] = await pool.execute({sql, values});
        res.redirect("/config");
     } 
     catch (error) {
        next(error);
     }
} ;

module.exports = addPriority;