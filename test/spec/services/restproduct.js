'use strict';

describe('Service: restProduct', function () {

  // load the service's module
  beforeEach(module('shoppingAppWebApp'));

  // instantiate service
  var restProduct;
  beforeEach(inject(function (_restProduct_) {
    restProduct = _restProduct_;
  }));

  it('should do something', function () {
    expect(!!restProduct).toBe(true);
  });

});
