var menu = [
  {
    id: 1,
    product_name: "Egg Sandwich",
    price: 20,
    quantity: 1,
  },
  {
    id: 2,
    product_name: "Cinnamon Rolls",
    price: 10,
    quantity: 1,
  },
  {
    id: 3,
    product_name: "Egg Muffins",
    price: 12,
    quantity: 1,
  },
  {
    id: 4,
    product_name: "Banana Bread",
    price: 13,
    quantity: 1,
  },
  {
    id: 5,
    product_name: "Easy Breakfast Casserole",
    price: 17,
    quantity: 1,
  },
  {
    id: 6,
    product_name: "French Toast Casserole",
    price: 3,
    quantity: 1,
  },
  {
    id: 7,
    product_name: "Biscuits and Gravy Casserole",
    price: 18,
    quantity: 1,
  },
  {
    id: 8,
    product_name: "Breakfast Pizza",
    price: 19,
    quantity: 1,
  },
  {
    id: 9,
    product_name: "Chocolate Chip Muffins",
    price: 21,
    quantity: 1,
  },
  {
    id: 10,
    product_name: "AVOCADO EGG SALAD",
    price: 13,
    quantity: 1,
  },
  {
    id: 11,
    product_name: "CHICKEN WRAP",
    price: 10,
    quantity: 1,
  },
  {
    id: 12,
    product_name: "ITALIAN DELI SANDWICHE",
    price: 12,
    quantity: 1,
  },
  {
    id: 13,
    product_name: "ALOO GOBI",
    price: 13,
    quantity: 1,
  },
  {
    id: 14,
    product_name: "BLT PASTA SALAD",
    price: 17,
    quantity: 1,
  },
  {
    id: 15,
    product_name: "BURRITO BOWLS",
    price: 18,
    quantity: 1,
  },
  {
    id: 16,
    product_name: "CHICKEN SALAD",
    price: 19,
    quantity: 1,
  },
  {
    id: 17,
    product_name: "CHICKEN SHAWARMA",
    price: 21,
    quantity: 1,
  },
  {
    id: 18,
    product_name: "GUACAMOLE SALAD",
    price: 3,
    quantity: 1,
  },
  {
    id: 19,
    product_name: "Paneer Tikka Masala",
    price: 21,
    quantity: 1,
  },
  {
    id: 20,
    product_name: "Dosha",
    price: 15,
    quantity: 1,
  },
  {
    id: 21,
    product_name: "Butter-Nan",
    price: 15,
    quantity: 1,
  },
  {
    id: 22,
    product_name: "Biryani",
    price: 16,
    quantity: 1,
  },
  {
    id: 23,
    product_name: "Chhole",
    price: 19,
    quantity: 1,
  },
  {
    id: 24,
    product_name: "Malai Kofta",
    price: 23,
    quantity: 1,
  },
  {
    id: 25,
    product_name: "Jeera Rice",
    price: 12,
    quantity: 1,
  },
  {
    id: 26,
    product_name: "Veg Malai",
    price: 12,
    quantity: 1,
  },
  {
    id: 27,
    product_name: "Palak Paneer",
    price: 10,
    quantity: 1,
  },
  {
    id: 28,
    product_name: "Ice Creame",
    price: 8,
    quantity: 1,
  },
  {
    id: 29,
    product_name: "Chocolate Coffee",
    price: 12,
    quantity: 1,
  },
  {
    id: 30,
    product_name: "Margerita Pizza",
    price: 9,
    quantity: 1,
  },
  {
    id: 31,
    product_name: "ALOO GOBI",
    price: 13,
    quantity: 1,
  },
  {
    id: 32,
    product_name: "Wings",
    price: 25,
    quantity: 1,
  },
  {
    id: 33,
    product_name: "Slice",
    price: 25,
    quantity: 1,
  },
  {
    id: 34,
    product_name: "Fries",
    price: 17,
    quantity: 1,
  },
  {
    id: 35,
    product_name: "Poutine",
    price: 15,
    quantity: 1,
  },
  {
    id: 36,
    product_name: "Burger",
    price: 12,
    quantity: 1,
  },
  {
    id: 37,
    product_name: "Nuggets",
    price: 20,
    quantity: 1,
  },
  {
    id: 38,
    product_name: "Beef Stake Sauce",
    price: 15,
    quantity: 1,
  },
  {
    id: 39,
    product_name: "Salmon Zucchini",
    price: 12,
    quantity: 1,
  },
];
// set array of object to browser local storage
localStorage.setItem("menu", JSON.stringify(menu));
cart = [];
localStorage.setItem("cart", JSON.stringify(cart));

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
      // first phase when the cart is empty
      if (oldCart == "[]") {
        var newCart = [
          {
            id: object["id"],
            product_name: object["product_name"],
            price: object["price"],
            quantity: 1,
          },
        ];
        var updateCartObject = [...newCart];
        console.log("Item added first time");
      } else {
        console.log("Cart is not empty");
        var oldCartobject = eval(oldCart);
        var temp = false;
        for (cartItem = 0; cartItem < oldCartobject.length; cartItem++) {
          console.log("WHOLE CART", oldCartobject);
          var oldCartItem = oldCartobject[cartItem];

          if (oldCartItem["id"] == id) {
            console.log("Duplicate Item Found");
            var newCart = [
              {
                id: oldCartItem["id"],
                product_name: oldCartItem["product_name"],
                price: oldCartItem["price"],
                quantity: oldCartItem["quantity"] + 1,
              },
            ];
            const updatedOldCartObject = oldCartobject.filter(
              (item) => item.id !== id
            );
            console.log("NEW one", updatedOldCartObject);

            console.log("UPDATED WHOLE CART", oldCartobject);

            var updateCartObject = [...updatedOldCartObject, ...newCart];
            console.log("done");
            temp = true;
          } else {
            if (temp == false) {
              console.log("New item added to the existing cart.");
              var newCart = [
                {
                  id: object["id"],
                  product_name: object["product_name"],
                  price: object["price"],
                  quantity: 1,
                },
              ];
              var updateCartObject = [...eval(oldCart), ...newCart];
            }
          }
        }
      }

      localStorage.setItem("cart", JSON.stringify(updateCartObject));
    }
  }
  updateCartNumber(); // update the cart number in menu
}
