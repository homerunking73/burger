var orm = require("./../config/orm.js");
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(burgerName, cb){
        orm.insertOne("burgers", burgerName, function(res){
            cb(res);
        });
    },

    updateOne: function(devour, id, cb){
        orm.updateOne("burgers", devour, id, function(res){
            cb(res);
        });
    }


}

module.exports = burger;