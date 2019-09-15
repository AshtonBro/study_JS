'use strict';
function changeColor() {
   /// найдём всё элементы
   const colorText = document.querySelector('#color'),
         button = document.querySelector('#screenUpchange'),
         screenUp = document.querySelector('.screenUp');
   // С помощью нажатие на кнопку рандомно менялся цвет фото и 16-ти ричный код данного цвета отображался на старнице.
   button.addEventListener('click', () => {
      // 16777215 комбинация для более яркой цветовой политры
      let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      colorText.textContent = color;
      screenUp.style.background = color;
   });
}
changeColor();



let button = document.querySelector('#screenDownchange');
function changeColorAnotherVersion() {
   let screenDown = document.querySelector('.screenDown'),
       colorText = document.querySelector('#color2');
       
       const getRandomColor = () => {
         let letters = '0123456789ABCDEF';
         let color = '#';
         for (let i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
         }
         return color;
       };
       colorText.textContent = getRandomColor();
       screenDown.style.background = getRandomColor();
}
button.addEventListener('click', changeColorAnotherVersion);