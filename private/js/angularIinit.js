var module = angular.module('app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngRoute', 'angularUtils.directives.dirPagination']).config(['$interpolateProvider', function ($interpolateProvider) {
	  $interpolateProvider.startSymbol('[[');
	  $interpolateProvider.endSymbol(']]');
	}]);
