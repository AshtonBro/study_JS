'use strict';

let body = document.querySelector('body');
console.log('body: ', body);

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.addElement = function(text){
        if (selector === '.') {
            let newElem = document.createElement('div');
            body.appendChild(newElem);
            newElem.textContent = text;
            newElem.style.height = height;
            newElem.style.width = width;
            newElem.style.background = bg;
            newElem.style.fontSize = fontSize;
        } else if (selector === '#') {
            let newElem = document.createElement('p');
            body.appendChild(newElem);
            newElem.textContent = text;
            newElem.style.height = height;
            newElem.style.width = width;
            newElem.style.background = bg;
            newElem.style.fontSize = fontSize;
        }
    };
}


let elem1 = new DomElement('.', '30px', '150px', 'lightGreen', '18px');
let elem2 = new DomElement('.', '40px', '180px', 'Red', '18px');


elem1.addElement('Hello Glo Academy');
elem2.addElement('Hello test');



