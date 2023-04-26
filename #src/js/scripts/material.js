// слайдер на главной
const materialSlider = new Swiper(".material__slider", {
  loop: true,
  speed: 800,
  navigation: {
    nextEl: ".material__btn-next",
    prevEl: ".material__btn-prev",
    clickable: true,
  },
  pagination: {
        el: ".material__count",
        type: "fraction",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
//----- END
