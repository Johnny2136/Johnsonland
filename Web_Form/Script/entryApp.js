'use strict';

var entryApp = angular.module('entryApp', []);

function entryCtrl($scope, $http) {
	var profile = {"firstName":"","lastName":""};

        $scope.profile = profile

	$scope.postData = function() {
alert(JSON.stringify($scope.profile));

        $http({
            method: 'POST',
	    data: JSON.stringify($scope.profile),
	    contentType: "application/json",
            url: 'https://api.mongolab.com/api/1/databases/apptest/collections/userProfiles?apiKey=sXsYo54JNRbcU9mm5RHrCGqd21hOY2lC'
        }).success(function(data, status) {
            alert("data was successfully added");
        }).error(function(data, status, headers, config) {
		alert("there was an error adding data");
    });



	}

}

