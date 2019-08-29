'use strict';

let week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
console.log('Оригинал: ', week);
for (let i = 5; i < week.length; i++) {
    let newWek = week[i].italics();
    week.splice(i,1, newWek);
}
console.log('Со строчкой: ', week);

for (let i = 0; i < week.length; i++) {
    console.log('в новой строчки: ', week[i]);
}

let d = new Date();
let nindexDay = d.getDay();
let newWek = week[nindexDay].bold();
week.splice(nindexDay,1, newWek);
console.log('Со строчкой и жирный: ', week);
