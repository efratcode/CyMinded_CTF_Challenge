const storedHash = "d917f0aa1b54ea82728c701f8dcb4f86";


// Function to hash input using MD5 (requires CryptoJS library)
function md5(input) {
    return CryptoJS.MD5(input).toString();
}

//pop up window event
window.onload = () => {
    const modal = document.getElementById("welcomeModal");
    const closeButton = document.getElementById("closeModal");
    
    // Show the modal when the page loads
    modal.style.display = "block";

    // Close the modal when the button is clicked
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    /*
    They say
    the true legacy of company begins with the founder
    */
};


//

// Function to handle login
function handleLogin() {
    const userNameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    
    const hashedInput = md5(passwordInput); // Hash the Base64-encoded input
    
    
    if(hashedInput == storedHash && userNameInput != "Laemmle")
        alert("Login failed: bad psername");
    else if (hashedInput != storedHash && userNameInput == "Laemmle")
        alert("Login failed: bad password")
    else if(hashedInput == storedHash && userNameInput == "Laemmle")
        alert("Login successful!");
    else
        alert("Login failed.");
}

//button 'login' click event
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener("click", handleLogin);
});


