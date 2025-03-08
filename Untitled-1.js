/* filepath: /Users/manishmandlekar/Desktop/oriental detective/script.js */

// Add this to your existing menu button click handler


// Close menu when clicking outside


// Update slider for better mobile experience
function initializeSlider() {
    // ...existing slider code...
    
    // Add touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContent.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderContent.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if(Math.abs(diff) > swipeThreshold) {
            if(diff > 0) {
                // Swipe left - next slide
                currentIndex = (currentIndex + 1) % testimonials.length;
            } else {
                // Swipe right - previous slide
                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            }
            updateSlider();
        }
    }
}