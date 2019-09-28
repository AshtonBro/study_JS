'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePicture from './modules/changePicture';
import validation from './modules/validation';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
import SliderCarousel from './modules/SliderCarousel';

// Timer
countTimer();
// Menu
toggleMenu();
// popup окно
togglePopup();
// Табы 
tabs();
// Слайдер 
slider();
// Наша каманда, работа с img и dataset
changePicture();
// regex калькулятора валидация для цифр
validation();
// калькулятор типа обьекта
calculator();
//send-ajax-form
sendForm();
// Slider bar с клиентами
const carousel = new SliderCarousel({
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    sliderToShow: 4,
    infinity: true,
    
    responsive: [{
        breakpoint: 1024,
        sliderToShow: 3
    }, 
    {
        breakpoint: 768,
        sliderToShow: 2
    }, 
    {
        breakpoint: 576,
        sliderToShow: 1
    },
]
});

carousel.init();

