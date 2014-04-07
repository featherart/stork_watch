app.controller('StocksCtrl', ['$scope', '$resource', function($scope, $resource) {
  console.log("in stocks controller");
  var Stocks = $resource('/api/stocks');
  $scope.stocks = Stocks.query();
}]);