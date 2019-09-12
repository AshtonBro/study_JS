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
    }, 1000);

}

// наша функция будет принимать дедлайн, то время до которого наш таймер будет отсчитывать
countTimer('13 september 2019');



});