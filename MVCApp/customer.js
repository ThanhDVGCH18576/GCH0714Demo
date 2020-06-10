const express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

router.get('/insert',(req,res)=>{
    res.render('insertCustomer');
})

router.post('/doInsert',async (req,res)=>{
    let client= await MongoClient.connect(url);
    let dbo = client.db("MyDb");
    let nameValue = req.body.txtName;
    let addressValue = req.body.txtAddress;
    let newCustomer = {name : nameValue, address:addressValue};
    await dbo.collection("customers").insertOne(newCustomer);
   
    let results = await dbo.collection("customers").find({}).toArray();
    res.render('allCustomer',{customers:results});
})

module.exports = router;