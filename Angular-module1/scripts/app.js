(function () {
  'use strict';

  angular.module("LunchCheck",[])
  .controller('LunchCheckController', MsgController);

  MsgController.Sinject - ['$scope'];

  function MsgController($scope) {
    $scope.message = "";
    $scope.foodItems = "";
    $scope.group = "";

    $scope.isTooMuch = function () {
      var items = $scope.foodItems;
      if (items == "") {
        $scope.message = "Please enter data first";
        $scope.group = "noData";
      }
      else {
        $scope.group = "ok";
        items = getItems(items); // process input
        if (items.length > 3) {
          $scope.message = "Too much!"
        } else {
          $scope.message = "Enjoy!"
        }
      }
    }

    // Trim food items and eliminate empty items
    function getItems(items) {
      var itemList = items.split(",");
      var result = [];
      for (var item in itemList) {
        var elem = itemList[item].trim();
        if (elem != "") { // if non empty, add to result
          result.push(elem);
        }
      }
      return result;
    }
  }
})();
