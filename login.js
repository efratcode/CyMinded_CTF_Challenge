const storedHash = "435c642fdf30accf3471b2c4e6d5fe09";

// Function to hash input using MD5 (requires CryptoJS library)
function md5(input) {
    return CryptoJS.MD5(input).toString();
}


// Function to handle login
function handleLogin() {
    const userNameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    
    const hashedInput = md2(passwordInput); // Hash the Base64-encoded input
    console.log(hashedInput);
    const base64Encoded = btoa(hashedInput); // Convert to Base64
    console.log(base64Encoded);
    
    if (hashedInput == storedHash && userNameInput == "CarlLaemmle") {
        alert("Login successful!");
    } else {
        alert("Login failed: Incorrect password.");
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener("click", handleLogin);
});
