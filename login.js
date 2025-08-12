function handleLogin(event) {
   event.preventDefault();  // Prevent form submission

   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;

   // Check if username and password are entered
   if (username && password) {
       // Save username to localStorage
       localStorage.setItem("username", username);
       window.location.href = "index.html";  // Redirect to home page after successful login
   } else {
       alert("Please enter a valid username and password.");
   }
}
