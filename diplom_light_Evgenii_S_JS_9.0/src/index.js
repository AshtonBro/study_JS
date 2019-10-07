'use strict';

import popUpWindowOne from './modules/popUpWindowOne';
import sendForm from './modules/sendForm';
import validation from './modules/validation';
import accordionTwo from './modules/accordionTwo';
import CalculatorAccordion from './modules/calculatorAccordion';

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