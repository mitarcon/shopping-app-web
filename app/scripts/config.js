(function(win){
  'use strict';

  /**
   * @ngdoc overview
   * @name shoppingAppWebApp
   * @description
   * # shoppingAppWebApp
   *
   * Config of the application.
   */
  angular
    .module('shoppingAppWebApp')
    .config(function(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        });
    });
})(window)
