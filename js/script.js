
let btn = document.querySelector('.content__form-button');
const form = document.querySelector('form');
let popUp = document.querySelector('.popup');
let overLay = document.getElementById('overlay');
let bodyPage = document.querySelector('body');

form.onsubmit = function(evt) {

let a = document.forms["mainForm"]["name"].value;
let b = document.forms["mainForm"]["phone"].value;
let с = document.forms["mainForm"]["email"].value;


if (a == "") {
alert("Укажите ваши Фамилию Имя Отчество ");
return false;
}


if (b == "") {
alert("Укажите номер телефона. Используйте формат +71234567890");
return false;
}
if (!/(\+7)(\d{3})(\d{3})(\d{2})(\d{2})/.test(b)) {
alert("Номер телефона указан неверно. Используйте формат +71234567890");
return false;
}


if (с == "") {
alert("Укажите email");
return false;
}
// if (!/^[a-z0-9][a-z0-9\._-]*[a-z0-9]*@([a-z0-9]+([a-z0-9-]*[a-z0-9]+)*\.)+[a-z]+/i.test(c)) {
// alert("Email указан неверно. Проверьте правильность ввода.");
// return false;
// }

 popUp.style.display='block';
  evt.preventDefault();
     popUp.style.display='block';
     overLay.style.display='block';
     bodyPage.style.overflow='hidden';
}

  document.querySelector('.close').onclick = function(){
      popUp.style.display='none';
           overLay.style.display='none';
           bodyPage.style.overflow='auto';
  }
