(function(win){
  'use strict';

  /**
   * @ngdoc function
   * @name shoppingAppWebApp.controller:ShoppingcarCtrl
   * @description
   * # ShoppingcarCtrl
   * Controller of the shoppingAppWebApp
   */
  angular.module('shoppingAppWebApp')
    .controller('ShoppingcarCtrl', ShoppingcarCtrl);

    ShoppingcarCtrl.$inject = [
      '$rootScope',
      '$scope',
      'restShoppingCar',
      '$mdDialog',
      'Notification'
    ];

    function ShoppingcarCtrl (
      rootScope,
      scope,
      RestShoppingCar,
      $mdDialog,
      Notification
    ) {
      var vm = this;
      setup();
      scope.$on('addToShoppingCar', addToShoppingCarOn);
      scope.$on('deleteFromShoppingCar', deleteFromShoppingCarOn);
      vm.showShoppingCar = showShoppingCar;

      function setup (){

        RestShoppingCar.get(
          function(response){
            // Respuesta afirmativa
            vm.shoppingList = response.shoppingCar;
          },
          function(response){
            // Respuesta error
            console.log("response ",response);
            Notification.error("Error al consultar el carrito");
          }
        );

      }

      function addToShoppingCarOn (event, data){

        setup();

      }

      function deleteFromShoppingCarOn (event, data){

        setup();

      }

      function showShoppingCar (ev){

        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/popupshoppingcar.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: false,
          locals: {
            data: {
              shoppingList: vm.shoppingList,
              deleteItem: deleteItem
            }
          }
        })
        .then(function(answer) {
          console.log("la respuesta fue ", answer);
        }, function() {
          console.log("Hubo error");
        });

      }

      function DialogController ($scope, $mdDialog, data){
        $scope.shoppingList = data.shoppingList;

        $scope.close = close;
        $scope.deleteItem = _deleteItem;

        function close(){
          $mdDialog.hide();
        }

        function _deleteItem (item){

          data.deleteItem(item, callback);

        }

        function callback(item){
          $scope.shoppingList =
            $scope.shoppingList.filter(
              function(i){
                return i._id !== item._id
              }
            );
        }
      }

      function deleteItem (item, callback){

        var payload = {
          idInShoppingCar: item._id
        };

        RestShoppingCar.remove(
          payload,
          function(response){
            // Respuesta afirmativa
            Notification.info("Elimine del carrito");
            rootScope.$broadcast('deleteFromShoppingCar', item);

            if(angular.isFunction(callback))
              callback(item)

          },
          function(response){
            // Respuesta error
            console.log("response ",response);
            Notification.error("Error al eliminar el carrito");
          });

      }

    } // Close ShoppingcarCtrl

})(window);
