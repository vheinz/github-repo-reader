module.controller('FooterCtrl', ['$scope', function ($scope) {
	$scope.dateTime = new Date().toLocaleDateString();
}]);