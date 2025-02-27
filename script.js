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
