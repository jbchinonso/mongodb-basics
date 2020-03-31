
const dbcreation = ()=> {
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/johnbosco";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created by Johnbosco");
  db.close();
});

}

dbcreation()
module.exports = dbcreation;