// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200, // Animation duration
    once: true, // Animation happens only once
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Handling (Optional: you can send this data to a server or use a service like Formspree)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Message Sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // Normally, you'd send the form data to a server here.
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
