function updateCartNumber() {
  var cart = localStorage.getItem("cart");
  var cartObject = eval(cart);
  document.getElementById("cart-number").innerHTML = cartObject.length;
}
