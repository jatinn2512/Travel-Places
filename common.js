// Function to check if the user is logged in (to show or hide logout button)
function checkLoginStatus() {
   const username = localStorage.getItem("username");

   if (username) {
       document.getElementById("logout-btn").style.display = "inline-block"; // Show logout button
       document.querySelector("header h1").innerHTML = `Welcome, ${username}!`;
   } else {
       document.getElementById("logout-btn").style.display = "none";  // Hide logout button if not logged in
   }
}

// Function to logout and remove username from localStorage
function logout() {
   localStorage.removeItem("username");
   window.location.href = "login.html";  // Redirect to login page after logout
}

// Call checkLoginStatus() when page loads
window.onload = checkLoginStatus;
