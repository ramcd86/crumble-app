const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://crumbdb:QQbRwI0u3SRkfqbSrwZpbipv2NDWgCtuA2mTc1yStEzHYcLR3uWZbaWEoqVCckAB9mtoym3kESHONcPy6KMmQA==@crumbdb.documents.azure.com:10255/?ssl=true&replicaSet=globaldb', function (err, client) {
  if (err) {
    throw err
  };
  var db = client.db('animals');
  db.collection('mammals').find().toArray(
    function (err, result) {
    if (err) {
      throw err
    }
    console.log(result)
  });
});
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
