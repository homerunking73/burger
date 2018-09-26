// Set up MySQL connection.
var mysql = require("mysql2");
require("dotenv").config();


var connection;

if (process.env.JAWSDB_URL) {
    console.log("USING JAWS");
    // connection = mysql.createConnection(process.env.JAWSDB_URL);

    connection = mysql.createConnection({
        port: 3306,
        host: "lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "tbx6htgmhyjyqfs3",
        password:"h7d5jrtwlwm4tix5",
        database: "joato8hn5b87o3f5"
    });

} else {
    // connection = mysql.createConnection({
    //     port: 8889,
    //     host: "127.0.0.1",
    //     user: "root",
    //     password:"root",
    //     database: "burgers_db"
    // });
    connection = mysql.createConnection({
        port: 3306,
        host: "lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "tbx6htgmhyjyqfs3",
        password:"h7d5jrtwlwm4tix5",
        database: "joato8hn5b87o3f5"
    });
}


// console.log("Here is the connection" + connection)


// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;