const pool = require("../../config/connection");

const renderConfigPage = async(req, res) => {
    
    let sqlCategory = "SELECT * FROM category";
    let sqlPriority = "SELECT * FROM priority";

    try
    {
       let[categories] = await pool.execute({sql: sqlCategory});
       let[priorities] = await pool.execute({sql: sqlPriority});

       //console.log("Categories:", categories);
       //console.log("Priorities:", priorities);
       res.render("config", {categories, priorities});
    }
    catch(error)
    {
        console.log(error);
    }

} ;

module.exports = renderConfigPage;