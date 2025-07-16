let currentOTP = "";

function generateOTP() {
  const phone = document.getElementById("phoneInput").value;
  if (phone.trim() === "") {
    Swal.fire("Please enter a mobile number or email.");
    return;
  }
  currentOTP = Math.floor(1000 + Math.random() * 9000).toString();
  document.getElementById("generatedOtp").textContent = currentOTP;
  document.getElementById("otpSection").style.display = "block";
}

function verifyOTP() {
  const enteredOTP = document.getElementById("otpInput").value;
  if (enteredOTP === currentOTP) {
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'Welcome back!',
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
      modal.hide();
      resetOTPModal();
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Invalid OTP',
      text: 'Please try again.'
    });
  }
}

function resetOTPModal() {
  currentOTP = "";
  document.getElementById("generatedOtp").textContent = "";
  document.getElementById("otpInput").value = "";
  document.getElementById("otpSection").style.display = "none";
  document.getElementById("phoneInput").value = "";
}

const exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', resetOTPModal);


fetch("db.json")
  .then(response => response.json())
  .then(products => {
    console.log(products.electronic)
    const productList = document.getElementById('product-list').innerHTML = prod(products.electronic);
  })
  .catch(error => console.error('Error fetching products:', error));
function prod(pro) {
  return pro.map((el, i) => {
    return `
      <a href="electronicSingle.html?id=${el.id}" class="text-decoration-none text-dark w-[23%] ">
        <div class="h-[450px] p-2 d-flex justify-content-between align-items-start flex-column overflow-hidden p-1">
          <img src="${el.image}" class="w-[100%] h-[65%] p-3">
          <h6>${el.title}</h6>
          <p>${el.subtitle}</p>
        </div>
      </a>`;
  }).join("");
}
