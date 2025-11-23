// ======================
// 1. Typed.js
// ======================
const typed = new Typed(".text", {
    strings: ["Frontend Developer", "Data Analyst", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.addEventListener("DOMContentLoaded", function () {

    // ======================
    // 2. ABOUT Section Observer
    // ======================
    const aboutSection = document.querySelector('.about');

    const aboutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    aboutObserver.observe(aboutSection);


    // ======================
    // 3. SKILLS Observer
    // ======================
    const skills = document.querySelectorAll('.skill');

    const skillObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    skills.forEach(skill => skillObserver.observe(skill));


    // ======================
    // 4. CONTACT Observer
    // ======================
    const contactElements = document.querySelectorAll(
        '.contact, .contact-text, .contact-info, .contact-list li, .contact-form'
    );

    const contactObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    contactElements.forEach(el => contactObserver.observe(el));


    // ======================
    // 5. CONTACT Text Smooth Animation (.show)
    // ======================
        const portfolioTextObserver = document.querySelectorAll(
            '.contact-text p, .contact-list li, .contact-form form input, .contact-form form textarea, .contact-form form .send'
        );

        const pObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');  // SEKALI TAMBAH, TIDAK DILEPAS
                    pObserver.unobserve(entry.target);   // HENTIKAN OBSERVE (biar nggak balik)
                }
            });
        }, { threshold: 0.2 });

        portfolioTextObserver.forEach(el => pObserver.observe(el));
        


    // ======================
    // 6. Footer Observer
    // ======================
    const footer = document.querySelector(".footer");

    const footerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add("show-footer");
                footerObserver.unobserve(footer);
            }
        });
    });

    footerObserver.observe(footer);


    // ======================
    // 7. Portfolio Filter
    // ======================
    const filterButton = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButton.forEach(btn => {
        btn.addEventListener('click', function () {

            filterButton.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = 1, 10);
                } else {
                    item.style.opacity = 0;
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });


    // ======================
    // 8. Portfolio Slider
    // ======================
    window.slidePortfolio = function (sliderId, direction) {
        const slider = document.getElementById('portfolio-slider-' + sliderId);
        if (!slider) return;

        const images = slider.querySelectorAll('.slider-img');
        let current = Array.from(images).findIndex(img => img.classList.contains('active'));

        images[current].classList.remove('active');

        let next = current + direction;
        if (next < 0) next = images.length - 1;
        if (next >= images.length) next = 0;

        images[next].classList.add('active');
    };


        

        const scrollElements = document.querySelectorAll(
            '.portfolio-title h2, .portfolio-title p, .portfolio-filter, .portfolio-item'
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate'); // tambahkan class animate saat muncul
                        observer.unobserve(entry.target); // optional: animasi hanya sekali
                    }
                });
            },
            {
                threshold: 0.2, // 20% dari elemen harus terlihat
            }
        );

        scrollElements.forEach((el) => observer.observe(el));
        });