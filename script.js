function email() {
    const emailInput = document.querySelector(".email-input");
    const errorMessageElement = document.querySelector(".error");
  
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if the email is valid
    if (!emailRegex.test(emailInput.value.trim())) {
      // Add red border to the input field
      emailInput.style.border = "2px solid hsl(354, 100%, 66%)";
  
      // Display the error message
      errorMessageElement.textContent = "Please provide a valid email address";
    } else {
      // Reset the input field and error message if the email is valid
      emailInput.style.border = "1px solid hsl(0, 0%, 59%)";
      errorMessageElement.textContent = ""; // Clear the error message
      console.log("Valid email:", emailInput.value.trim());
    }
  }
  