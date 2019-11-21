var express = require('express');
var tagCloud = require('tag-cloud');
var router = express.Router();

router.get('/gchart', function (req, res, next) {
  var db = req.db;
  db.collection('chengju_collection').find({},{_id:0, hashtags:1}).limit(100)
  .toArray(function(err, docs) {
    if (err) {
      next(err);
      return;
    }
    res.render('gchart', {list: docs});
  });
});

module.exports = router;
