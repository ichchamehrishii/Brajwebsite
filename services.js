document.getElementById("serviceForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get all selected services
    const selectedServices = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(checkbox => checkbox.value);

    // Show thank you message with selected services
    alert("Thank you for selecting the following services:\n" + selectedServices.join(", ") || "No services selected.");

    // Redirect to home page after a delay (optional)
    setTimeout(function() {
        window.location.href = "index.html"; // Change this to your actual home page URL
    }, 2000); // Redirect after 2 seconds (2000 milliseconds)
});
