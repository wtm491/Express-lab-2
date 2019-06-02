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
.component(itemList, {
    controller: itemList,
    template: 
    `
        <div class = "input-container">
            <h1>Database Express Example</h1>
            <div class = user-input>

                <p>Add a new product</p>
                <input ng-model = "newProduct">

                <p>Add a new price</p>
                <input ng-model = "newPrice">

                <p>Add a new quantity</p>
                <input ng-model = "newQuantity">
            </div>
        </div>
        <div class = "table">
        <table style="width:100%">
        <tr>
          <th>id</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
        </div>
    `
})