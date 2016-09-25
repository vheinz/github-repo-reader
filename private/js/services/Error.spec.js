describe('Error Service - raises errors', function() {
	var Error;
	var rootScope;
	
	beforeEach(angular.mock.module('app'));	
		
	beforeEach(function () {
        inject(function ($rootScope, _Error_) {
        	Error = _Error_;
            rootScope = $rootScope;
        })
    });
	
	it('Error service should exist', function() {
		expect(Error).toBeDefined();
	});
	
	it('Error.raise function should exist', function() {
		expect(Error.raise).toBeDefined();
	});
	
    it('Error.raise should broadcast error', function () {
        spyOn(rootScope, '$broadcast').and.callThrough();
        
        rootScope.$on('error', function (event, data) {
            expect(data.message).toBe('error');
        });
        
        Error.raise("error");
        expect(rootScope.$broadcast).toHaveBeenCalled();
    });
});