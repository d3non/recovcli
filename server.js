//require('dotenv').config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
//Passport

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

/*const mongoose = require("mongoose");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI);

// Database configuration with mongoose

//mongoose.connect(dbURI, { useNewUrlParser: true });

const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successfuly.");
    // start the server, listen on port 3000
    app.listen(PORT, function() {
        console.log("App running on new port " + PORT);
    });
});*/

//Models
var models = require("./models");

//Sync Database
models.sequelize.sync().then(function () {
  console.log('Nice! Database looks fine')
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});

require("./routes/api-routes")(app);

// Add routes, both API and view
//app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});