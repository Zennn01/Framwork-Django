/* animation.js */
class ScrollAnimation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.cards = document.querySelectorAll('.card');
        this.init();
    }

    init() {
        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
        
        // Simple reveal animation for cards using Intersection Observer
        if ('IntersectionObserver' in window) {
            const cardObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100); // staggered animation
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            this.cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                cardObserver.observe(card);
            });
        }
    }
}
