// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function (req, res) {
        res.redirect("/burgers");
    });

    // GET route for getting all of the burger
    app.get("/", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function(result) {
            var hbsObject = {burgers: result};
            res.render('index', hbsObject);
        });
    });

    // POST route for saving a new burger
    app.post("/", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table.
        db.Burger.create({
            burger_name: req.body.burger_name
            //devoured: req.body.devoured
        }).then(function(result) {
            // We have access to the new burger as an argument inside of the callback function
            res.redirect("/");
        }).catch(function  (error){
            res.json(error);
        });
    });


    // PUT route for updating burgers.
    app.put("/:id", function(req, res) {

        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(result) {
            res.redirect("/");
        });
    });
};
