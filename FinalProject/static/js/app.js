/* app.js */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Animations
    new ScrollAnimation();
    
    // Initialize Tabs
    new Tabs();
    
    // Initialize Sliders
    const sliderSections = document.querySelectorAll('.section-slider');
    sliderSections.forEach((section, index) => {
        const sliderInstance = new Slider(section);
        if (index === 0) {
            window.hotelSlider = sliderInstance;
        }
    });
});
