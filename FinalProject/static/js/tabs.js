/* tabs.js */
class Tabs {
    constructor() {
        this.categories = document.querySelectorAll('.category-item');
        this.formHotel = document.getElementById('form-hotel');
        this.formTravel = document.getElementById('form-travel');
        this.sectionHotel = document.getElementById('section-hotel');
        this.sectionTravel = document.getElementById('section-travel');
        this.init();
    }

    init() {
        // Set initial visibility
        if (this.sectionTravel) this.sectionTravel.style.display = 'none';
        
        const activeCategory = document.querySelector('.category-item.active');
        if (activeCategory && activeCategory.getAttribute('data-tab') === 'hotel') {
            const filterCat = activeCategory.getAttribute('data-category');
            if (this.sectionHotel && filterCat) {
                const titleEl = this.sectionHotel.querySelector('.section-title');
                const subtitleEl = this.sectionHotel.querySelector('.section-subtitle');
                if (titleEl && subtitleEl) {
                    if (filterCat === 'hotel') { titleEl.textContent = 'Hotel Populer Sekarang'; subtitleEl.textContent = 'Pilihan populer traveler bulan ini'; }
                    else if (filterCat === 'villa') { titleEl.textContent = 'Villa & Resort Terbaik'; subtitleEl.textContent = 'Privasi dan kenyamanan maksimal'; }
                    else if (filterCat === 'camping') { titleEl.textContent = 'Spot Camping Seru'; subtitleEl.textContent = 'Menyatu dengan alam di akhir pekan'; }
                }

                const cards = this.sectionHotel.querySelectorAll('.card');
                cards.forEach(card => {
                    if (card.getAttribute('data-category') === filterCat) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        }
        else if (activeCategory && activeCategory.getAttribute('data-tab') === 'travel') {
            const filterCat = activeCategory.getAttribute('data-category');
            if (this.sectionTravel && filterCat) {
                const titleEl = this.sectionTravel.querySelector('.section-title');
                const subtitleEl = this.sectionTravel.querySelector('.section-subtitle');
                if (titleEl && subtitleEl) {
                    if (filterCat === 'travel') { titleEl.textContent = 'Travel Penjemputan'; subtitleEl.textContent = 'Shuttle antar kota harga terbaik'; }
                    else if (filterCat === 'mobil') { titleEl.textContent = 'Sewa Kendaraan'; subtitleEl.textContent = 'Rental mobil aman dan nyaman'; }
                }

                const cards = this.sectionTravel.querySelectorAll('.card');
                cards.forEach(card => {
                    if (card.getAttribute('data-category') === filterCat) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        }

        
        this.categories.forEach(category => {
            category.addEventListener('click', () => {
                // Remove active class from all
                this.categories.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked
                category.classList.add('active');
                
                // Toggle forms based on data-tab attribute
                const tabType = category.getAttribute('data-tab');
                
                if (tabType === 'hotel') {
                    const filterCat = category.getAttribute('data-category');
                    if (this.sectionHotel && filterCat) {
                        const titleEl = this.sectionHotel.querySelector('.section-title');
                        const subtitleEl = this.sectionHotel.querySelector('.section-subtitle');
                        if (titleEl && subtitleEl) {
                            if (filterCat === 'hotel') { titleEl.textContent = 'Hotel Populer Sekarang'; subtitleEl.textContent = 'Pilihan populer traveler bulan ini'; }
                            else if (filterCat === 'villa') { titleEl.textContent = 'Villa & Resort Terbaik'; subtitleEl.textContent = 'Privasi dan kenyamanan maksimal'; }
                            else if (filterCat === 'camping') { titleEl.textContent = 'Spot Camping Seru'; subtitleEl.textContent = 'Menyatu dengan alam di akhir pekan'; }
                        }

                        const cards = this.sectionHotel.querySelectorAll('.card');
                        cards.forEach(card => {
                            if (card.getAttribute('data-category') === filterCat) {
                                card.style.display = '';
                            } else {
                                card.style.display = 'none';
                            }
                        });
                    }

                    if (this.formHotel) this.formHotel.classList.add('active');
                    if (this.formTravel) this.formTravel.classList.remove('active');
                    if (this.sectionHotel) this.sectionHotel.style.display = 'block';
                    if (this.sectionTravel) this.sectionTravel.style.display = 'none';
                } else if (tabType === 'travel') {
                    const filterCat = category.getAttribute('data-category');
                    if (this.sectionTravel && filterCat) {
                        const titleEl = this.sectionTravel.querySelector('.section-title');
                        const subtitleEl = this.sectionTravel.querySelector('.section-subtitle');
                        if (titleEl && subtitleEl) {
                            if (filterCat === 'travel') { titleEl.textContent = 'Travel Penjemputan'; subtitleEl.textContent = 'Shuttle antar kota harga terbaik'; }
                            else if (filterCat === 'mobil') { titleEl.textContent = 'Sewa Kendaraan'; subtitleEl.textContent = 'Rental mobil aman dan nyaman'; }
                        }

                        const cards = this.sectionTravel.querySelectorAll('.card');
                        cards.forEach(card => {
                            if (card.getAttribute('data-category') === filterCat) {
                                card.style.display = '';
                            } else {
                                card.style.display = 'none';
                            }
                        });
                    }

                    if (this.formTravel) this.formTravel.classList.add('active');
                    if (this.formHotel) this.formHotel.classList.remove('active');
                    if (this.sectionTravel) this.sectionTravel.style.display = 'block';
                    if (this.sectionHotel) this.sectionHotel.style.display = 'none';
                }
            });
        });
    }
}
