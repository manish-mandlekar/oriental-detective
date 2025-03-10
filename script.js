const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

document.getElementById("menu-btn").addEventListener("click", function () {
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
    !menu.contains(event.target) &&
    !menuBtn.contains(event.target) &&
    menu.classList.contains("active")
  ) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    document.body.style.overflow = "";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll('[id^="dropdownButton"]');
  const dropdownMenus = document.querySelectorAll('[id^="dropdownMenu"]');

  // Handle button clicks
  dropdownButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close all other dropdowns
      dropdownMenus.forEach((menu, menuIndex) => {
        if (menuIndex !== index) {
          menu.classList.add("hidden");
        }
      });

      // Toggle current dropdown
      dropdownMenus[index].classList.toggle("hidden");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".relative.inline-block")) {
      dropdownMenus.forEach((menu) => {
        menu.classList.add("hidden");
      });
    }
  });
});

let currentIndex = 0;
const slider = document.getElementById("slider");
const totalSlides = slider?.children?.length;
const slideButtons = document.querySelectorAll(".slide-btn");

document.getElementById("next")?.addEventListener("click", function () {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

document.getElementById("prev")?.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateSlider();
});

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  slideButtons.forEach((btn, index) => {
    btn.classList.remove("bg-white");
    btn.classList.add("bg-gray-400");
    if (index === currentIndex) {
      btn.classList.remove("bg-gray-400");
      btn.classList.add("bg-white");
    }
  });
}

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

function initializeSlider() {
  const testimonials = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a duis sapien. Et vitae augue integer at arcu, hac a.Nun c facilisis vitae erat in nam eu at consectetur nec erat. Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a duis sapien Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc ",
      name: "John Smith",
      designation: "Corporate Client",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a duis sapien. Et vitae augue integer at arcu, hac a.Nun c facilisis vitae erat in nam eu at consectetur nec erat. Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a duis sapien Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc ",
      name: "Sarah Johnson",
      designation: "Private Client",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a duis sapien. Et vitae augue integer at arcu, hac a.Nun c facilisis vitae erat in nam eu at consectetur nec erat. Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a duis sapien Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc ",
      name: "Michael Brown",
      designation: "Business Owner",
    },
  ];

  let currentIndex = 1;
  const sliderContent = document.querySelector(".slider-content");

  function updateSlider() {
    sliderContent.innerHTML = "";

    // Previous card
    const prevCard = createTestimonialCard(
      testimonials[
        (currentIndex - 1 + testimonials.length) % testimonials.length
      ],
      "slider-card left"
    );
    sliderContent.appendChild(prevCard);

    // Current card
    const currentCard = createTestimonialCard(
      testimonials[currentIndex],
      "slider-card center"
    );
    sliderContent.appendChild(currentCard);

    // Next card
    const nextCard = createTestimonialCard(
      testimonials[(currentIndex + 1) % testimonials.length],
      "slider-card right"
    );
    sliderContent.appendChild(nextCard);
  }

  function createTestimonialCard(testimonial, className) {
    const card = document.createElement("div");
    card.className = className;
    card.innerHTML = `
      <div class="bg-white rounded-lg p-6 shadow-lg">
        <div class="min-h-[150px] mb-6 text-gray-600">
          "${testimonial.content}"
        </div>
        <div class="mt-auto">
          <h3 class="font-bold text-xl text-center text-[#515854]">${testimonial.name}</h3>
          <p class="text-[#009FCF] text-center mt-1">${testimonial.designation}</p>
        </div>
      </div>
    `;
    return card;
  }

  // Initialize slider
  updateSlider();

  // Add event listeners for arrows
  document.querySelector(".next-arrow").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlider();
  });

  document.querySelector(".prev-arrow").addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSlider();
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeSlider);

const services = [
  {
    title: "Private Investigator",
    image: "./images/private investigator.png",
    description:
      "Our investigations are built for thoroughness, accuracy, and confidentiality.",
    link: "service.html#private",
  },
  {
    title: "Corporate Investigator",
    image: "./images/corporate.png",
    description:
      "Our investigations are built for thoroughness, accuracy, and confidentiality.",
    link: "service.html#corporate",
  },
  {
    title: "Marital Investigator",
    image: "./images/marital.png",
    description:
      "Our investigations are built for thoroughness, accuracy, and confidentiality.",
    link: "service.html#marital",
  },
];

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return 0;
  container.innerHTML = ""; // Clear previous content

  services.forEach((service) => {
    const card = `
            <div class="card">
                <div class="image">
                    <img class="object-top w-full" src="${service.image}" alt="${service.title}">
                </div>
                <div class="content">
                    <a href="${service.link}">
                        <span class="title">${service.title}</span>
                    </a>
                    <p class="desc">${service.description}</p>
                    <a class="action" href="${service.link}">
                        Know More
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        `;
    container.innerHTML += card;
  });
}

// Call function on page load
document.addEventListener("DOMContentLoaded", renderServices);
