document.addEventListener("DOMContentLoaded", () => {
  // Select all sections we want to observe
  const sections = document.querySelectorAll(
    "#samtale, #psyko, #hypnose, #rysteterapi"
  );
  const menuLinks = document.querySelectorAll(".menu-overlay a");

  const observerOptions = {
    threshold: 0.3, // 20% of section must be visible
    rootMargin: "-20% 0px -20% 0px", // Adds margin to when observation triggers
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove active class from all links
        menuLinks.forEach((link) => link.classList.remove("active"));

        // Add active class to corresponding menu item
        const id = entry.target.id;
        const correspondingLink = document.querySelector(
          `.menu-overlay a[href="#${id}"]`
        );
        if (correspondingLink) {
          correspondingLink.classList.add("active");
        }
      }
    });
  }, observerOptions);

  // Observe each section
  sections.forEach((section) => observer.observe(section));
});
