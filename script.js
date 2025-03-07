const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('active');
    this.classList.toggle('active');
});

document.getElementById("dropdownButton").addEventListener("click", function () {
    let menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("hidden");
});

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("dropdownMenu");
    let button = document.getElementById("dropdownButton");
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});


let currentIndex = 0;
const slider = document.getElementById("slider");
const totalSlides = slider.children.length;
const slideButtons = document.querySelectorAll(".slide-btn");

document.getElementById("next").addEventListener("click", function () {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

document.getElementById("prev").addEventListener("click", function () {
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
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000; // Animation duration in milliseconds
                const steps = 50; // Number of steps in animation
                const increment = target / steps;
                let current = 0;
                
                entry.target.classList.add('counted'); // Mark as counted
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        if (entry.target.innerText.includes('K+')) {
                            entry.target.innerText = Math.floor(current) + 'K+';
                        } else {
                            entry.target.innerText = Math.floor(current) + '+';
                        }
                        setTimeout(updateCounter, duration / steps);
                    } else {
                        if (entry.target.innerText.includes('K+')) {
                            entry.target.innerText = target + 'K+';
                        } else {
                            entry.target.innerText = target + '+';
                        }
                    }
                };
                
                updateCounter();
            }
        });
    }, {
        threshold: 0.5 // Trigger when at least 50% of the element is visible
    });

    counters.forEach(counter => observer.observe(counter));
}

// Remove the DOMContentLoaded event listener since we'll use Intersection Observer
animateCounters();

function initializeSlider() {
  const testimonials = [
    {
      content: "The investigation services provided were thorough and professional. Highly recommended for anyone needing discrete and reliable detective services.",
      name: "John Smith",
      designation: "Corporate Client"
    },
    {
      content: "Outstanding attention to detail and complete confidentiality. The team went above and beyond to help resolve our case.",
      name: "Sarah Johnson",
      designation: "Private Client"
    },
    {
      content: "Exceptional service with regular updates throughout the investigation process. The results exceeded our expectations.",
      name: "Michael Brown",
      designation: "Business Owner"
    }
  ];

  let currentIndex = 1;
  const sliderContent = document.querySelector('.slider-content');
  
  function updateSlider() {
    sliderContent.innerHTML = '';
    
    // Previous card
    const prevCard = createTestimonialCard(
      testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
      'slider-card left'
    );
    sliderContent.appendChild(prevCard);
    
    // Current card
    const currentCard = createTestimonialCard(
      testimonials[currentIndex],
      'slider-card center'
    );
    sliderContent.appendChild(currentCard);
    
    // Next card
    const nextCard = createTestimonialCard(
      testimonials[(currentIndex + 1) % testimonials.length],
      'slider-card right'
    );
    sliderContent.appendChild(nextCard);
  }

  function createTestimonialCard(testimonial, className) {
    const card = document.createElement('div');
    card.className = className;
    card.innerHTML = `
      <div class="bg-white rounded-lg p-6 shadow-lg">
        <div class="min-h-[150px] mb-6 text-gray-600">
          "${testimonial.content}"
        </div>
        <div class="mt-auto">
          <h3 class="font-bold text-xl text-[#515854]">${testimonial.name}</h3>
          <p class="text-[#009FCF] mt-1">${testimonial.designation}</p>
        </div>
      </div>
    `;
    return card;
  }

  // Initialize slider
  updateSlider();

  // Add event listeners for arrows
  document.querySelector('.next-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlider();
  });

  document.querySelector('.prev-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSlider();
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSlider);


const services = [
    {
        title: "Private Investigator",
        image: "./images/private investigator.png",
        description: "Our investigations are built for thoroughness, accuracy, and confidentiality.",
        link: "service.html#private"
    },
    {
        title: "Corporate Investigator",
        image: "./images/corporate.png",
        description: "Our investigations are built for thoroughness, accuracy, and confidentiality.",
        link: "service.html#corporate"
    },
    {
        title: "Marital Investigator",
        image: "./images/marital.png",
        description: "Our investigations are built for thoroughness, accuracy, and confidentiality.",
        link: "service.html#marital"
    }
];

function renderServices() {
    const container = document.getElementById("services-container");
    container.innerHTML = ""; // Clear previous content

    services.forEach(service => {
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


