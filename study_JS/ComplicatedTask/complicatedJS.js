'use strict';

let string30 = '      Они кричат, они грозятся:«Вот к стенке мы славян прижмем!    ';
let argument = prompt('Введи данные а там посмотрим?', string30);
console.log('typeof: ', typeof argument);

// —1 Если как аргумент передана не строка - функция оповещает об этом пользователя Check

// —2 В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце срулс

// —3 Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них ...

function filterArgument(data) {

if (data.length > 0) {
    console.log('С пробелами: ', data);
    data = data.trim();
    console.log('Без пробелов: ', data);
    data = data.substring(0,30);
    console.log('До 30 строк: ', data + '...');
    return data;
} else {
    return console.log(confirm('Это не является строкой'));
}
}


filterArgument(argument);

