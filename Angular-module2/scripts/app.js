(function () {
  'use strict'

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // Items to buy controller
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();


    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };

    toBuy.emptyToBuy = function () {
      return ShoppingListCheckOffService.emptyToBuy();
    }
    toBuy.itemName = '';
    toBuy.itemQuantity = '';

    toBuy.addItem = function () {
      ShoppingListCheckOffService.additem(toBuy.itemName, toBuy.itemQuantity);
    }
  }

  // bougth items controller
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getItemsBought();
    bought.emptyBought = function () {
      return ShoppingListCheckOffService.emptyBought();
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      {name: 'bags of cookies',        quantity: 3},
      {name: 'bags of chips',          quantity: 5},
      {name: 'bottles of soft drinks', quantity: 2},
      {name: 'bottle of hard drink',   quantity: 1},
      {name: 'pepperoni frozen pizza', quantity: 1},
      {name: 'bottles of antiacid',    quantity: 2}
    ];

    var itemsBought = [];

    service.additem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemsToBuy.push(item);
    };

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.buyItem = function (itemIndex) {
      var item = itemsToBuy[itemIndex];
      itemsToBuy.splice(itemIndex,1);
      itemsBought.push(item);
    };

    service.emptyToBuy = function () {
      return itemsToBuy.length === 0;
    };

    service.emptyBought = function () {
      return itemsBought.length === 0;
    };
  }
})();
