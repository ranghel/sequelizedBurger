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


    // GET route for getting all of the burger
    app.get("/burgers", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function(dbBurger) {
            res.json(dbBurger);
            // var hbsObject = {burgers: result};
            // res.render('index', hbsObject);
        });
    });

    // POST route for saving a new burger
    app.post("/burgers/create", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table.
        db.Burger.create({
            burger_name: req.body.burger_name
            //devoured: req.body.devoured
        }).then(function(dbBurger) {
            // We have access to the new burger as an argument inside of the callback function
            res.redirect("/");
        }).catch(function  (error){
            res.json(error);
        });
    });


    // PUT route for updating burgers.
    app.put("/burgers/update/:id", function(req, res) {

        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.Burger.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.redirect("/");
        });
    });

    // DELETE route for deleting burgers. We can get the id of the burger to be deleted from
    // req.params.id
    app.post("/burgers/delete/:id", function(req, res) {
        // We just have to specify which burger we want to destroy with "where"
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.redirect("/");
        });

    });
};
