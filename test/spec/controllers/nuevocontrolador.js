'use strict';

describe('Controller: NuevocontroladorCtrl', function () {

  // load the controller's module
  beforeEach(module('shoppingAppWebApp'));

  var NuevocontroladorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevocontroladorCtrl = $controller('NuevocontroladorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevocontroladorCtrl.awesomeThings.length).toBe(3);
  });
});
