window.addEventListener('DOMContentLoaded', function(){
'use strict';
let count = 0;
// Timer
// Первое с чего начать это получить элементы со страницы
function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds'),
        timerNumbers = document.querySelectorAll('.timer-numbers');

    function getTimeRemaining(){
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000, // нам нужны секунды, переведём милисек в сек
        // имея секуды мы можем вычислить, часы, минуты.
        // 447764 секунд, нам необходимо вывести кусочек, потому что вся остальная часть пойдём на часы и минуты
        // нам необходимо вычеслить остаток от деления на количество секунд в менуте, так мы будем получать секунды
        // не выходя за рамки текущей минуты.
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60) % 24,
        day = Math.floor(timeRemaining / 60 / 60 / 24);

        if (hours < 10 || minutes < 10 || seconds < 10) {
            hours = ('0' + hours).slice(-2);
            minutes = ('0' + minutes).slice(-2);
            seconds = ('0' + seconds).slice(-2);
        }
        
        return {timeRemaining ,hours, minutes, seconds};
    }

    let updateClock = setInterval(function(){
        let timer = getTimeRemaining();
        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;

        if(timer.timeRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            timerNumbers.forEach((elem) =>{
                elem.style.color = 'Red';
            });
            console.log('stop');
            clearInterval(updateClock);
        }
    }, 100);

}

// наша функция будет принимать дедлайн, то время до которого наш таймер будет отсчитывать
countTimer('17 september 2019');

// Menu
const toggleMenu = () => {
// получим элементы со страницы
    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          menuItem = menu.querySelectorAll('ul>li');
        //   main = document.querySelector('body');
// handler menu
    const handlerMenu = () => {
// метод toggle убирает или прибавляет класс тот который мы ему пропишем как аргумент
      menu.classList.toggle('active-menu');
    };
// вешаем обработчик событий на меню и на кнопку
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItem.forEach((elem) => elem.addEventListener('click', handlerMenu));
    
    console.log('menu: ', menu);
    console.log('btnMenu: ', btnMenu);
    console.log('closeBtn: ', closeBtn);
    console.log('menuItem: ', menuItem);
//Menu из списка li плавная прокрутка к элементу на странице
    // main.addEventListener('click', () => {
        
    //     console.log(event.target);
    // });

};
toggleMenu();

// popup окно
const togglePopup = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn');

    const handlerPopUp = () => {
        if (document.documentElement.clientWidth > 720){
            popup.style.display = 'block';
            popup.style.transform = 'translateX(-100%)';
            setTimeout(function(){
                popup.style.transform = 'translateX(0%)';
                popup.style.transition = '0.8s';
            },500);
        }else{
            popup.style.display = 'block';
        }
    };

    popupBtn.forEach((elem) => elem.addEventListener('click', handlerPopUp));

    popup.addEventListener('click', (event) => {
        let target = event.target;

    if (document.documentElement.clientWidth > 720){
        if(target.classList.contains('popup-close')){
            popup.style.transform = 'translateX(-100%)';
            popup.style.transition = '0.8s';
        } else {
            target = target.closest('.popup-content');
            if(!target){
                popup.style.transform = 'translateX(-100%)';
                popup.style.transition = '0.8s';
            }
        }
    } else {
             popup.style.display = 'none';
        }
        
    });
 
};
togglePopup();

// Табы 
const tabs = () => {
// получаем элементы
    const tabHeader = document.querySelector('.service-header'), // наш родитель 
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
// применяем делегирование 
    const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++){
            if(index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            }else{
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };

    tabHeader.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.service-header-tab');
        if(target){
            tab.forEach((item, i) => {
            if(item === target){
                toggleTabContent(i);
            }
            });
        }
    });
};
tabs();







});