// мобильное меню
// подменю
const menuBtn = document.querySelector('.menu__btn');
const subMenu = document.querySelector('.menu__sub');
const header = document.querySelector('.header');

  menuBtn.addEventListener('click', (e) => {
    let currentBtn = e.currentTarget;
    let drop = currentBtn.closest('.menu__item').querySelector('.menu__sub');
    drop.classList.toggle("_active");
    header.classList.toggle('header--active');
    currentBtn.classList.toggle('menu__btn--active');
  });
// закрытие при клике вне меню
document.addEventListener('click', (e) => {
  if (window.innerWidth > 769) {
    if(!e.target.closest('.menu__list')){
        subMenu.classList.remove('_active');
          menuBtn.classList.remove('menu__btn--active');
          header.classList.remove('header--active');
        }
      }
});

// меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuLink = document.querySelectorAll(".menu__item");
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
    menuBody.classList.remove("_active");
  });
});
