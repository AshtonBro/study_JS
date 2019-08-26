'use strict';

let lang  = prompt('Принимаю два значения: "ru" "en" ', 'ru'); 
console.log('lang: ', lang);

if (lang.length == 1 ) {
console.log('gg');
} else {
    console.log('больше двух');
}