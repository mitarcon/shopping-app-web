(function(win){
  'use strict';

  /**
   * @ngdoc directive
   * @name shoppingAppWebApp.directive:showProduct
   * @description
   * # showProduct
   */
  angular.module('shoppingAppWebApp')
    .directive('showProduct', function () {
      var directive = {
        templateUrl: 'views/directiveshowproduct.html',
        restrict: 'E', //E = element, A = attribute, C = class, M = comment
        link: link,
        scope: {
            product: '=', // @ => reads the attribute value, = => provides two-way binding, & => works with functions
            addProductToShoppingCarFn: '='
        }
      };
      return directive;

      function link(scope, element, attrs) {

      }

    });

})(window)
