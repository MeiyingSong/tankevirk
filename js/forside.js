document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".carousel-card");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const delay = 9000;

  // Function to show a specific card
  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === index) {
        card.classList.add("active");
        dots[i].classList.add("active");
      }
    });
    currentIndex = index;
  }

  // Automatically switch cards
  function startCarousel() {
    setInterval(() => {
      let nextIndex = (currentIndex + 1) % cards.length;
      showCard(nextIndex);
    }, delay);
  }

  // Dot click event
  dots.forEach((dot, index) => {
    console.log("Attaching listener...");
    dot.addEventListener("click", () => {
      console.log("click");
      showCard(index);
    });
  });

  // Start the carousel
  startCarousel();
});

var swiper = new Swiper(".custom-slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
