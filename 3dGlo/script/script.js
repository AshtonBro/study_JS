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
            clearInterval(updateClock);
        }
    }, 100);

}

// наша функция будет принимать дедлайн, то время до которого наш таймер будет отсчитывать
countTimer('30 september 2019');

// Menu
const toggleMenu = () => {
// получим элементы со страницы
    const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    body = document.querySelector('body');


    btnMenu.addEventListener('click', () => {
        menu.classList.add('active-menu');
    });

    body.addEventListener(('click'), (event) => {
    let target = event.target;

    if(target.closest('menu') && menu.classList.contains('active-menu')) { 
        if(target.tagName !== 'MENU') {
            if(target.tagName === 'A'){ 
                menu.classList.remove('active-menu');
            }
        }
    } else if (!target.closest('menu') && !target.closest('.menu')) {
        menu.classList.remove('active-menu');
    }

});

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

// Слайдер 
const slider = () => {
// получаем элементы со страницы
    const slide = document.querySelectorAll('.portfolio-item'),
          portfolioContent = document.querySelector('.portfolio-content'), // Родитель слайдера
          btnAll = document.querySelectorAll('.portfolio-btn');
     let  portfolioDots = document.querySelector('.portfolio-dots');

// чтобы опредлеить какой именно слайд у нас на экране создадим переменну
    let currentSlide = 0,
        interval;

// Добавляем количество dot's равному кол-ву слайдов
    const addDot = () => {
        for(let i = 0; i < slide.length; i++){
            let dots = document.createElement('li');
            dots.classList.add('dot');
            portfolioDots.append(dots);
        }
    };
    addDot();
    let dot = document.querySelectorAll('.dot');

// смена класса будет происходит часто поэтому выносим их в отдельную функцию
    const prevSlide = (element, index, strClass) => {
        element[index].classList.remove(strClass);
    };

    const nextSlide = (element, index, strClass) => {
        element[index].classList.add(strClass);
    };

// Рализуем autoPlay для слайдера, чтобы он автоматически листал изображение
    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };
// переключение по стрелочкам
    portfolioContent.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if(target.matches('#arrow-right')){
            currentSlide++;
        }else if(target.matches('#arrow-left')){
            currentSlide--;
        }else if(target.matches('.dot')){
            dot.forEach((element, index) => {
                if(element === target){
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    });

    portfolioContent.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
            stopSlide();
        }
    });
    portfolioContent.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
            startSlide();
        }
    });

    startSlide(2500);

};
slider();

// Наша каманда, работа с img и dataset
const changePicture = () => {
    let command = document.querySelector('#command');
    let imgAll = command.querySelectorAll('img');
    let curSrc;
    
    imgAll.forEach((element) => {
        element.addEventListener('mouseenter', (e) => {
            curSrc = element.getAttribute('src');
            event.target.src = event.target.dataset.img;
        });
        element.addEventListener('mouseleave', (e) => {
            event.target.src = curSrc;
        });
    });
};
changePicture();

// regex калькулятора валидация для цифр
const validationNumber = () => {
    const calcBlock = document.querySelector('.calc-block');
    let inputCalc = calcBlock.querySelectorAll('input');

    inputCalc.forEach((element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/\D/g, '');
        });
    });
};
validationNumber();

// калькулятор типа обьекта
const calculator = (prise = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcCount= document.querySelector('.calc-count'),
    calcDay = document.querySelector('.calc-day'),
    totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0,
        countValue = 1,
        dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
         squareValue = +calcSquare.value;
         if(calcCount.value > 1){
            countValue += (calcCount.value - 1) / 10;
         }
         if(calcDay.value && calcDay.value < 5){
             dayValue *= 2;
         } else if (calcDay.value && calcDay.value < 10){
             dayValue *= 1.5;
         }
        if(squareValue && typeValue){
            total = prise * typeValue * squareValue * countValue * dayValue;
        } 

        totalValue.textContent = total;
    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        
        // if(target.matches('.calc-type') || target.matches('.calc-square') || 
        // target.matches('.calc-day') || target.matches('.calc-count')){
        // }

        // if(target === calcType || target === calcSquare || 
        //     target === calcDay  || target === calcCount){
        // }

        if(target.matches('select') || target.matches('input')){
            countSum();
        }
    });
};
calculator();

