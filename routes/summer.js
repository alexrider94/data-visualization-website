var express = require('express');
var tagCloud = require('tag-cloud');
var router = express.Router();

router.get('/summer', function (req, res, next) {
  var db = req.db;
  db.collection('chengju_collection').aggregate({'$group':{'_id':'$hashtags', }}, {'$match':{'_id':"여름"}}, {_id:0,hashtags:1,likes:1}).sort({likes:-1}).limit(100)
  .toArray(function(err, docs) {
    if (err) {
      next(err);
      return;
    }
    res.render('summer', {list: docs});
  });
});

module.exports = router;
