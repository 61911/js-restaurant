function addQuantity(productId) {
  var cart = localStorage.getItem("cart");
  var cartObject = eval(cart);

  console.log("cart", cartObject);
  for (i = 0; i < cartObject.length; i++) {
    var cart = cartObject[i];
    if (cart["id"] == productId) {
      var newCart = [
        {
          id: cart["id"],
          product_name: cart["product_name"],
          price: cart["price"],
          quantity: cart["quantity"] + 1,
        },
      ];
      const updatedOldCartObject = cartObject.filter(
        (item) => item.id !== productId
      );

      console.log("remove item", updatedOldCartObject);
      var updateCartObject = [...updatedOldCartObject, ...newCart];
      console.log("Added again", updateCartObject);
      localStorage.setItem("cart", JSON.stringify(updateCartObject));
    }
  }
  loadCart();
}

function minusQuantity(productId) {
  console.log("product ID", productId);
  var cart = localStorage.getItem("cart");
  var cartObject = eval(cart);

  console.log("cart", cartObject);
  for (i = 0; i < cartObject.length; i++) {
    var cart = cartObject[i];
    if (cart["id"] == productId) {
      var newCart = [
        {
          id: cart["id"],
          product_name: cart["product_name"],
          price: cart["price"],
          quantity: cart["quantity"] - 1,
        },
      ];
      const updatedOldCartObject = cartObject.filter(
        (item) => item.id !== productId
      );

      console.log("remove item", updatedOldCartObject);
      var updateCartObject = [...updatedOldCartObject, ...newCart];
      console.log("Added again", updateCartObject);
      localStorage.setItem("cart", JSON.stringify(updateCartObject));
    } else {
      console.log("not found");
    }
  }
  loadCart();
}
