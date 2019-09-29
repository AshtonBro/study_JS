'use strict';

import 'fetch-polyfill';
import 'es6-promise';
import 'formdata-polyfill';
import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

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

countTimer();
toggleMenu();
togglePopup();
tabs();
slider();
changePicture();
validation();
calculator();
sendForm();

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