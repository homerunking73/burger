const express = require("express");
var burger = require("./../models/burger.js");
var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbs = {
            burgers: data
        };
        res.render("index", hbs);
    });
});

router.post("/burgers", function(req, res){
    burger.insertOne(req.body.burger_name, function(data){
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res){
    var id = req.params.id;
    burger.updateOne(1, id, function(data){
        res.redirect("/");
    });
});

module.exports = router;