'use strict';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";

import popUpWindowOne from './modules/modalWindows';
import sendForm from './modules/sendForm';
import validation from './modules/validation';
import accordionTwo from './modules/accordionTwo';
import CalculatorAccordion from './modules/calculatorAccordion';
import buttonMore from './modules/buttonMore';

// Модальное окно номер 1
popUpWindowOne();
// Отправка формы для блока 1 и блока 2
sendForm();
// Валидация форм
validation();
// аккордион
accordionTwo();
// калькулятор аккордион
const calcAccord = new CalculatorAccordion();
calcAccord.init();
// кнопка больше
buttonMore();

