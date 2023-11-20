const pool = require("../../config/connection");
const deleteCategory = async (req, res, next) => {
    let values = {...req.params};
    let query = ["DELETE FROM category WHERE id = :id", "DELETE FROM task WHERE categoryID = :id"];

    try 
    {
        query.forEach(async(sql) => {
            let [result] = await pool.execute({sql, values});
        });
        
        res.redirect("/config");
    } 
    catch (error)
    {
       next(error); 
    }

} ;

module.exports = deleteCategory;