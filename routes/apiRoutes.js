var path = require("path");
var request = require('request');


// These will be our main routes for the application. All of these routes will render a view
// We get the app argument from the Server.js file and now we can call Express methods on it.
module.exports = function (app) {

    // Express works from the root. www.google.com/about goes to the avout page. If you go to www.google.com/ we get Google. While we wont be building such a world altering app (yet), this is the same concept

    // The first argument specifies the route from the route url. since we are developing on our local machine, this will go to localhost:3000/
    app.get("/", function (req, res) {
        // We do not take in anything on the request body, but we want to use Handlebars to render the view. 
        res.render("index");
    });

    // This then goes to localhost:3000/articles
    app.get("/articles", (req, res) => {
        res.render("articles")
    })

}