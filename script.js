var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, 
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
/* Slide 2 */
var swiper1 = new Swiper(".swiper1", {
    watchSlidesProgress: true,
    slidesPerView: 4,
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
});

