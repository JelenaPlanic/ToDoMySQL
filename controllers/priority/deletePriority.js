const pool = require("../../config/connection");
const deletePriority = async(req, res, next) => {
    let values = {...req.params};
    let sql = "DELETE FROM priority WHERE id = :id"; // dodati i brisanje taska

    try 
    {
        let [result] = await pool.execute({sql, values});
        res.redirect("/config");
    } 
    catch (error) {
        next(error);
    }
};

module.exports = deletePriority;