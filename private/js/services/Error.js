module.service('Error', ['$rootScope', function ($rootScope) {
	this.raise = function(message){
		$rootScope.$broadcast('error', { "message": message });
	};
}]);