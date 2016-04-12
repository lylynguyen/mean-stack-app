
var app = angular.module('wishlistcreator.list', []);


app.controller('MainCtrl', function ($scope, List) {

  $scope.getList = function () {
    List.getWishList()
    .then(function(lists){
      $scope.productlist = lists;
    });
  }

  $scope.product = {};
  $scope.saveOne = function() {
    List.postToList($scope.product)
    .then(function(){
      $scope.getList();
    })

  }

  $scope.update = function () {
    List.findOneUpdate()
    .then(function(lists) {
      $scope.productlist = lists;
    })
  }

  $scope.delete = function (id) {
    // var id = $scope.productlist._id;
    List.deleteOne(id)
    .then(function() {
      $scope.getList();
    })
  }
$scope.getList();
});
