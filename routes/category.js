var express = require('express')
var router = express.Router()
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/toybox', ['category'])

router.get('/category', function (req, res) {
    db.collection('category').find(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
  })

module.exports = router;