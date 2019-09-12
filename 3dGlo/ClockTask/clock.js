



function Time(deadline){
    let goodDay = document.querySelector('.goodDay');
    let goodDatSpan = goodDay.childNodes[3];
    let toDay = document.querySelector('.toDay');
    let toDaySpan = toDay.childNodes[3];
    let curTime = document.querySelector('.curTime');
    let curTimeSpan = curTime.childNodes[3];
    let endYear = document.querySelector('.endYear');
    let endYearSpan = endYear.childNodes[3];
    let dayArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
   
    function getTimeRemaining(){
        let date = new Date();
        let day = date.getDay() - 1;
        let localTime = date.toLocaleTimeString('ru');
        let dateStop = new Date(deadline).getTime();
        let dateNow = date.getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let stopDay = Math.floor(timeRemaining / 60 / 60 / 24);
        return {timeRemaining, day, localTime, stopDay};
    } 

    function CalculateDate() {
        let timer = getTimeRemaining();
        
        // Показывает день неледеи
        for (let i = 0; i < dayArr.length; i++){
                if (i === timer.day){
                    toDaySpan.textContent = dayArr[i];
                }
        }

        // показывает текущую дату
        curTimeSpan.textContent = timer.localTime;

        // показывает отставшиеся дни до НГ
        endYearSpan.textContent = timer.stopDay + ' ' + 'Дней';

        // время суток
        if (timer.localTime > 4 || timer.localTime < 12) {
            goodDatSpan.textContent = 'Утро';
        } else if (timer.localTime > 12|| timer.localTime < 17) {
            goodDatSpan.textContent = 'день';
        } else if (timer.localTime > 17 + 'AM'|| timer.localTime < 24) {
            goodDatSpan.textContent = 'вечер';
        } else if (timer.localTime > 24|| timer.localTime < 4) {
            goodDatSpan.textContent = 'ночь';
        }


        if (timer.timeRemaining > 0) {
            setTimeout(CalculateDate, 1000);
        }

    }

    CalculateDate();

}

Time('1 january 2020');
