var express = require('express');
var tagCloud = require('tag-cloud');
var router = express.Router();

router.get('/dating', function (req, res, next) {
  var db = req.db;
  db.collection('chengju_collection').find({"$and":[{"hashtags":{"$regex":"데이트"}}, {"hashtags":{"$nin":["붙임머리후기", "숏단발붙임머리후기", "사장님", "현금가", "찍기만하면화보", "이휘서왁싱", "구름is뭔들", "아빠랑아들"]}}]},
  {_id:0,hashtags:1,likes:1}).sort({likes:-1})
  .toArray(function(err, docs) {
    if (err) {
      next(err);
      return;
    }
    res.render('dating', {list: docs});
  });
});

module.exports = router;
