document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
      makeHeaderSticky();
  };
  
  function makeHeaderSticky() {
      const header = document.getElementById("sticky-header");

      if (window.pageYOffset > 0) {
          header.classList.add("sticky");
      } else {
          header.classList.remove("sticky");
      }
  }
});

// Get all links
const links = document.querySelectorAll('nav ul li a');

// Get current URL
const currentURL = window.location.href;

// Loop through each link and check if it matches the current page URL
links.forEach(link => {
  if (link.href === currentURL) {
    link.classList.add('active'); // Highlight the selected link

    // Check if the link is inside a dropdown menu
    const dropdown = link.closest('.dropdown');
    if (dropdown) {
      const dropdownLink = dropdown.querySelector('a'); // Select the parent dropdown link
      dropdownLink.classList.add('active'); // Highlight the parent dropdown
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent link default behavior
      dropdownMenu.classList.toggle('show'); // Toggle the dropdown visibility
    });
  });
  
// DROPDOWN DELAY  
document.querySelectorAll('.dropdown').forEach(dropdown => {
    let timeout;
  
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timeout); // Clear any existing timeout
      dropdown.querySelector('.dropdown-menu').classList.add('show');
    });
  
    dropdown.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.querySelector('.dropdown-menu').classList.remove('show');
      }, 300); // Add a 300ms delay before hiding
    });
  });

/* HAMBURGER MENU TOGGLE */
  function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
  }


  /* PORTFOLIO IMAGE HANDLER */

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".portfolio-gallery-item img").forEach(img => {
      if (img.naturalWidth > img.naturalHeight) {
        img.classList.add("landscape");
      } else {
        img.classList.add("portrait");
      }
    });
  });


  /* PORTFOLIO GALLERY GROUP EFFECT */
  document.addEventListener("DOMContentLoaded", function () {
    const groups = document.querySelectorAll(".portfolio-gallery-group");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    groups.forEach((group) => {
      observer.observe(group);
    });
  });


  /* LIGHTBOX GALLERY */
  // Lightbox functionality for portfolio images
  document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    const images = Array.from(document.querySelectorAll(".gallery-img"));
    let currentIndex = 0;
  
    function openLightbox(index) {
      currentIndex = index;
      lightboxImg.src = images[currentIndex].src;
      updateCredit();
      lightbox.classList.add("show");
    }
  
    function closeLightbox() {
      lightbox.classList.remove("show");
    }
  
    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImg.src = images[currentIndex].src;
      updateCredit();
    }
  
    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
      updateCredit();
    }
  
    function updateCredit() {
      const credit = images[currentIndex].dataset.credit;
      const creditDisplay = document.getElementById("lightbox-credit");
      if (creditDisplay) {
        creditDisplay.textContent = credit || "";
      }
    }
  
    // Add event listeners to all images
    images.forEach((img, index) => {
      img.addEventListener("click", function () {
        openLightbox(index);
      });
    });
  
    // Close logic
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  
    // Navigation
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);
  
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("show")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    });
  });
  

  

/* CAROUSEL GALLERY ON SERVICES PAGE */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const prevButton = carousel.querySelector(".carousel-btn.prev");
    const nextButton = carousel.querySelector(".carousel-btn.next");
    let index = 0;

    function showImage(newIndex) {
      if (newIndex < 0) {
        index = items.length - 1;
      } else if (newIndex >= items.length) {
        index = 0;
      } else {
        index = newIndex;
      }

      // Hide all images in this carousel
      items.forEach(item => item.classList.remove("active"));

      // Show the new active image
      items[index].classList.add("active");
    }

    // Button Event Listeners
    nextButton.addEventListener("click", () => showImage(index + 1));
    prevButton.addEventListener("click", () => showImage(index - 1));

    // Initialize first image
    showImage(index);

    // Swipe support
    const container = carousel.querySelector('.carousel-container');
    let startX = 0;
    let endX = 0;

    container.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
    });

    container.addEventListener('touchmove', function (e) {
      endX = e.touches[0].clientX;
    });

    container.addEventListener('touchend', function () {
      if (startX && endX) {
        const diffX = startX - endX;
        if (Math.abs(diffX) > 50) {
          if (diffX > 0) {
            showImage(index + 1); // Swipe left
          } else {
            showImage(index - 1); // Swipe right
          }
        }
      }
      startX = endX = 0;
    });
  });
});











  
  
