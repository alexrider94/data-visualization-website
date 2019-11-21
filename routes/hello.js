var express = require('express');
var tagCloud = require('tag-cloud');
var router = express.Router();

router.get('/hello', function (req, res, next) {
  var db = req.db;
  db.collection('chengju_collection').find({'hashtags':{'$nin':['청주가볼만한곳', '청주명소', '청주술집', '청주맛집', '청주', '청주맛집추천', '복대동', '율량동맛집', '청주커피숍', '청주카페추천', '물회맛집', '청주단체회식', '청주핫플', '청주꽃배달', '청주꽃다발', '기회를_잡는_것도_실력', '청주꽃다발', '린넨앞치마', '다리왁싱', '제작앞치마', '정신을놓아간다', '남자왁서', '여기가', '놀러오세요', '인싸양산', '놀러오세요', '제주감성', '얼른오세요', '월드컵', '대전카페인테리어']}},{_id:0,hashtags:1})
  .toArray(function(err, docs) {
    if (err) {
      next(err);
      return;
    }
    res.render('hello', {list: docs});
  });
});

module.exports = router;
