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
