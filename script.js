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
  const images = [
    'https://images.unsplash.com/photo-1739188366834-1281a22a1ac5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1620672194875-b34776eeb185?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1556941229-9ca9b2d431aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8'
    // Add your image URLs here
  ];

  let currentIndex = 1;
  const sliderContent = document.querySelector('.slider-content');
  
  function updateSlider() {
    sliderContent.innerHTML = '';
    
    // Previous image
    const prevImg = document.createElement('img');
    prevImg.src = images[(currentIndex - 1 + images.length) % images.length];
    prevImg.className = 'slider-image left';
    sliderContent.appendChild(prevImg);
    
    // Current image
    const currentImg = document.createElement('img');
    currentImg.src = images[currentIndex];
    currentImg.className = 'slider-image center';
    sliderContent.appendChild(currentImg);
    
    // Next image
    const nextImg = document.createElement('img');
    nextImg.src = images[(currentIndex + 1) % images.length];
    nextImg.className = 'slider-image right';
    sliderContent.appendChild(nextImg);
  }

  // Initialize slider
  updateSlider();

  // Add event listeners for arrows
  document.querySelector('.next-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  document.querySelector('.prev-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSlider);


