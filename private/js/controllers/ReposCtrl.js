
module.controller('ReposCtrl', ['$scope', '$rootScope', '$http', 'Get', function ($scope, $rootScope, $http, Get) {
    
	$scope.pageSize = 5;
	
	$scope.username = "goeuro";
	
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
