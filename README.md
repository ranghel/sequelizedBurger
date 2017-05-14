Eat The Burger - Sequelized Burger

Overview

A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!

This app is a remake of the original Burger repo: https://github.com/ranghel/Burger. The key difference is that is uses the Sequelize ORM rather than raw MySQL queries. And, using Sequelize, the app is now relational, tracking which users ate which burger.

Please try out the deployed app in Heroku: https://sequelizedburgers.herokuapp.com/

Functionality

Using the Sequelize ORM, the app has 3 basic CRUD functions...

READ all entries from the MySQL database and display them to the DOM using Handlebars.
note that at a SQL join is used to match each devoured burger to its respective customer.
UPDATE a selected burger by clicking "Devour It", which...
hits an /burger/eat/:id route in Express to change its "devoured" status in the MySQL database (via Sequelize ORM)
re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
CREATE a new burger using the "Place Order" form, which...
hits a /burger/create route in Express to insert a new burger into the MySQL database (via Sequelize ORM)
re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)
Cloning down the repo

If you wish to clone the app down to your local machine...

Use MySQL Workbench to create a database called burgers_db:
The raw SQL query is CREATE DATABASE sequelizedburgers_db;.
Inside the config folder, open up the config.json file:
In the development object, add your MySQL localhost password.
In your terminal, cd into the project folder and run:
npm install to download all node.js dependencies
sequelize db:migrate && sequelize db:seed:all to migrate/seed the database via Sequelize CLI
Finally, you can run the programming using:
node server.js in the terminal to start the node server
And navigating to localhost:3000 in your browser.


![screen shot 2017-05-14 at 10 58 30 am](https://cloud.githubusercontent.com/assets/22923940/26035057/5756b474-3894-11e7-8f61-a55a74735536.png)
