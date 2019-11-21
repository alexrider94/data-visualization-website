var express = require('express');
var tagCloud = require('tag-cloud');
var router = express.Router();

router.get('/ranking', function (req, res, next) {
  var db = req.db;
  db.collection('chengju_collection').find({hashtags:{"$ne":null}},{_id:0,hashtags:1,likes:1}).sort({likes:-1}).limit(10)
  .toArray(function(err, docs) {
    if (err) {
      next(err);
      return;
    }
    res.render('ranking', {list: docs});
  });
});

module.exports = router;
