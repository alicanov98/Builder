var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  breakpoints: {
    250: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

var cilentSwiper = new Swiper(".clientSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  breakpoints: {
    250: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
