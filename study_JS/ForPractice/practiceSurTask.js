'use strict';

const DomElement = function(selector, height, width, bg, fontSize, options){
this.selector = selector;
this.height = height;
this.width = width;
this.bg = bg;
this.fontSize = fontSize;
options = options || {};
this.position = options.position;
this.testDiv = null;
};

DomElement.prototype.addElement = function(text){
    if (this.selector === '.') {
        let newElem = document.createElement('div');
        document.querySelector('body').appendChild(newElem);
        newElem.textContent = text;
        newElem.style.height = this.height;
        newElem.style.width = this.width;
        newElem.style.background = this.bg;
        newElem.style.fontSize = this.fontSize;
        newElem.style.position = this.position;
        this.testDiv = newElem;
    } else if (this.selector === '#') {
        let newElem = document.createElement('p');
        document.querySelector('body').appendChild(newElem);
        newElem.textContent = text;
        newElem.style.height = this.height;
        newElem.style.width = this.width;
        newElem.style.background = this.bg;
        newElem.style.fontSize = this.fontSize;
        newElem.style.position = this.position;
        this.testDiv = newElem;
    }
};


let elem1 = new DomElement('.', '30px', '150px', 'lightGreen', '18px');
let elem2 = new DomElement('.', '40px', '180px', 'Red', '25px');
elem1.addElement('Hello Glo Academy');
elem2.addElement('Hello student');

let dom2 = Object.create(new DomElement('.', '100px', '100px', 'black', '18px', {position: 'absolute'}));
document.addEventListener('DOMContentLoaded', dom2.addElement('I,m a black'));

let testDom = Object.create(new DomElement('.', '50px', '50px', 'blue', '18px'));
console.log('testDom: ', testDom);
testDom.addElement('test');
testDom.testDiv.style.position = 'absolute';



function moveElemts() {



}













// const context = document.getElementById('context');


// document.addEventListener('contextmenu', function(e){
//     e.preventDefault();
//     console.log('e: ', e);
//     context.classList.toggle('active');
//     context.style.top = e.pageY + 'px';
//     context.style.left = e.pageX + 'px';
    
// });

// document.addEventListener('click', function(e){
//     context.classList.remove('active');
// });


// const li = document.querySelectorAll('li');
// li.forEach(function(elem){
//     elem.addEventListener('click', changeStyle);
// });

// function changeStyle(e){
//     e.target.style.color = 'red';
//     e.target.style.fontWeight = 'bold';
//     console.log(e.target);
// }


// let ul = document.querySelector('ul');

// ul.addEventListener('click', changele);

// function changele(e){
//    console.log(this);
//    console.log(event.target);
// }


// function chaStyle(event){
//     event.target.style.color = 'red';
//     event.target.style.fontWeight = 'bold';
// }


// const arr = ['Дмитрий', 'Александр', 'Сергей', 'Евгений', 'Максим', 'Павел', 'Артём'];

// const obj = {
//     name: 'Maks',
//     surname: 'leskin',
//     age: 32,
//     'birth year': 1987,

//     getFullName: function(){
//     console.log(this.surname + " " + this.name);
//     }
// };

// obj.name = 'Evgeniy';
// obj.surname = 'Solovev';
// obj.age = 3000;
// obj["birth year"] = 1300;

// for (let key in obj) {
//     console.log(obj[key]);
// }
// for (let item of arr) {
//     console.log(item);
// }

// arr.forEach(function(element){
//     console.log(this);
// }, obj);

// arr.map(function(element){
//     console.log(this);
// }, obj);

// arr.reduce(function(element){
//     console.log(this);
// }, obj);

