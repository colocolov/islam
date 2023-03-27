// слайдер на главной

let numberSlider = 2;
let spaceSlider = 200;

if (window.innerWidth < 992) {
  numberSlider = 2;
  spaceSlider = 100;
} if (window.innerWidth < 769) {
  numberSlider = 1;
  spaceSlider = 0;
}

const newsSlider = new Swiper(".news__slider", {
  loop: true,
  // autoplay: {
  //   //пауза между прокруткой
  //   delay: 3000,
  //   //закончить на последнем слайде
  //   // stopOnLastSlide: false,
  //   //отключить после ручного переключения
  //   // disableOnInteraction: false,
  // },
  //скорость переключения слайдов
  speed: 800,
  // навигация по стрелкам
  navigation: {
    nextEl: ".news__btn-next",
    prevEl: ".news__btn-prev",
    // disabledClass: "stories-button__unactive",
    clickable: true,
    // для ппрвильного направления
  },
  pagination: {
        el: ".news__count",
        type: "fraction",
  },

  //эффект перехода слайда (только если показ по 1-му слайду)
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  // показ кол-ва слайдов (работает, когда откл effect: "fade")
  slidesPerView: numberSlider,
  // расстояние между слайдами
  spaceBetween: spaceSlider,
  // отключение прокрутки при наведении мыши
  // on: {
  //   init() {
  //     this.el.addEventListener("mouseenter", () => {
  //       this.autoplay.stop();
  //     });

  //     this.el.addEventListener("mouseleave", () => {
  //       this.autoplay.start();
  //     });
  //   },
  // },
  //
});
//----- END
