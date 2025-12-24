document.addEventListener("DOMContentLoaded", () => {
    // 1. Select items
    const steps = document.querySelectorAll(".step");
    const images = document.querySelectorAll(".scroll-img");

    // 2. Setup Intersection Observer
    // Threshold 0.5 means "trigger when 50% of the text is visible"
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all
                steps.forEach(s => s.classList.remove("active-step"));
                images.forEach(img => img.classList.remove("active"));

                // Add active class to current text
                entry.target.classList.add("active-step");

                // Find matching image ID from data attribute
                const imgId = entry.target.getAttribute("data-img");
                const matchingImg = document.getElementById(imgId);
                
                if (matchingImg) {
                    matchingImg.classList.add("active");
                }
            }
        });
    }, { threshold: 0.5 });

    // 3. Observe all text steps
    steps.forEach(step => observer.observe(step));
});