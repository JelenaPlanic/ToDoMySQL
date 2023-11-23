const express = require("express");
const {PORT} = require("./config/config");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(express.static(__dirname + "/node_modules/bootstrap-icons/font"));
app.use("/", require("./routes"));

app.use((error, req, res, next) => {
    if(error)
    {
        res.render("error", {error});
    }
    
});


app.listen(PORT, (error) => {
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(`Server is listening on ${PORT}...`);
    }   
});