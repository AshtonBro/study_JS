'use strict';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";

import modalWindows from './modules/modalWindows';
import sendForm from './modules/sendForm';
import validation from './modules/validation';
import accordionOneTwo from './modules/accordionOneTwo';
import CalculatorAccordion from './modules/calculatorAccordion';
import buttonMore from './modules/buttonMore';

window.addEventListener('DOMContentLoaded', () => {
    // Модальное окно номер 1
    modalWindows();
    // Отправка формы для блока 1 и блока 2
    sendForm();
    // Валидация форм
    validation();
    // аккордион
    accordionOneTwo();
    // калькулятор аккордион
    const calcAccord = new CalculatorAccordion();
    calcAccord.init();
    // кнопка больше
    buttonMore();
});


