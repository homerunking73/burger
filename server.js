const express = require("express");
const app = express();
const hbs = require("express-handlebars");
// const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

var PORT = process.env.PORT || 8000;

// var db = require("./db/connection.js");

// Allow body parser to parse the data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
// Allow the assets folder to be used for static content
app.use("/public", express.static("public"));

// Establish the engine as Handlebars and useing the Default view as the main.handlebars file
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/",routes);
app.listen(PORT);

// Create some routers. Notice how this require statement has a second argument of app
// This is sending the instance of the application to be allowed on those routes. 
// require("./routes/main.js")(app)
// require("./routes/apiRoutes.js")(app)

// app.listen(PORT, function() {
//     console.log("APP is listening on Port: " + PORT);
// });