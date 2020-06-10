var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, async function(err, db) {
    if (err) throw err;
    var dbo = db.db("MyDb");
    let result = await dbo.collection("customers").findOne();
    console.log(result.name);
});