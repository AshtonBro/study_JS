'use strict';


let select = document.getElementById("langType"); //Select в нём находиться элемент по id landtype
let options = ["ru", "en"]; //Создаём массив с двумя элементами для выбора языка
for(let i = 0; i < options.length; i++) { // Проходим по массиву 
    let opt = options[i]; //В первом этарации сохраняем элемент 'ru' в переменную opt
    let el = document.createElement("option"); //Создаем HTML Options element 
    el.textContent = opt; // заполняем пропорцию textContent текстом которая находться в переменной opt
    el.value = opt; // заполняем пропорцию value текстом которая находться в переменной opt
    select.appendChild(el); //добавляем к эдементу к langType(select) два options контроля
    console.log('el.value: ', el.value);
}

//Добавляем реакцию с использованием функции onChangeHandle на эвент change у контроля с id LandType
document.getElementById("langType").addEventListener("change", onChangeHandle);
let lang = document.getElementById("langType").value; //сохраням в переменную значение по умполчанию
showWeekDaysLangIf();
console.log('Язык по умолчанию:', lang);

function onChangeHandle() {
    lang = document.getElementById("langType").value;
    console.log('Ваш выбор языка:', lang);
    showWeekDaysLangIf();
    showWeekDaysLangSwitchCase();
    showWeekDaysLang2DArray();
}

function showWeekDaysLangIf() {
    if (lang === 'ru') {
        let arrRU = ['Понедельник', 'Вторник', 'Cреда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    console.log('(if) Дни недели на RU:', arrRU);
    } else if (lang === 'en') {
         let arrEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log('(if) Дни недели на EN:', arrEn);
    }
}

function showWeekDaysLangSwitchCase() {
switch (lang) {
    case 'ru':
        let arrRU = ['Понедельник', 'Вторник', 'Cреда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
         console.log('(SwitchCase) Дни недели на RU:', arrRU);
         break;
    case 'en':
        let arrEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log('(SwitchCase) Дни недели на EN:', arrEn);
        break;
}
}

function showWeekDaysLang2DArray() {
  let ruDays = ['Понедельник', 'Вторник', 'Cреда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let enDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let Array2d = [
      ['ru', ruDays], 
      ['en', enDays]
  ];
  console.log('Многомерный массив',Array2d[document.getElementById("langType").selectedIndex][1]);
}




let newPeron = prompt('Введите ваше имя:');
let result = (newPeron == "Артём") ? 'директор' :
 (newPeron == "Максим") ? 'преподаватель' : 'студент' ;
console.log('Кто ты: ', result);

