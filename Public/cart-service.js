function CartService($http, $q) {
    const service = this;

    service.itemList = [];



    service.addItem = (item) => {
        service.itemList.push(item);
        return $http({
          url: "/cart-items/",
          method: "POST",
          data: item
        }).then((response) => {
          return response.data;
        });
      }
    
    service.removeItem = (item) => {
        // let index = service.itemList.indexOf(item);
        // service.cartList.splice(index, 1);

        return $q((resolve, reject) => {
             $http({
                url: "/cart-items/" + item.id,
                method: "DELETE",
                data: item
              }).then((response) => {
                resolve(item)
                // return response.data;
              })
        })
        // return $http({
        //   url: "/cart-items/" + id,
        //   method: "DELETE"
        // }).then((response) => {
        //   return response.data;
        // });
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