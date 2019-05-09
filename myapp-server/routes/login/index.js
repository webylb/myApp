var express = require('express');
var router = express.Router();
var MongoDB = require('../mongodb/index');

router.post('/', (req, res) => {
  MongoDB.MongoClient.connect(MongoDB.dbURL, function(err, db) {
    if (err) throw err;
    var dbo = db.db("demo");
    dbo.collection("user"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        res.send(result)
        db.close();
    });
  });
})

module.exports = router;