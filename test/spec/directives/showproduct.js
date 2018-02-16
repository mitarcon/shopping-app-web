'use strict';

describe('Directive: showProduct', function () {

  // load the directive's module
  beforeEach(module('shoppingAppWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<show-product></show-product>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the showProduct directive');
  }));
});
