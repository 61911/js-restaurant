function loadCart() {
  document.getElementById("cart-section").innerHTML = null;
  var cartSection = document.getElementById("cart-section");
  var cart = localStorage.getItem("cart");
  var cartObject = eval(cart);

  var yourOrder = `
        <div class="d-flex justify-content-between align-items-center"
        style="padding-top: 20px; padding-left: 80px;">
        <h3 class="fw-normal mb-0 text-black">Your Order</h3>
        </div>
        `;
  cartSection.innerHTML += yourOrder;
  for (i = 0; i < cartObject.length; i++) {
    var object = cartObject[i];

    // binding value to html content
    var item = `
  <div class="container h-100 py-1">
  <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">
          <div class="card rounded-3">
              <div class="card-body p-4">
                  <div class="row d-flex justify-content-between align-items-center">
                     
                      <div class="col-md-3 col-lg-3 col-xl-3">
                          <p class="lead fw-normal mb-2" id="product-name">${object["product_name"]}</p>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button class="btn btn-link px-2" onclick="minusQuantity(${object["id"]})"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                              <i class="fas fa-minus"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value="${object["quantity"]}" type="number"
                              class="form-control form-control-sm" style="width: 50px;" />

                          <button class="btn btn-link px-2" onclick="addQuantity(${object["id"]})"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                              <i class="fas fa-plus"></i>
                          </button>
                      </div>
                      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 class="mb-0">$${object["price"]}</h5>
                      </div>
                      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-danger" onclick="deleteItem(${object["id"]})"><i class="fas fa-trash fa-lg"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
`;
    // binding end here
    cartSection.innerHTML += item;
  }
  //   calculating the order amount
  var finalTotal = 0;
  var deliveryCost = 4;
  var subTotal = 0;
  for (i = 0; i < cartObject.length; i++) {
    var object = cartObject[i];
    var itemCost = 0;
    itemCost = object["price"] * object["quantity"];
    subTotal += itemCost;
  }
  finalTotal = deliveryCost + subTotal;

  // adding the oder amount and proceed button
  var paymentButton = `
        <div class="card mb-4" style="width: 635px; margin-left: 80px; padding: 25px;">
        <p><span style="font-weight: bold;">Sub Total:</span> $${subTotal}</span>
        <p><span style="font-weight: bold; margin-top: -20px;">Delivery Service:</span> $${deliveryCost}</p>
        <p><span style="font-weight: bold;">Final Price:</span> <span style="color: green; font-weight: bold;">$${finalTotal}</span></p>
        </div>

        <div class="card">
        <div class="card-body">
            <button type="button" class="btn btn-warning btn-block btn-lg" onclick="proceedNow()">Proceed to
                Pay</button>
        </div>
        </div>

  `;
  var nameFied = `
  <input type="text" class="form-control" id="full-name" 
            placeholder="Enter your full name" style="width: 635px; margin-left: 80px; padding: 15px;"
            required>
  `;
  cartSection.innerHTML += nameFied;
  cartSection.innerHTML += paymentButton;
}
