const pool = require("../../config/connection");
const deletePriority = async(req, res, next) => {
    let values = {...req.params};
    let query = ["DELETE FROM priority WHERE id = :id", "DELETE FROM task WHERE priorityID = :id"];

    try 
    {
        // query.forEach(async(sql) => {
        //     let [result] = await pool.execute({sql, values});
        // });
        for (let sql of query) {
            let [result] = await pool.execute({ sql, values });
        }
        
        res.redirect("/config");
    } 
    catch (error) {
        next(error);
    }
};

module.exports = deletePriority;