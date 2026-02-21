// Button alert
function showAlert() {
    alert("Button works!");
}

// Dark mode toggle
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

// Form validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
        form.reset();
    }
});
