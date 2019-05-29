function CartService($http, $q) {
    const service = this;


    service.addItem = (item) => {
        return $http({
          url: "/cart-items",
          method: "POST",
          data: item
        }).then((response) => {
          return response.data;
        });
      }
    
    service.removeItem = (id) => {
        return $http({
          url: "/cart-items/" + id,
          method: "DELETE"
        }).then((response) => {
          return response.data;
        });
      }


    service.updateItem = (item, id) => {
        return $http({
          url: "/cart-items/" + id,
          method: "PUT",
          data: item
        }).then((response) => {
          return response.data;
        });
      }
    




}

angular
.module('CartApp')
.service('CartService', CartService);