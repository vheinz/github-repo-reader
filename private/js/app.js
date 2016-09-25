var module = angular.module('app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngRoute', 'angularUtils.directives.dirPagination']).config(['$interpolateProvider', function ($interpolateProvider) {
	  $interpolateProvider.startSymbol('[[');
	  $interpolateProvider.endSymbol(']]');
	}]);

module.service('Error', ['$rootScope', function ($rootScope) {
	this.raise = function(message){
		$rootScope.$broadcast('error', { "message": message });
	};
}]);
module.service('Get', ['$rootScope', '$http', 'Error', function ($rootScope, $http, Error) {
	this.Repos = function(username, callback){
		if (username.length > 0) {
			var url = 'https://api.github.com/users/' + username + '/repos';
			$http({
	            method: 'GET',
	            url: url
	        }).
	        success(function (data, status, headers, config) {
	        	if(data.length > 0){
	        		var result = {
	        			success: true,
	        			usernameDisplay: JSON.parse(JSON.stringify(username)),
	        			data: data
	        		}
	        		callback(result);
	        	} else {
	        		Error.raise("The Github user '" + username + "' does not have any repos.");
	        	}
	        	console.log(data);
	        }).
	        error(function (data, status, headers, config) {
	        	Error.raise("The Github user '" + username + "' does not exist.");
	        });    
        } else {
        	Error.raise("The user name you provided is empty. Please provide a working username!");
        }
	};
}]);


module.controller('FooterCtrl', ['$scope', function ($scope) {
	$scope.dateTime = "2016";
}]);

module.controller('ReposCtrl', ['$scope', '$rootScope', '$http', 'Get', function ($scope, $rootScope, $http, Get) {
    
	$scope.pageSize = 5;
	
	$scope.username = "";
	
	$scope.success = null;
	
	$scope.raiseError = function(message){
		$scope.success = false;
		$scope.errInfo = { 
			message: message
		}
	};
	
	$rootScope.$on('error', function (d, args) {
		$scope.raiseError(args["message"]);
    }, true);
	
	var callback = function(result){
		$scope.success = result.success;
		$scope.usernameDisplay = result.usernameDisplay;
		$scope.data = result.data;
	};
	
	$scope.btGo = function(){
		Get.Repos($scope.username, callback);
    };
}]);
