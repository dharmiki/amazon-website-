let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-items");

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartContainer.innerHTML = cartItems.map((item, index) => `
          <div class="w-100 p-2 border d-flex border-1 border-top-0 border-start-0 border-end-0 pb-4">
            <img src="${item.image}" height="250px" width="260px">
            <div class="p-3 ms-5">
              <span>${item.subtitle}</span><br>
              <span class="fw-bold fs-5">$${item.price}</span><br>
              <span class="text-success" style="font-size: 13px;">In stock</span><br>
              <span class="text-secondary" style="font-size: 13px;">Eligible for FREE Shipping</span><br>
              <img src="image/priti.png"><br>
              <div class="d-flex h-25 mt-2 justify-content-center align-items-center">
                <select class="pb-1 rounded-2" style="background-color: rgb(234, 233, 233);">
                  <option>Qty:1</option>
                  <option>0 (Delete)</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <div class="border p-2 ms-3 h-50 d-flex justify-content-center align-items-center"
                     style="font-size: 12px; color: rgb(0, 113, 144); cursor:pointer;"
                     onclick="removeFromCart(${index})">Delete</div>
              </div>
            </div>
          </div>
        `).join('');
  }
});

function removeFromCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  alert("Item removed from cart.");
  window.location.reload();
}

function price() {

  console.log(cartItems)
  var price = 0


  cartItems.forEach((el, i) => {
    price = price + Number(el.price)
  })
  console.log(price)

  document.getElementById("rs").innerHTML = " = $" + price
  document.getElementById("item").innerHTML = "(" + cartItems.length + " items )"

  document.getElementById("done").addEventListener("click", () => {
    alert("Successfully Added")
    window.location.href = "index.html";
  })



}

price()
