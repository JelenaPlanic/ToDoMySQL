const pool = require("../../config/connection");

const renderEditCategoryPage = async (req, res, next) => {
    
    let values = req.params;
    console.log("Values:", values);

    let sql = "SELECT * FROM category WHERE id = :id";
    try 
    {
        let [category] = await pool.execute({sql, values}); // array with one object
        console.log("Category:", category);
        res.render("editCategoryPage",{category: category[0]});
    } 
    catch (error) 
    {
        next(error);
    }
} ;

module.exports = renderEditCategoryPage;