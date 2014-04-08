var app = angular.module("StockWatch", ['ngResource']);

console.log("in main");

// app.controller('StocksCtrl', ['$scope', '$resource', function($scope, $resource) {
//   console.log("in stocks controller");
//   var Stocks = $resource('/api/stocks');
//   $scope.stocks = Stocks.query();
// }]);