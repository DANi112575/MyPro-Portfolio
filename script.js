document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect
    const typewriterText = document.querySelector('.typewriter');
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    let i = 0;
    const speed = 100; // Speed in milliseconds

    function typeWriter() {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
