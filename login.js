// md5_password_check.js

// Simulate a hardcoded MD5 hash for the password "Crypto_Failure"
const storedHash = "cd433cbef0f7207b0fc6db9d9f57e849"; // MD5 of "Crypto_Failure"

// Function to hash input using MD5 (you'll need an MD5 library, such as CryptoJS)
function md5(input) {
    // This requires you to include an MD5 library in your HTML
    return CryptoJS.MD5(input).toString();
}

// Function to handle login
function handleLogin() {
    const passwordInput = document.getElementById("password").value;

    // Hash the user input and compare it to the stored hash
    const hashedInput = md5(passwordInput);

    if (hashedInput === storedHash) {
        alert("Login successful!");
    } else {
        alert("Login failed: Incorrect password.");
    }
}

// Attach the login function to the button
const loginButton = document.querySelector(".login-button");
loginButton.addEventListener("click", handleLogin);
