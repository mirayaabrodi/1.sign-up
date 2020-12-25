// VALID COLOR: #9CE2B6
// INVALID COLOR: ff6938

// Selector

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm-password");
const form = document.getElementById("form");

// Add Event Listener

// email.addEventListener("input", function() {
//   console.log("Typing")
// })

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Creat Account");

  checkInputs();
});

// Function

function checkInputs() {
  // Values from the Inputs

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmValue = password2.value.trim();

  // Username
  if (usernameValue === "") {
    username.style.border = "2px solid #ff6938";
  } else {
    username.style.border = "2px solid #9CE2B6";
  }

  // Email
  if (emailValue === "") {
    email.style.border = "2px solid #ff6938";
  } else {
    email.style.border = "2px solid #9CE2B6";
  }

  // Password
  if (
    passwordValue.length < 6 ||
    passwordValue === "" 
  ) {
    password.style.border = "2px solid #ff6938";
  } else {
    password.style.border = "2px solid #9CE2B6";
  }

  // Password2 (Confirm)
  if (
    confirmValue.length < 6 ||
    confirmValue === "" ||
    confirmValue !== passwordValue 
  ) {
    password2.style.border = "2px solid #ff6938";
  } else {
    password2.style.border = "2px solid #9CE2B6";
  }
}
