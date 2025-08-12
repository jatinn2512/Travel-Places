function handleRegister(event) {
   event.preventDefault();  // Prevent form submission

   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;

   if (username && password) {
       alert("Registration successful! Please login.");
       window.location.href = "login.html";  // Redirect to login page after registration
   } else {
       alert("Please enter a valid username and password.");
   }
}
