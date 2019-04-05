var express = require('express');

var router = express.Router();

router.get('/', async function (req, res, next) {
    signup();
    res.render('signup', { title: 'Sign Up' });
});

function signup(){

    const MongoClient = require('mongodb').MongoClient;

        // const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
        const uri = "mongodb://shakib:isaloser@docdb-2019-04-05-07-02-38.cluster-ctkpsftjeegu.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0";
        MongoClient.connect(uri, function(err, client) {
            console.log('Connected...');
            client.created
            const collection = client.db("dev").collection("users");
            collection.insertOne({"HI":12}, function(err, res) {
                console.log("1 document inserted");
            });
            // perform actions on the collection object
            client.close();
        });
}
class user{
    constructor(){
        this.firstName = "";
        this.lastName = "";

    }



}

router.post

module.exports = router;
