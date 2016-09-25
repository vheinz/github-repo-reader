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

