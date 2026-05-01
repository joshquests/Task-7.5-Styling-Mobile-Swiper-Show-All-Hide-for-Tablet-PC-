
const swiperBrands = new Swiper('.brand-slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

    
  },
  breakpoints: {
    1024: {
      enabled: false,
    }
  }
});

document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetContainer = document.getElementById(targetId);
        
        const isExpanded = targetContainer.classList.toggle('is-expanded');

        const showSpan = button.querySelector('.show-text');
        const hideSpan = button.querySelector('.hide-text');

        if (isExpanded) {
            showSpan.style.display = 'none';      
            hideSpan.style.display = 'flex';      
        } else {
            showSpan.style.display = 'flex';      
            hideSpan.style.display = 'none';     
        }
    });
});