var express = require("express");
var Article = require("../models/Article");
var mongoose = require("mongoose");
var router = express.Router();

router.get("/api/saved", function(req, res){
  console.log("Getting all saved articles");
  Article.find({}, function(err, docs){
    if(err)
      return res.send(err);
    res.json(docs);
  });
});

router.post("/api/saved", function(req, res){
  console.log("Article saved");
  var newArticle = new Article({
    headline: req.body.headline,
    pubDate: req.body.pubDate,
    url: req.body.url,
    section: req.body.section,
    by: req.body.by
  });
  newArticle.save(function(err){
    if(err)
      return res.send(err);
    res.sendStatus(204);
  });
});

router.delete("/api/saved", function(req, res){
  console.log("Removing article with id "+req.query.id);
  Article.findByIdAndRemove(req.query.id, function(err, doc){
    if(err)
      return res.send(err);
    res.sendStatus(204);
  });
});


module.exports = router;
