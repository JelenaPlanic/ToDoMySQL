const pool = require("../../config/connection");
const deleteCategory = async (req, res, next) => {
    let values = req.params;
    let sql = "DELETE FROM category WHERE id = :id";

    try 
    {
        let [result] = await pool.execute({sql, values});
        res.redirect("/config");
    } 
    catch (error)
    {
       next(error); 
    }

} ;

module.exports = deleteCategory;