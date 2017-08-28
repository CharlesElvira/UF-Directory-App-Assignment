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
		lat = parseFloat($scope.newListing.latitude);
		lon = parseFloat($scope.newListing.longitude);
		add = $scope.newListing.address;
		
		entry = '{ "code": "' + code + '", "name": "' + name + '"';
		if (lat && lon) entry += ',"coordinates": {"latitude": "'+ lat + '", "longitude": "'+ lon +'" }';
		if (add) entry += ',"address": "' + add + '"';
		entry += ' }';
		$scope.listings.push(JSON.parse(entry));
	};
    $scope.deleteListing = function(index)
	{
		$scope.listings.splice(index,1);
	};
    $scope.showDetails = function(index)
	{
		$scope.detailedInfo=[];
		$scope.detailedInfo.coordinates = $scope.listings[index].coordinates;
		$scope.detailedInfo.address = $scope.listings[index].address;
	};
  }
]);