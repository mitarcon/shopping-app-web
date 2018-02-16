(function(win){
  'use strict';

  /**
   * @ngdoc overview
   * @name shoppingAppWebApp
   * @description
   * # shoppingAppWebApp
   *
   * Routes of the application.
   */
  angular
    .module('shoppingAppWebApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

})(window);
