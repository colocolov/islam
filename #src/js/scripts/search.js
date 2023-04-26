// проверка формы поиска
const form = document.querySelector('.header__search');
const input = document.querySelector('.header__search-input');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if(!input.value) {
    return;
  }
  this.submit();
});
