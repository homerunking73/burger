var connection = require("./connection.js");
var orm = {
    selectAll: function(tableName, cb){
        var sql = "select * from " + tableName + ";";
        connection.query(sql, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        })
    },


    insertOne: function(tableName, burgerName, cb){
        var sql = "insert Into " + tableName + "(burger_name, devoured) ";
        sql += "values('"+ burgerName + "',0);";
        connection.query(sql, burgerName, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        })
    },

    updateOne: function(tableName, devour, id, cb){
        var sql = "update " + tableName + " ";
        sql += "set devoured = " + devour + " ";
        sql += "where id = " + id;
        connection.query(sql, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        })
    }


}

module.exports = orm;