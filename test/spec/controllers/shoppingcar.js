'use strict';

describe('Controller: ShoppingcarCtrl', function () {

  // load the controller's module
  beforeEach(module('shoppingAppWebApp'));

  var ShoppingcarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoppingcarCtrl = $controller('ShoppingcarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShoppingcarCtrl.awesomeThings.length).toBe(3);
  });
});
