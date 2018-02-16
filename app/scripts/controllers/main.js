(function(win){
  'use strict';

  /**
   * @ngdoc function
   * @name shoppingAppWeb.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the shoppingAppWeb
   */
  angular
    .module('shoppingAppWebApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [
    '$rootScope',
    'restProduct',
    'restShoppingCar',
    'Notification'
  ];

  function MainCtrl(
    $rootScope,
    RestProduct,
    RestShoppingCar,
    Notification
  ){

    var vm = this;
    setup();

    vm.addProductToShoppingCar = addProductToShoppingCar;


    function setup(){

      RestProduct.get(
        function(response){
          // Respuesta afirmativa
          vm.products = response.products;
        },
        function(response){
          // Respuesta error
          console.log("response ",response);
          Notification.error("Error al consultar el carrito");
        }
      );

    }

    function addProductToShoppingCar (product){
      var payload = {
            idProduct: product._id,
          };

      RestShoppingCar.save(
        payload,
        function(response){
          // Respuesta afirmativa
          $rootScope.$broadcast('addToShoppingCar', product);
          Notification.info("Agrege al carrito");
        },
        function(response){
          // Respuesta error
          console.log("response ",response);
          Notification.error("Error al agregar al carrito");
        });

    }

  }

})(window);
