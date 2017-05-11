// @author: Ramona Anghel
// @github: ranghel
// @comment: Homework Week 14 - Eat a Burger


// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));


app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Setting Routes

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
console.log("App listening on PORT: " + port);
