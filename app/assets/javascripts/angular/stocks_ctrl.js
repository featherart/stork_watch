// app.controller('StocksCtrl', ['$scope', '$resource', function($scope, $resource) {
//   console.log("in stocks controller");
//   var Stocks = $resource('/api/stocks');
//   $scope.stocks = Stocks.query();
// }]);

// app.controller('StocksCtrl', ['$scope', 'Stock', function($scope, Stock) {
//   $scope.stocks = Stock.all();
// }]);

app.controller('StocksCtrl', ['$scope', 'Stock', function($scope, Stock) {
  $scope.stocks = Stock.all();
  
  $scope.deleteStock = function(id, idx) {
    $scope.stocks.splice(idx, 1);
    return Stock.delete(id);
  };
}]);