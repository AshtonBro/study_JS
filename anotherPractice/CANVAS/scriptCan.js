'use strict';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const color = document.getElementById('color');

color.addEventListener('input', () => context.strokeStyle = color.value);

canvas.addEventListener('mousemove', (event) => {
    // получать наши координаты мышки
    const xMouse = event.offsetX,
        yMouse = event.offsetY,
    // координата указателя мыши относительно позиции последнего события mousemove
    movementX = event.movementX,
    movementY = event.movementY;
    // на кнопку рисовать
    if(event.buttons > 0){
        context.beginPath();
        context.moveTo(xMouse, yMouse);
        context.lineTo(xMouse - movementX, yMouse - movementY);
        context.stroke();
        context.closePath();
    }
    

});