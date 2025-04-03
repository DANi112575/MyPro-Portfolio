document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        fetch("http://localhost:5000/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            })
        }).then(res => res.json()).then(data => alert(data.message));
    });
});