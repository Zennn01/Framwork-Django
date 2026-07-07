/* slider.js */
class Slider {
    constructor(container, options = {}) {
        this.container = container;
        this.track = container.querySelector('.slider-track');
        this.btnPrev = container.querySelector('.btn-prev');
        this.btnNext = container.querySelector('.btn-next');
        
        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;
        
        this.init();
    }

    init() {
        if (!this.track) return;

        // Button Listeners
        if (this.btnPrev) {
            this.btnPrev.addEventListener('click', () => this.scroll(-1));
        }
        if (this.btnNext) {
            this.btnNext.addEventListener('click', () => this.scroll(1));
        }

        // Mouse Drag Listeners
        this.track.addEventListener('mousedown', (e) => this.startDragging(e));
        this.track.addEventListener('mouseleave', () => this.stopDragging());
        this.track.addEventListener('mouseup', () => this.stopDragging());
        this.track.addEventListener('mousemove', (e) => this.drag(e));

        // Scroll listener to update button states
        this.track.addEventListener('scroll', () => this.updateButtonStates());
        
        // Initial button state
        this.updateButtonStates();
    }

    scroll(direction) {
        if (!this.track.children || !this.track.children.length) return;
        // Calculate scroll amount based on card width + gap
        const cardWidth = this.track.children[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(this.track).gap) || 0;
        const scrollAmount = cardWidth + gap;
        
        this.track.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }

    startDragging(e) {
        this.isDragging = true;
        this.track.classList.add('dragging');
        this.startX = e.pageX - this.track.offsetLeft;
        this.scrollLeft = this.track.scrollLeft;
    }

    stopDragging() {
        this.isDragging = false;
        this.track.classList.remove('dragging');
    }

    drag(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        const x = e.pageX - this.track.offsetLeft;
        const walk = (x - this.startX) * 2; // Scroll-fast multiplier
        this.track.scrollLeft = this.scrollLeft - walk;
    }

    updateButtonStates() {
        if (!this.btnPrev || !this.btnNext) return;
        
        const isAtStart = this.track.scrollLeft === 0;
        const isAtEnd = Math.ceil(this.track.scrollLeft + this.track.clientWidth) >= this.track.scrollWidth;

        this.btnPrev.disabled = isAtStart;
        this.btnNext.disabled = isAtEnd;
    }
}
