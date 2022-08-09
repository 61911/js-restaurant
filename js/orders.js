function proceedNow() {
  var cart = localStorage.getItem("cart");
  var orders = JSON.stringify(eval(cart));

  localStorage.setItem("orders", orders); // adding cart to orders
  localStorage.setItem("cart", "[]");
  alert("Your order is submitted");
}

r(function () {
  showOrders();
});
function r(f) {
  /in/.test(document.readyState) ? setTimeout("r(" + f + ")", 9) : f();
}

function showOrders() {
  var orders = localStorage.getItem("orders");
  var ordersObject = eval(orders);

  var itemContainer = document.getElementById("item-container");

  var finalTotal = 0;
  var deliveryCost = 4;
  var subTotal = 0;

  for (i = 0; i < ordersObject.length; i++) {
    var object = ordersObject[i];
    var itemCost = 0;
    itemCost = object["price"] * object["quantity"];
    subTotal += itemCost;
  }
  finalTotal = deliveryCost + subTotal;

  for (i = 0; i < ordersObject.length; i++) {
    orderItem = ordersObject[i];

    var orderContainer = `
                <div class="row align-items-start">
                    <div class="col-8">
                        <h4>${orderItem["product_name"]} (${orderItem["quantity"]})</h4>
                    </div>
                    <div class="col-4">
                        <h4 class="text-muted menu-price">$${orderItem["price"]}</h4>
                    </div>
                </div> 
    `;
    itemContainer.innerHTML += orderContainer;
  }
  itemContainer.innerHTML += `
    <p class="text-muted">Ordered By: Alexander Griffin</p>
    <p class="text-muted"> Total:<span style="color: green; font-weight: bold;">
            $${finalTotal}(incl. tax and delivery charge)</span></p>    
    `;
}
