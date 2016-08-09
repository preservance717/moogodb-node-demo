/**
 * Created by gaole on 8/9/16.
 */
var mongodb = require('mongodb');
var express = require('express');

var MongoClient = mongodb.MongoClient;
var router = express.Router();

var url = 'mongodb://localhost:27017/runoob';

MongoClient.connect(url, function (err, db) {
    if(err){
        console.log('Unable to connect to the mongoDB server. Error:', err);
    }else{
        var app;
     //   var collection = db.collection('col');
        db.collection('col').find({}, {'_id':0}).toArray(function (err, result) {
            if(err){
                throw err;
            }
            app = result;
            console.log(result);
        });
        router.get('/', (req, res)=> {
            "use strict";
            res.send(app)
        });

            /*console.log('Connection established to', url);
             router.get('/', function (req, res) {
             res.json('1 ');
             db.collection('col').find({"title":"MongoDB教程"}).toArray(function(err, results) {
             if (err){
             console.log('lo')
             }else {
             console.log(results);
             }


             // send HTML file populated with quotes here
             })

             });
             */
            db.close();

        }
});

module.exports = router;


