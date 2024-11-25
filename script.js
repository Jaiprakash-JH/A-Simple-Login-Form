// Toggle between Login and Signup forms
function toggleForm() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const title = document.getElementById("form-title");
    const toggleLink = document.getElementById("toggle-link");
    const forgetPass = document.getElementById("forget-password-form");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        forgetPass.style.display = "none";
        title.textContent = "Login";
        toggleLink.textContent = "Don't have an account? Signup";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        title.textContent = "Signup";
        toggleLink.textContent = "Already have an account? Login";
    }
}

// Show Forget Password form
function showForgetPassword() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const forgetPasswordForm = document.getElementById("forget-password-form");

    loginForm.style.display = "none";
    signupForm.style.display = "none";
    forgetPasswordForm.style.display = "block";
}

// Submit login form (for demonstration purposes)
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    console.log("Login Details:", email, password);
});

// Submit signup form (for demonstration purposes)
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    console.log("Signup Details:", name, email, password);
});

// Submit forget password form (for demonstration purposes)
document.getElementById("forget-password-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("forget-email").value;
    console.log("Forget Password Email:", email);
});
const signupPassword = document.getElementById('signup-password');
const signupButton = document.getElementById('signup-button');

const minChar = document.getElementById('min-char');
const specialChar = document.getElementById('special-char');
const numberChar = document.getElementById('number-char');
const uppercaseChar = document.getElementById('uppercase-char');
const lowercaseChar = document.getElementById('lowercase-char');

signupPassword.addEventListener('input', () => {
    const password = signupPassword.value;

    // Check each condition
    const isMinLength = password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    // Update UI based on conditions
    updateRequirement(minChar, isMinLength);
    updateRequirement(specialChar, hasSpecialChar);
    updateRequirement(numberChar, hasNumber);
    updateRequirement(uppercaseChar, hasUppercase);
    updateRequirement(lowercaseChar, hasLowercase);

    // Enable or disable signup button based on all conditions
    signupButton.disabled = !(isMinLength && hasSpecialChar && hasNumber && hasUppercase && hasLowercase);
});

function updateRequirement(element, isValid) {
    if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
        element.querySelector('span').textContent = '✔️';
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
        element.querySelector('span').textContent = '❌';
    }
}