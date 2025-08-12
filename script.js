function login() {
   alert("Redirecting to login page...");
   window.location.href = "login.html";  // Redirect to login page
}

function register() {
   alert("Redirecting to register page...");
   window.location.href = "register.html";  // Redirect to register page
}

function logout() {
   // Remove username from localStorage and redirect to login page
   localStorage.removeItem("username");
   window.location.href = "login.html";  // Redirect to login page after logout
}

// Check if user is logged in and show/hide logout button
function checkLoginStatus() {
   const username = localStorage.getItem("username");

   if (username) {
       document.getElementById("logout-btn").style.display = "inline-block"; // Show logout button
       document.querySelector("header h1").innerHTML = `Welcome, ${username}!`;
   } else {
       document.getElementById("logout-btn").style.display = "none";  // Hide logout button if not logged in
   }
}

// Call checkLoginStatus() when page loads
window.onload = checkLoginStatus;
