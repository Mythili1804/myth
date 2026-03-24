document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stops page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        document.getElementById("response").innerText = "Please fill all fields!";
        return;
    }

    // Simulate form submission
    document.getElementById("response").innerText = "Form submitted successfully!";

    // Clear form
    document.getElementById("contactForm").reset();
});
