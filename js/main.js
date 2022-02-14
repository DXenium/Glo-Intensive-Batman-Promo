const swiper = new Swiper('.main_slider', {
  
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.main_slider_arrow',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});

let burger = document.querySelector('.menu_burger');
let closeMenu = document.querySelector('.header_menu_close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
  menuMobile.style.display ='block';
})

closeMenu.addEventListener('click', () => {
  menuMobile.style.display ='none';
})