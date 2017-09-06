'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
var listing;
fs.readFile('listing.json','utf8',function(err,data)
{
	listing = data;
});


/* Connect to your database */
mongoose.db.connect(config.db.uri);
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
new Listing{(
	id: listing._id,
	name: listing.name,
	code: listing.code,
	coordinates: {latitude: listing.coordinates.latitude, longitude: listing.coordinates.longitude},
	address: listing.address;
)};

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */