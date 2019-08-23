//  Создать переменную num со значением 266219 ·  Вывести в консоль произведение (умножение) цифр этого числа

let num = 266219;
let myNum = num.toString().split("");

let numProis = 2 * 6 * 6 * 2 * 1 * 9;

let sum = myNum[0];
for (let i = 1; i <= myNum.length -1; i++) {
    sum *= myNum[i];
}

//У меня не работает оператор **
let stepen = 3;
let result = 1;
for (let i = 1; i <= stepen; i++){
    result *= sum;
}


console.log(myNum);
console.log('Должно быть:', numProis);
console.log('Произведение цифр:', sum);
console.log('Возведение степени', result);

