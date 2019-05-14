const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 5500;

//For the sake of handling the front end files under public directory
app.use(express.static("public"));

//Express for the use of JSON data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Set Handlebars
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set("view engine", 'handlebars');

//Give access to url routes by importing them
const routes = require('./controllers/burgers_controller');
app.use(routes);

//Have a server listen to our app
app.listen(PORT, () => {
    console.log(`App listening on https://localhost:${PORT}`);
})