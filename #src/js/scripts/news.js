// слайдер на главной
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
  slidesPerView: 2,
  // расстояние между слайдами
  spaceBetween: 200,
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
