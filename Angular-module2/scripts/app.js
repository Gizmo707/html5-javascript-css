(function () {
  'use strict'

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // Items to buy controller
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {

  }

  // items already bougth controller
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController() {

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      {name: 'bags of cookies', quantity: 3},
      {name: 'bags of chips', quantity: 5},
      {name: 'bottles of soft drinks', quantity: 2},
      {name: 'bottle of hard drink',quantity: 1},
      {name: 'pepperoni frozen pizza',quantity: 1},
      {name: 'bottles of antiacid', quantity: 2}
    ];

    var itemsBougth = [];

    service.additem = function (itemName, quantity) {
      var item = {
        name: itemname,
        quantity: quantity
      };
      itemsToBuy.push(item);
    };

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBougth = function () {
      return itemsBougth;
    };

    service.buyItem = function (itemIndex) {
      var item = itemsToBuy[itemIndex];
      itemsToBuy.splice(itemIndex,1);
      itemsBougth.push(item);
    };

  }
}
)();
