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

	var listingData, newlisting;
/* Connect to your database */
mongoose.connect(config.db.uri);
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
 fs.readFile('listings.json','utf8',function(err,data){
	listingData = JSON.parse(data);
	listingData = listingData.entries;
	for(var i=0; i<listingData.length; i++)
	{
		console.log(i);
		if(listingData.hasOwnProperty('coordinates') && listingData.hasOwnProperty('address'))
		{
			newlisting = new Listing
			({
				name: listingData[i].name,
				code: listingData[i].code,
				coordinates:
				{
					latitude: listingData[i].coordinates.latitude,
					longitude: listingData[i].coordinates.longitude
				},
				address: listingData[i].address
			}); 
			newlisting.save();
		}
		else if(listingData.hasOwnProperty('address'))
		{
			newlisting = new Listing
			({
				name: listingData[i].name,
				code: listingData[i].code,
				address: listingData[i].address
			}); 
			newlisting.save();
		}
		else if(listingData.hasOwnProperty('coordinates'))
		{
			newlisting = new Listing
			({
				name: listingData[i].name,
				code: listingData[i].code,
				coordinates:
				{
					latitude: listingData[i].coordinates.latitude,
					longitude: listingData[i].coordinates.longitude
				}
			}); 
			newlisting.save();
		}
		else
		{
			newlisting = new Listing
			({
				name: listingData[i].name,
				code: listingData[i].code
			}); 
			newlisting.save();
		}
	};
});