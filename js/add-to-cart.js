var menu = [
  {
    id: 1,
    product_name: "Burger",
    price: 4.99,
    quantity: 3,
  },
  {
    id: 2,
    product_name: "Chicken wrap",
    price: 8.99,
    quantity: 2,
  },
  {
    id: 3,
    product_name: "Veggie Bowl",
    price: 10.0,
    quantity: 1,
  },
];
// set array of object to browser local storage
localStorage.setItem("menu", JSON.stringify(menu));

// add item to cart function
function addItem(id) {
  // retrieve date from browser local storage
  var items = localStorage.getItem("menu");
  var arrayOfObjects = eval(items);
  //   console.log(arrayOfObjects);

  for (i = 0; i < arrayOfObjects.length; i++) {
    var object = arrayOfObjects[i];
    if (object["id"] == id) {
      var oldCart = localStorage.getItem("cart");
      console.log("cart type" + typeof oldCart);
      var newCart = [
        {
          id: object["id"],
          product_name: object["product_name"],
          price: object["price"],
          quantity: 1,
        },
      ];
      console.log(typeof newCart);
      if (oldCart == "[]") {
        console.log("First item added");
        var updateCartObject = [...newCart];
        console.log(typeof updateCartObject);
      } else {
        console.log("second item");
        var updateCartObject = [...eval(oldCart), ...newCart];
        console.log(typeof updateCartObject);
      }
      localStorage.setItem("cart", JSON.stringify(updateCartObject));
    }
  }
  var udpatedCart = localStorage.getItem("cart");
  console.log("updated Cart" + udpatedCart);
  updateCartNumber();
}
