require("dotenv").config();
var main = require('../models/main.js');
//var orm = require('../config/orm.js');
const axios = require("axios");
      db = require("../models");
      path = require("path");

module.exports = function(app) {
    
    app.post("/api/credits", (req, res) => {
            main.findById(req.body.title, function(data) {
              var booksData = { credits: data };
              console.log(booksData);
              res.json(booksData);
              //res.render('credits', hbsObject);
            });
          }
    );

    app.post("/search", (req, res) => {
        // set bookTitle to the req.body.title with spaces replaced with plus signs(+)
        let bookTitle = req.body.title.replace(/\s/g, "+");
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
        ).then(
            (response) => {
                console.log(response.data.items);
                res.json(response.data.items)
            }
        ).catch(
            (err) => {
                res.json({error: err})
            }
        );
    });

    app.post("/api/books", (req, res) => {
        console.log("API BOOKS CALL");
        db.Book
            .create(req.body)
            .then((response) => {
                res.json({successful: response});
                }
            ).catch(
                (err) => {
                    console.log("Error: " + err);
                    res.json({error: err});
                }
        );
    });



    app.delete("/api/books/:id", (req, res) => {
        db.Book.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                rres.json({error: err});
            }
        );
    });

    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}