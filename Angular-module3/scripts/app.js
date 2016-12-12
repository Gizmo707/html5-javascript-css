(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('MenuURL', 'https://davids-restaurant.herokuapp.com/menu_items.json');

  // Application controller
  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowDown = this;


  }

  MenuSearchService.$inject=['$http', 'MenuURL'];
  function MenuSearchService($http, MenuURL) {
    var service = this;

    service.getMatchedMenuItems - function(searchTerm) {
      return $http({
        method: 'GET',
        url: MenuURL
      }).then(function(result) {
        var foundItems = [];
        for (item in result) {
          if (result[item].description.indexOf(searchTerm) >= 0) {
            foundItems.push(result[item])
          }
        }
        return foundItems;
      })
    }
  }




})();
