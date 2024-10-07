document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Optionally, you can do something with the form data here (e.g., validate it, send it to a server, etc.)
    
    // Show thank you message
    alert("Thank you for logging in!");

    // Redirect to home page after a delay (optional)
    setTimeout(function() {
        window.location.href = "index.html"; // Change this to your actual home page URL
    }, 2000); // Redirect after 2 seconds (2000 milliseconds)
});
