/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

	var listingData, newlisting;
/* Connect to your database */

 mongoose.connect(config.db.uri);
var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  
   Listing.findOne({'name': 'Library West'}, 'code name coordinates address', function(err, listingFind)
	   {
		   if (err) throw err;
		   console.log(listingFind);
	   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   
    Listing.findOne({'code': 'CABL'}, function(err, listingRem)
	   {
		   console.log(listingRem);
		   listingRem.remove(function(err){
			   if (err) throw err;
		   });
	   });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  
   Listing.findOneAndUpdate({'code': 'PHL'},{'address': '102 Phelps Lab, Gainesville, FL 32611'}, function(err, listingUpdate)
	   {
		   if (err) throw err;
		   console.log(listingUpdate);
	   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
 
   Listing.find({},function(err, listings)
	   {
		   if (err) throw err;
		   console.log(listings);
	   });
  
 
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
