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

    narrowDown.searchTerm = '';

    narrowDown.getItems =  function() {
      MenuSearchService
          .getMatchedMenuItems(narrowDown.searchTerm.toLowerCase())
          .then(
            function(result) {
              narrowDown.found = result
            }
          );
    }

  }

  MenuSearchService.$inject=['$http', 'MenuURL'];
  function MenuSearchService($http, MenuURL) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      // if (searchTerm === '') {
      //   return [];
      // }
      return $http({
        method: 'GET',
        url: MenuURL
      }).then(function(result) {
        var foundItems = [];
        if (searchTerm === '') {
          return [];
        }
        for (var item in result.data.menu_items) {
          if (result.data.menu_items[item]
                .description.toLowerCase().indexOf(searchTerm) >= 0) {
            foundItems.push(result.data.menu_items[item]);
          }
        }
        return foundItems;
      })
    }
  }




})();