//send-ajax-form
const sendForm = () => {
// Cделали предварительно сообщения которые будем показывать пользователю
    const errorMessage = 'Что-то пошло не так',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с Вами свяжемся';
    // Получили нашу форму
    const form = document.getElementById('form1');
    // Создали элемент который будем добавлять на страницу и добавили div стили
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    // Прописали обработчик событий submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
        
        // for(let val of formData.entries()){
        //     body[val[0]] = val[1];
        // }

        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body, 
            () => {
                statusMessage.textContent = successMessage;
            },
            (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            }
        );
    });


    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState !== 4){
                return;
            }
            if(request.status === 200){
                outputData();
            } else {
                errorData(request.status);
            }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify(body));
    };
};
sendForm();



});

// Slider bar с клиентами
class SliderCarousel{
    constructor({
        main, 
        wrap, 
        next,
        prev,
        infinity = false,
        position = 0,
        sliderToShow = 3,
        responsive = []
    
    }){
        if(!main || !wrap){
            console.warn('slider-carusel: необходимо 2 свойства, "main" и "wrap"!');
        }
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.sliderToShow = sliderToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100/ this.sliderToShow),
            maxPosition: this.slides.length - this.sliderToShow
        };
        this.responsive = responsive;
    }

    init(){

        this.addGloClass();
        this.addStyle();
        
        if(this.prev && this.next){
            this.controlSlider();
        }else{
            this.addArow();
            this.controlSlider();
        }

        if(this.responsive){
            this.responseInit();
        }

    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for( const item of this.slides){
            item.classList.add('glo-slider__item');
        }
    }

    addStyle(){ 
        let style = document.getElementById('sliderCarusel-style');
        if(!style){
        style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        }
     
        style.textContent = `
        .glo-slider {
            overflow: hidden !important; 
        }

        .glo-slider__wrap {
            display: flex !important;
            transition: transform 0.5s !important;
            will-change: transform !important;
        }

        .glo-slider__item {
            display: flex !important;
            align-items: center;
            justify-content: center;
            flex: 0 0 ${this.options.widthSlide}% !important;
            margin: auto 0 !important;
        }
        `;
        document.head.appendChild(style);
    }

    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){
        if(this.options.infinity || this.options.position > 0){
        --this.options.position;
        if(this.options.position < 0){
            this.options.position = this.options.maxPosition;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
       }
    }

    nextSlider(){
        if(this.options.infinity || this.options.position < this.options.maxPosition){
        ++this.options.position;
        if(this.options.position > this.options.maxPosition){
            this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    addArow(){
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');
        style.textContent = `
            .glo-slider__prev,
            .glo-slider__next{
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
            }

            .glo-slider__next {
                border-left-color: #19b5fe
            }

            .glo-slider__prev {
                border-right-color: #19b5fe
            }

            .glo-slider__prev:hover,
            .glo-slider__next:hover,
            .glo-slider__prev:focus,
            .glo-slider__next:focus{
                background: transparent;
                outline: transparent
            }
        `;

        document.head.appendChild(style);

    }

    responseInit(){
        const sliderToShowDefault = this.sliderToShow;
        const allRespone = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allRespone);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if(widthWindow < maxResponse){
                for(let i = 0; i < allRespone.length; i++){
                    if(widthWindow < allRespone[i]){
                        this.sliderToShow = this.responsive[i].sliderToShow;
                        this.options.widthSlide = Math.floor(100 / this.sliderToShow);
                        this.addStyle();
                    }
                }
                
            } else {
                this.sliderToShow = sliderToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.sliderToShow);
                this.addStyle();
            }
        };

    checkResponse();

    window.addEventListener('resize', checkResponse);

    }

}