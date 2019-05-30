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

      ctrl.removeItem = (id) => {

        CartService.removeItem(id)
        .then( (data) => {
          ctrl.cartData = data;
        })
      }

}

angular 
.module('CartApp')
.component(itemList, {
    controller: itemList,
    template: 
    `
        <div class = "container">
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
    `
})