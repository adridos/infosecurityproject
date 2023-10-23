var myInput = document.getElementById("register-password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.oninput = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

//disable create account button unless the requirements are met!
var createAccountButton = document.querySelector(".register-form button:last-of-type");
var usernameInput = document.querySelector(".register-form input[type='text'][placeholder='username']");
var emailInput = document.querySelector(".register-form input[type='email'][placeholder='email address']");

function updateCreateButtonState() {
  var passwordValid = letter.classList.contains("valid") && capital.classList.contains("valid") && number.classList.contains("valid") && length.classList.contains("valid");
  var usernameFilled = usernameInput.value.trim() !== "";
  var emailFilled = emailInput.value.trim() !== "";

  if (passwordValid && usernameFilled && emailFilled) {
    createAccountButton.removeAttribute("disabled");
  } else {
    createAccountButton.setAttribute("disabled", "true");
  }
}

 //Attach the updateCreateButtonState function to the "input" event of the password, username, and email input fields
myInput.addEventListener("input", updateCreateButtonState);
usernameInput.addEventListener("input", updateCreateButtonState);
emailInput.addEventListener("input", updateCreateButtonState);
