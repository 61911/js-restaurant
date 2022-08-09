function deleteItem(productID) {
  var cart = localStorage.getItem("cart");
  var cartObject = eval(cart);

  for (i = 0; i < cartObject.length; i++) {
    var cart = cartObject[i];
    if (cart["id"] == productID) {
      const updatedOldCartObject = cartObject.filter(
        (item) => item.id !== productID
      );
      localStorage.setItem("cart", JSON.stringify(updatedOldCartObject));
    }
  }
  loadCart();
}
