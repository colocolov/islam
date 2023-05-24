// слайдер на главной
// let numberSlider = 2;
// let spaceSlider = 200;

// if (window.innerWidth < 992) {
//     spaceSlider = 100;
//   } if (window.innerWidth < 769) {
//     numberSlider = 1;
//     spaceSlider = 0;
//   }

const newsSlider = new Swiper(".news__slider", {
  loop: true,
  speed: 800,
  navigation: {
    nextEl: ".news__btn-next",
    prevEl: ".news__btn-prev",
    clickable: true,
  },
  pagination: {
        el: ".news__count",
        type: "fraction",
  },

  // slidesPerView: numberSlider,
  // spaceBetween: spaceSlider,

  slidesPerView: 2,
  spaceBetween: 200,

  breakpoints: {
    992: {
      spaceBetween: 100,
    },
    769: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  }

});
//----- END
