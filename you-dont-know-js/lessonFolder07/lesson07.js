let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');
console.log('books: ',books);
console.log('book: ', book);

books[0].appendChild(book[2]);
books[0].insertBefore(book[3], book[5]);
books[0].insertBefore(book[1], book[0]);

let bodyColl = document.querySelector('body');
bodyColl.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');
console.log('bodyColl: ', bodyColl);


let getH = document.querySelectorAll('h2');
getH[2].innerHTML = 'Книга 3. this и Прототипы Объектов';
getH[2].setAttribute('style', 'color: darkkhaki;');
console.log(getH);

let advotaze = document.querySelector('.adv');
advotaze.classList.remove('adv');
let advotaze2 = document.querySelector('span');
advotaze2.classList.remove('span');
advotaze.textContent = "";


let ulElem = document.querySelectorAll('ul');
console.log('ulElem: ', ulElem);
let liElem = document.querySelectorAll('li');
console.log('liElem: ', liElem);
ulElem[1].insertBefore(liElem[14], liElem[10]);
ulElem[1].insertBefore(liElem[12], liElem[14]);
ulElem[1].insertBefore(liElem[8], liElem[16]);

ulElem[4].insertBefore(liElem[45], liElem[39]);
ulElem[4].insertBefore(liElem[38], liElem[42]);
ulElem[4].insertBefore(liElem[41], liElem[44]);

let cloneEL = liElem[55].cloneNode(true);
cloneEL.textContent = 'Глава 8: За пределами ES6';
ulElem[5].appendChild(cloneEL);
ulElem[5].insertBefore(cloneEL, liElem[56]);


