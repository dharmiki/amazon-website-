fetch("http://localhost:3000/cart")
    .then(response => response.json())
    .then(cartItems => {
        console.log(cartItems);
        const cartContainer = document.getElementById("cart-items");
        if (cartItems.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cartContainer.innerHTML = cartItems.map(item => `
          <div style="border:1px solid #ccc; margin:10px; padding:16px d-flex ;" class="w-100 p-2 border d-flex border-1 border-top-0 border-start-0 border-end-0 pb-4">
            <img src=${item.image} height="250px"  width="260px">
              <div class="p-3 ms-5">
          <sapm class="">${item.subtitle}
          </sapm><br> <spam
              class="fw-bold   fs-5 ">$499.00</spam><br>
          <spam class="text-success" style="font-size: 13px;">In stock</spam><br>
          <spma style="font-size: 13px;" class="text-secondary">Eligible for FREE Shipping
          </spma><br>
          <img src="image/priti.png"><br>
          <div class="d-flex h-25  mt-2 justify-content-center align-items-center " width="200px">
            <select class="pb-1 rounded-2  " style="background-color: rgb(234, 233, 233);">
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
            <div
              class="border border-top-0 p-2 ms-3 h-50 d-flex justify-content-center align-items-center border-bottom-0 "
              style="font-size: 12px; color: rgb(0, 113, 144);">Delete</div>
            <div class="border border-top-0 p-2  h-50 d-flex justify-content-center align-items-center border-bottom-0 "
              style="font-size: 12px; color: rgb(0, 113, 144);">Select for later</div>
            <div class="border border-top-0 p-2 h-50 d-flex justify-content-center align-items-center border-bottom-0 "
              style="font-size: 12px; color: rgb(0, 113, 144);">See more like this</div>
            <div
              class="border border-top-0 p-2 h-50 me-auto d-flex justify-content-center align-items-center border-bottom-0 "
              style="font-size: 12px; color: rgb(0, 113, 144);">share</div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
            
          </div>
        </div>
          </div>
        `).join('');
        }
    })
    .catch(error => console.error('Error loading cart:', error));

function removeFromCart(id) {
    fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            alert("Product removed from cart");
            window.location.reload(); // refresh cart after delete
        })
        .catch(error => console.error('Error removing item:', error));
}