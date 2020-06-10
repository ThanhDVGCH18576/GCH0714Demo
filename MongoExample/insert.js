var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, async function(err, db) {
  if (err) throw err;
  var dbo = db.db("MyDb");
  var myobj = { name: "FPT Uni", address: "Dong Quan" };
  await dbo.collection("customers").insertOne(myobj);
  console.log("1 document inserted");
});