function updateCartNumber() {
  var cart = localStorage.getItem("cart");
  var cartObject = eval(cart);
  console.log(cartObject.length);
  document.getElementById("cart-number").innerHTML = cartObject.length;
}
