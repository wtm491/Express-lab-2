// front-end functionality and angular template here 

function itemList(CartService) {

    const ctrl = this; 

    ctrl.addItem = (newProduct, newPrice, newQuantity) => {
    
        let newItem = {
          product: newProduct,
          price: newPrice,
          quantity: newQuantity,
        } 
        
        CartService.addItem(newItem)
        .then( (data) => {
          ctrl.cartData = data;
        })
      }

      ctrl.removeItem = (item) => {

        CartService.removeItem(item)
        .then( (data) => {
          ctrl.cartData = data;
        })
      }

      ctrl.updateItem = (item) => {
          CartService.updateItem(item)
          .then((data) => {

          })
      }
}

//template needs updating and styles
angular 
.module('CartApp')
.component('itemList', {
    controller: itemList,
    template: 
    `
        <div class = "input-container">
            <h1>Database Express Example</h1>
            <div class = user-input>

                <button type = "button">Add a new product</button>
                <input ng-model = "newProduct">

                <button type = "button">Add a new price</button>
                <input ng-model = "newPrice">

                <button type = "button">Add a new quantity</button>
                <input ng-model = "newQuantity">
            </div>
        </div>
        <div class = "table">
        <table>
        <thead>
            <tr>          
                <th>ID</th>
                <th>Product</th>
                <th>Price</th> 
                <th>Quantity</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="item in $ctrl.itemList">
                <td> {{item.id}} </td>
                <td> {{item.product}} </td>
                <td> {{item.price}} </td>
                <td> {{item.quantity}} 
                  
                <button ng-click="$ctrl.updateItem(item, 5)" class="new_quantity">Update Quantity</button> 
                </td>
                
                <td> <button ng-click="$ctrl.removeItem(item)">X</button> </td>
            </tr>
          </tbody>
      </table>
  
        </div>
    `
})

