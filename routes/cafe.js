var express = require('express');
var tagCloud = require('tag-cloud');
var router = express.Router();

router.get('/cafe', function (req, res, next) {
  var db = req.db;
  db.collection('chengju_collection').find({"$and":[{"hashtags":{"$regex":"카페"}}, {"hashtags":{"$nin":["청주", "청주맛집추천", "청주맘", "청주카페", "제주여행", "청주핫플"]}}]},
  {_id:0,hashtags:1,likes:1})
  .toArray(function(err, docs) {
    if (err) {
      next(err);
      return;
    }
    res.render('cafe', {list: docs});
  });
});

module.exports = router;
