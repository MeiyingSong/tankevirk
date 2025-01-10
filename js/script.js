function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdownLink = document.querySelector(".dropdownLink");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const allNestedLinks = document.querySelectorAll(".nested-link");

  dropdownLink.addEventListener("click", (e) => {
    e.preventDefault();

    for (const link of allNestedLinks) {
      const isVisible = link.style.display === "block";
      link.style.display = isVisible ? "none" : "block";
    }
  });

  document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && !dropdownLink.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebarDropdownLink = document.getElementById("sidebarDropdownLink");
  if (!sidebarDropdownLink) {
    return;
  }

  const sidebarDropdown = sidebarDropdownLink.closest(".dropdown");

  // Toggle dropdown on link click
  sidebarDropdownLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Check if the dropdown is open
    const isOpen = sidebarDropdown.classList.contains("open");

    // Toggle the "open" class
    if (isOpen) {
      sidebarDropdown.classList.remove("open");
    } else {
      sidebarDropdown.classList.add("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const triggerPosition = 200;

  window.addEventListener("scroll", function () {
    if (!menu) {
      return;
    }

    if (window.scrollY > triggerPosition) {
      menu.style.display = "block";
      menu.style.opacity = "1";
    } else {
      menu.style.opacity = "0";
      setTimeout(() => {
        menu.style.display = "none";
      }, 510);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
      scrollToTopButton.style.opacity = "1";
    } else {
      scrollToTopButton.style.opacity = "0";
      setTimeout(() => {
        scrollToTopButton.style.display = "none";
      }, 300);
    }
  });

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
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
