document.addEventListener('DOMContentLoaded', function () {
    let swiperInstance = null;

    function initSlider() {
        const isMobile = window.innerWidth < 768;

        if (isMobile && !swiperInstance) {
            // Initialize Swiper for mobile
            swiperInstance = new Swiper('.brand-slider', {
                slidesPerView: 'auto',
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        } else if (!isMobile && swiperInstance) {
            // Destroy Swiper for Desktop/Tablet
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }

    // Run on load and on resize
    initSlider();
    window.addEventListener('resize', initSlider);
});