(function(win){
  'use strict';

  /**
   * @ngdoc service
   * @name shoppingAppWebApp.restProduct
   * @description
   * # restProduct
   * Service in the shoppingAppWebApp.
   */
  angular
    .module('shoppingAppWebApp')
    .factory('restProduct', restProduct);

  function restProduct($resource){

    var urlProduct = "http://localhost:3800/api/product";

    return $resource(
      urlProduct,
      {
        'get': {method:'GET'},
      }
    );

  }
  
})(window);
