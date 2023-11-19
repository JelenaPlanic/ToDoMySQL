const pool = require("../../config/connection");
const renderEditPriorityPage = async (req, res, next) => {
    let values = req.params;

    let sql = "SELECT * FROM priority WHERE id = :id";
    try
    {
        let[priorities] = await pool.execute({sql, values});
        //console.log(priority);
        res.render("editPriorityPage", {priority: priorities[0]});
    }
    catch(error)
    {
        next(error);
    }
} ;

module.exports = renderEditPriorityPage;