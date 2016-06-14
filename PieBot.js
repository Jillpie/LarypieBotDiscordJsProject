var nameOfCollection = 'playerData';
var nameOfDatabase = 'playerData';


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/'+nameOfDatabase;


//drops collection
var dropCollection = function(db, callback) {
   db.collection(nameOfCollection).drop( function(err, response) {
      console.log(response)
      callback();
   });
};



MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  dropCollection(db, function() {
      db.close();
  });
console.log("Collection: " + nameOfCollection + "Droped From DataBase: " + nameOfDatabase);

});


// Connect to the db
MongoClient.connect("mongodb://localhost:27017/"+nameOfDatabase, function(err, db) {
  if(err) { return console.dir(err); }


  //inserts Thses Documents
var collection = db.collection(nameOfCollection);
var doc1 = {
  'Username':'Toon2135',
  'PlayerId':'1',
  'Level':'42',
  'Class':'Archer',
  'Coins':'232',
  'Exp':'90',
  'Hp':'45'
};
  var doc2 = {'hello':'doc2'};

  var lotsOfDocs = [{
    Username:'Toon2135',
    PlayerId:1,
    Level:42,
    Class:'Archer',
    Coins:232,
    Exp:90,
    Hp:48
  },{
    Username:'AnnaLi',
    PlayerId:2,
    Level:12,
    Class:'Rouge',
    Coins:87,
    Exp:34,
    Hp:99
  },{
    Username:'Thedoglover1233',
    PlayerId:3,
    Level:34,
    Class:'Rouge',
    Coins:12,
    Exp:34,
    Hp:51
  },{
    Username:'Fdaesreeakg',
    PlayerId:4,
    Level:34,
    Class:'Fighter',
    Coins:12,
    Exp:34,
    Hp:2
  },{
    Username:'Thedoi',
    PlayerId:5,
    Level:1,
    Class:'Cleric',
    Coins:0,
    Exp:0,
    Hp:18
  },{
    Username:'Teagan Adsit',
    PlayerId:6,
    Level:67,
    Class:'Mage',
    Coins:98,
    Exp:35,
    Hp:79
  },{
    Username:"Avxis",
    PlayerId:7,
    Level:6,
    Class:"Fighter",
    Coins:47.64,
    Exp:27.23,
    Hp:77.64
  }];
  console.log("Inputed Documents: Players");
  //collection.insert(doc1);
  //collection.insert(doc2, {w:1}, function(err, result) {});
  collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
db.close();
console.log("the end");
});