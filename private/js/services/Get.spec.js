describe('Get Service - getts repos of url', function() {
	var Get;
	
	beforeEach(angular.mock.module('app'));
	
	beforeEach(inject(function(_Get_) {
		Get = _Get_;
	}));
	
	it('should exist', function() {
		expect(Get).toBeDefined();
	}); 
});