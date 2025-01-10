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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const typeSelect = document.getElementById("type");
  const messageTextarea = document.getElementById("Meddelelse");
  const button = document.querySelector(".kontakt-mig-btn");

  const messageContainer = document.createElement("div");
  messageContainer.style.marginTop = "16px";
  form.appendChild(messageContainer);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    messageContainer.innerHTML = "";

    let isValid = true;

    if (!emailInput.value || !/\S+@\S+\.\S+/.test(emailInput.value)) {
      showError(emailInput, "Indtast venligst en gyldig email.");
      isValid = false;
    } else {
      clearError(emailInput);
    }

    if (!typeSelect.value || typeSelect.value === "Vælg en mulighed") {
      showError(typeSelect, "Vælg venligst et emne.");
      isValid = false;
    } else {
      clearError(typeSelect);
    }

    if (!messageTextarea.value.trim()) {
      showError(messageTextarea, "Meddelelsen må ikke være tom.");
      isValid = false;
    } else {
      clearError(messageTextarea);
    }

    if (isValid) {
      messageContainer.innerHTML = `<p style="color: green;">Tak! Din besked er blevet sendt.</p>`;
      form.reset();
    }
  });

  function showError(element, message) {
    let errorElement = element.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains("error")) {
      errorElement = document.createElement("p");
      errorElement.classList.add("error");
      errorElement.style.color = "red";
      errorElement.style.fontSize = "14px";
      element.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
  }

  function clearError(element) {
    const errorElement = element.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error")) {
      errorElement.remove();
    }
  }
});
