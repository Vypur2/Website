'use strict'
var db = require('./jobs.database');

exports.index = function(req, res){
  console.log("Getting Jobs");
  db.get(function(rec){
    res.json(rec);
  });
};