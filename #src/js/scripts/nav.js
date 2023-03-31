// мобильное меню

//выпадающее меню для мобильных устройств
// document.addEventListener("click", documentActions);

// function documentActions(e) {
//   const targetElement = e.target;
//   if (window.innerWidth > 900) {
//     if (targetElement.classList.contains("menu__arrow")) {
//       targetElement.closest(".menu__item").classList.toggle("_hover");
//     }
//     if (
//       !targetElement.closest(".menu__item") &&
//       document.querySelectorAll(".menu__item._hover").length > 0
//     ) {
//       // console.log("ehhh");
//       // _removeClasses(document.querySelectorAll(".menu__item._hover"), "_hover");
//     }
//   }
// }

// проверка, является ли уствройство мобильным
// const isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };

// if (isMobile.any()) {
//   // document.querySelector('html').classList.add('_touch');
//   document.body.classList.add("_touch");
// }

// подменю
const menuBtn = document.querySelector('.menu__btn');
// console.log(menuBtn);
const subMenu = document.querySelector('.menu__sub');
const header = document.querySelector('.header');

// menuBtn.forEach(el => {
  menuBtn.addEventListener('click', (e) => {
    let currentBtn = e.currentTarget;
    // console.log(e);
    let drop = currentBtn.closest('.menu__item').querySelector('.menu__sub');
    // console.log(drop);

    // subMenus.forEach(el => {
      // if (e !== drop) {
      //   subMenu.classList.remove('menu__sub--active');
      // } else {
      //   console.log('yes');
      // }
    // });

    drop.classList.toggle("_active");
    header.classList.toggle('header--active');
    currentBtn.classList.toggle('menu__btn--active');
  });
// });
// закрытие при клике вне меню
document.addEventListener('click', (e) => {
  if (window.innerWidth > 768) {
    if(!e.target.closest('.menu__list')){

      // subMenus.forEach(el => {
        subMenu.classList.remove('_active');
        // });
        // menuBtn.forEach(el => {
          menuBtn.classList.remove('menu__btn--active');
          // });
          header.classList.remove('header--active');
        }
      }
  // console.log();
});

// меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuLink = document.querySelectorAll(".menu__item");
// const subMenu = document.querySelector('.menu__sub');
if (iconMenu) {
  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    subMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
// закрытие при клике
menuLink.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    // subMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  });
});
