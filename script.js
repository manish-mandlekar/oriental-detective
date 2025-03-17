document.getElementById("menu-btn")?.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".navbar");

  menu.classList.toggle("active");
  this.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (menu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});


document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const menuBtn = document.getElementById("menu-btn");

  if (
    !menu?.contains(event.target) &&
    !menuBtn?.contains(event.target) &&
    menu?.classList.contains("active")
  ) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    document.body.style.overflow = "";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll('[id^="dropdopebutton"]');
  const dropdownMenus = document.querySelectorAll('[id^="dropdopemenu"]');

  // Handle button clicks
  dropdownButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close all other dropdowns
      dropdownMenus.forEach((menu, menuIndex) => {
        if (menuIndex !== index) {
          menu.classList.remove('active');
          // Add hidden class after animation
          setTimeout(() => menu.classList.add('hidden'), 300);
        }
      });

      // Toggle current dropdown
      if (dropdownMenus[index].classList.contains('hidden')) {
        dropdownMenus[index].classList.remove('hidden');
        // Wait a frame to ensure removal of hidden is processed
        requestAnimationFrame(() => {
          dropdownMenus[index].classList.add('active');
        });
      } else {
        dropdownMenus[index].classList.remove('active');
        setTimeout(() => dropdownMenus[index].classList.add('hidden'), 300);
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".relative.inline-block")) {
      dropdownMenus.forEach((menu) => {
        menu.classList.remove('active');
        setTimeout(() => menu.classList.add('hidden'), 300);
      });
    }
  });

  const dropdownButton = document.getElementById('anotherdropdown');
  const dropdownContent = document.getElementById('chuparustam');
  const dropdownArrow = document.querySelector('.ri-arrow-drop-down-line');

  dropdownButton?.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Toggle the dropdown content
    dropdownContent.classList.toggle('active');
    
    // Rotate the arrow
    dropdownArrow.classList.toggle('rotate-arrow');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdownButton.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.classList.remove('active');
      dropdownArrow.classList.remove('rotate-arrow');
    }
  });
});


const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;
const delay = 6000; // Auto-slide delay

function updateSlide() {
  if (!slider || !slides) return;
  slides?.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });

  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Next Slide
function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlide();
}

// Previous Slide
function prevSlide() {
  index = index - 1 < 0 ? slides.length - 1 : index - 1;
  updateSlide();
}

// Auto Slide
let autoSlide = setInterval(nextSlide, delay);

// Reset Auto Slide Timer
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, delay);
}

// Click Events
nextBtn?.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn?.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Initial Call
updateSlide();

function animateCounters() {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("counted")
        ) {
          const target = parseInt(entry.target.getAttribute("data-target"));
          const duration = 2000; // Animation duration in milliseconds
          const steps = 50; // Number of steps in animation
          const increment = target / steps;
          let current = 0;

          entry.target.classList.add("counted"); // Mark as counted

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              if (entry.target.innerText.includes("K+")) {
                entry.target.innerText = Math.floor(current) + "K+";
              } else {
                entry.target.innerText = Math.floor(current) + "+";
              }
              setTimeout(updateCounter, duration / steps);
            } else {
              if (entry.target.innerText.includes("K+")) {
                entry.target.innerText = target + "K+";
              } else {
                entry.target.innerText = target + "+";
              }
            }
          };

          updateCounter();
        }
      });
    },
    {
      threshold: 0.5, // Trigger when at least 50% of the element is visible
    }
  );

  counters.forEach((counter) => observer.observe(counter));
}

// Remove the DOMContentLoaded event listener since we'll use Intersection Observer
animateCounters();

// Call function on page load

// Add to your existing code
const scrollToTopButton = document.querySelector('.wtparrow img[src*="arrow"]');

scrollToTopButton?.addEventListener("click", () => {
  // Using Locomotive Scroll
  scroll.scrollTo(0, {
    duration: 1000,
    easing: [0.25, 0.1, 0.25, 1],
  });
});

// Add scroll to top functionality
function initScrollToTop() {
  const scrollToTopButton = document.querySelector(".scrollontop");

  if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", (e) => {
      e.preventDefault();

      // Check if Locomotive Scroll is initialized and available globally
      if (typeof locomotiveScroll !== 'undefined' && locomotiveScroll) {
        locomotiveScroll.scrollTo("top", {
          duration: 1000,
          easing: [0.25, 0.1, 0.25, 1],
          disableLerp: true,
        });
      } else {
        // Fallback to regular scroll
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });
  }
}

// Initialize after DOM content is loaded
initScrollToTop();

window.addEventListener("scroll", () => {
  const scrollToTopButton = document.querySelector(".scrollontop");

  if (scrollToTopButton) {
    if (window.scrollY > 200) {
      scrollToTopButton.style.opacity = "1";
    } else {
      scrollToTopButton.style.opacity = "0";
    }
  }
});
