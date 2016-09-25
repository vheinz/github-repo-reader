describe('Get Service - getts repos of url', function() {
	var Get;
	var $httpBackend;
	var userName = 'vheinz';
	
	beforeEach(angular.mock.module('app'));
	
	beforeEach(inject(function($injector,_Get_) {
		Get = _Get_;
		$httpBackend = $injector.get('$httpBackend');
	}));
	
	it('Get service should exist', function() {
		expect(Get).toBeDefined();
	}); 
	
	it('Get.Repos function should exist', function() {
		expect(Get.Repos).toBeDefined();
	}); 
	
	it('Get.Repos with the correct link was called', function() {
		Get.Repos(userName);
		$httpBackend.expectGET('https://api.github.com/users/' + userName + '/repos');
	}); 
});