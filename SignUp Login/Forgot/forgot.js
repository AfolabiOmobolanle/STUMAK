document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const forgotForm = document.getElementById("forgot-content");
  const verifyForm = document.getElementById("verify-form");
  const emailInput = forgotForm.querySelector('input[type="email"]');
  const errorMessage = document.getElementById("errorMessage")

  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    if (emailInput.value.trim() === "") {
      errorMessage.style.display ="block";
    } else {
      forgotForm.classList.remove("active");
      verifyForm.classList.add("active");
      setTimeout(() => {
        forgotForm.style.display = "none";
        verifyForm.style.display = "block";
      }, 400);
    }
  });
});
