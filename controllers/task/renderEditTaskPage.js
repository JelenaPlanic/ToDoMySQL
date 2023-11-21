const pool = require("../../config/connection");
const {inputDate} = require("../../lib/dateFormatting");

const renderEditTaskPage = async (req, res, next) => {
    let values = {...req.params};
    let sql = {
        task : "SELECT * FROM task WHERE id = :id",
        categories : "SELECT * FROM category",
        priorities : "SELECT * FROM priority"
    };

    let result = {};

    try 
    {
        for(const key in sql)
        {
            let [data] = await pool.execute({sql : sql[key], values});
            result[key] = data;
        }
        
       // res.render("editTaskPage", {task: result.task[0],  categories: result.categories, priorities: result.priorities});
       res.render("editTaskPage", {...result, inputDate});       
    } 
    catch (error) 
    {
        next(error);
    }
} ;

module.exports = renderEditTaskPage;