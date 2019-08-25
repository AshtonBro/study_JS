//  Создать переменную num со значением 266219 ·  Вывести в консоль произведение (умножение) цифр этого числа

let num = 26062109; //Обьявляем переменную num и записываем в неё число
let numMustBe = 2 * 6 * 6 * 2 * 1 * 9; 

let arrNum = num.toString().split(""); /*методом toString конвертирует из number в string, 
методом .split("")  разделяет строку на каждый элемент и возвращает массив стрингов[]*/

 
console.log('Есть ли в массиве нули: ', arrNum.includes('0'));
console.log('Массив в оригенале: ', arrNum);

if (arrNum.includes('0')) {
for (let i in arrNum) {
    if(arrNum[i] == '0'){
        let remuved = arrNum.splice(i, 1);
        console.log('Индекс: ', i, " ",'Вырезан: ', remuved);
    }
}
console.log('Массив после фильтрации: ', arrNum);
}

let arrSave = 1; //Создали переменную для сохранения результата
for (let i = 0; i <= arrNum.length -1; i++) { /*обьявялем переменную и методом перебора проходя через ЦИКЛ меняем в ней число 
    пока это число не будет равно длине нашего массива */
    arrSave *= arrNum[i]; //Переменная * массив[номер индекса нашего элемента в массиве] = сохраняем результат в переменную
  
    console.log('Переменная для сохданения ресультат: ', arrSave);
    console.log('Перебор елемендов по индексу: ', arrNum);
}

let Stepen = 3;
let Result = 1;
for (let i = 1; i <= Stepen; i++) {
    console.log('i: ', i);
    console.log('Result *= arrSave; : ', Result *= arrSave);
    console.log('Result: ', Result);
}

//Вывести первые две цифры результата возведения в степень
console.log('Вывести первые две цифры: ',Result.toString().substring(0, 2));

//Вывод общего результат
console.log(arrNum);
console.log('Производная числа: ', arrSave);
console.log('Должно быть: ', numMustBe);
