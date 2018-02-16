'use strict';

describe('Service: restShoppingCar', function () {

  // load the service's module
  beforeEach(module('shoppingAppWebApp'));

  // instantiate service
  var restShoppingCar;
  beforeEach(inject(function (_restShoppingCar_) {
    restShoppingCar = _restShoppingCar_;
  }));

  it('should do something', function () {
    expect(!!restShoppingCar).toBe(true);
  });

});
