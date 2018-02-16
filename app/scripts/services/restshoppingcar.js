(function(win){
  'use strict';

  /**
   * @ngdoc service
   * @name shoppingAppWebApp.shoppingCar
   * @description
   * # shoppingCar
   * Factory in the shoppingAppWebApp.
   */
  angular
    .module('shoppingAppWebApp')
    .factory('restShoppingCar', restShoppingCar);

    function restShoppingCar ($resource) {

      var urlShoppingCar = "http://localhost:3800/api/shoppingcar/:idInShoppingCar";

      return $resource(
        urlShoppingCar,
        {
          "idInShoppingCar": "@idInShoppingCar"
        },
        {
          'get': {method:'GET'},
          'save': {method: 'POST'},
          'remove': {method: 'DELETE'}
        }
      );

    }
    
})(window);
