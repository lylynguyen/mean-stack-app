var app = angular.module('wishlistcreator.services', []);

app.factory('List', function($http){
    var getWishList = function(){
    return $http({
      method: 'GET',
      url:'/productlist'
    })
    .then (function(resp){
      console.log(resp);
      return resp.data;
    })
  }

  var postToList = function(product){
    return $http({
      method: 'POST',
      url: '/productlist',
      data: product
    })
  }

  var findOneUpdate = function(id){
    return $http({
      method: "PUT",
      url: '/productlist' + id
    })
    .then(function(resp) {
      console.log("resp.data is", resp.data);
      return resp.data;
    })
  }

  var deleteOne = function (id) {
    return $http({
      method: "DELETE",
      url: '/productlist/' + id
    })
    .then(function(resp) {
      return resp.data;
    })
  }

  return {
    getWishList: getWishList,
    postToList: postToList,
    findOneUpdate: findOneUpdate,
    deleteOne: deleteOne
  };
});

