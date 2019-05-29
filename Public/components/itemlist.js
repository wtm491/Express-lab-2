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

        </div>
    `
})