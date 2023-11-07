// JavaScript for Login Form
const toggleLoginPassword = document.querySelector("#toggleLoginPassword");
const loginPassword = document.querySelector("#login-password");

toggleLoginPassword.addEventListener("click", function () {
    // Toggle the type attribute
    const type = loginPassword.getAttribute("type") === "password" ? "text" : "password";
    loginPassword.setAttribute("type", type);
    
    // Toggle the icon class
    if (this.classList.contains("bi-eye-slash")) {
        this.classList.remove("bi-eye-slash");
        this.classList.add("bi-eye");
    } else {
        this.classList.remove("bi-eye");
        this.classList.add("bi-eye-slash");
    }
});

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // You can add your login form handling code here
});

// JavaScript for Registration Form
const toggleRegPassword = document.querySelector("#toggleRegPassword");
const regPassword = document.querySelector("#register-password");

toggleRegPassword.addEventListener("click", function () {
    // Toggle the type attribute
    const type = regPassword.getAttribute("type") === "password" ? "text" : "password";
    regPassword.setAttribute("type", type);
    
    // Toggle the icon class
    if (this.classList.contains("bi-eye-slash")) {
        this.classList.remove("bi-eye-slash");
        this.classList.add("bi-eye");
    } else {
        this.classList.remove("bi-eye");
        this.classList.add("bi-eye-slash");
    }
});

const regForm = document.querySelector(".register-form");
regForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // You can add your registration form handling code here
});