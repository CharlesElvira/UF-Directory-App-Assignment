angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() 
	{
		var code, name, lat, lon, add, entry;
		
		code = $scope.newListing.code;
		name = $scope.newListing.name;
		lat = $scope.newListing.latitude;
		lon = $scope.newListing.longitude;
		add = $scope.newListing.address;
		
		entry = '{ "code": "' + code + '", "name": "' + name + '"';
		if (lat && lon) entry += ',"coordinates": {"latitude": "'+ lat + '", "longitude": "'+ lon +'" }';
		if (add) entry += ',"address": "' + add + '"';
		entry += ' }';
		$scope.listings.push(JSON.parse(entry));
	};
    $scope.deleteListing = function(index) {};
    $scope.showDetails = function(index) {};
  }
]);