var express = require('express');
var tagCloud = require('tag-cloud');
var router = express.Router();

router.get('/drinking', function (req, res, next) {
  var db = req.db;
  db.collection('chengju_collection').find({"$and":[{"hashtags":{"$regex":"맛집"}}, {"hashtags":{"$nin":["일상", "명품가방수선", "청주예쁜꽃집", "청주점심추천", "놀거리가", "청주붙임머리싼곳"]}}]},
  {_id:0,hashtags:1,likes:1})
  .toArray(function(err, docs) {
    if (err) {
      next(err);
      return;
    }
    res.render('drinking', {list: docs});
  });
});

module.exports = router;
