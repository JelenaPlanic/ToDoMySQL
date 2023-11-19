const pool = require("../../config/connection");

const updateCategory = async(req, res, next) => {
    //console.log("PARAMS:", req.params);
    //console.log("Body", req.body);

    let values = {...req.body, ...req.params};
    let sql = "UPDATE category SET categoryName = :categoryName, color = :color "+
              "WHERE id = :id";
    
    try 
    {
        let [result] = await pool.execute({sql, values});
        console.log("UPDATE RESULT:",result);
        res.redirect("/config");
    } 
    catch (error) {
        next(error);
    }

} ;

module.exports = updateCategory;