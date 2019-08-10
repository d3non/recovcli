//const db = require("../models");
var main = require('../models/main.js');
// Defining methods for the booksController
module.exports = {

  findById: function(req, res) {
    main.findById(req.params.bookInput, function(data) {
      var hbsObject = { credits: data };
      console.log(hbsObject);
      res.json(hbsObject);
      //res.render('credits', hbsObject);
    });
  }
  
  /*findById: function(req, res) {
    main.findById(req.params.idAgent){
      var hbsObject = { credits: data };
      console.log(hbsObject);
      res.json(hbsObject);
      //res.render('credits', hbsObject);
    });
  }*/


  /*findAll: function(req, res) {
    db.Credit
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Credit
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Credit
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Credit
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Credit
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }*/
};
