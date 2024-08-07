document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("toggle-switch");
    const customerForm = document.getElementById("customer-form");
    const customerImg = document.getElementById("customer-img");
    const vendorImg = document.getElementById("vendor-img");
    const vendorForm = document.getElementById("vendor-form");
  
    toggleSwitch.addEventListener("change", function() {
      if (toggleSwitch.checked) {
        customerForm.classList.remove("active");
        customerImg.classList.remove("active");
        vendorForm.classList.add("active");
        vendorImg.classList.add("active");
        setTimeout(() => {
          customerForm.style.display = "none";
          customerImg.style.display = "none";
          vendorForm.style.display = "block";
          vendorImg.style.display = "block";
        }, 400); // Matches the transition duration
      } else {
        vendorForm.classList.remove("active");
        vendorImg.classList.remove("active");
        customerForm.classList.add("active");
        customerImg.classList.add("active");
        setTimeout(() => {
          vendorForm.style.display = "none";
          vendorImg.style.display = "none";
          customerForm.style.display = "block";
          customerImg.style.display = "block";
        }, 400); // Matches the transition duration
      }
    });
  });
  