const pool = require("../../config/connection");

const renderAddTaskPage = async(req, res, next) => {

    let sql =
    {
        categories:"SELECT * FROM category",
        priorities:"SELECT * FROM priority"
    };

    let passData = {};

    try 
    {
        for(const sqlKey in sql){
        let[result] =  await pool.execute({sql : sql[sqlKey]});
        passData[sqlKey] = result;
        }

        res.render("addTaskPage", {...passData});       
    } 
    catch (error) 
    {
        next(error);
    }
   
} ;

module.exports = renderAddTaskPage;