'use strict';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const color = document.getElementById('color');
const fontStyle = document.getElementById('font');

const angle = (degrees) => (Math.PI / 180) * degrees;

color.addEventListener('input', () => context.strokeStyle = color.value);

fontStyle.addEventListener('change', (event) => {
   let target = event.target;
   context.lineWidth = `${target.value}`;
});

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

context.beginPath();
context.arc(150, 150, 40, 0, angle(360), false);
context.lineWidth = '8';
context.strokeStyle = '#16A7F0';
context.stroke();

context.beginPath();
context.moveTo(240, 180);
context.lineWidth = '8';
context.strokeStyle = '#F2CD24';
context.arc(200, 180, 40, 0, Math.PI * 1.45, true);
context.stroke();

context.beginPath();
context.moveTo(240, 180);
context.lineWidth = '8';
context.strokeStyle = '#F2CD24';
context.arc(200, 180, 40, 0, Math.PI * 1.38, false);
context.stroke();

context.beginPath();
context.moveTo(290, 150);
context.lineWidth = '8';
context.strokeStyle = 'black';
context.arc(250, 150, 40, 0, Math.PI * 1.10, true);
context.stroke();


context.beginPath();
context.moveTo(290, 150);
context.lineWidth = '8';
context.strokeStyle = 'black';
context.arc(250, 150, 40, 0, Math.PI * 1.04, false);
context.stroke();

context.beginPath();
context.moveTo(340, 180);
context.lineWidth = '8';
context.strokeStyle = 'green';
context.arc(300, 180, 40, 0, Math.PI * 0.90, false);
context.stroke();

context.beginPath();
context.moveTo(340, 180);
context.lineWidth = '8';
context.strokeStyle = 'green';
context.arc(300, 180, 40, 0, Math.PI * 0.96, true);
context.stroke();

context.beginPath();
context.moveTo(390, 150);
context.lineWidth = '8';
context.strokeStyle = 'red';
context.arc(350, 150, 40, 0, Math.PI * 1.10, true);
context.stroke();

context.beginPath();
context.moveTo(390, 150);
context.lineWidth = '8';
context.strokeStyle = 'red';
context.arc(350, 150, 40, 0, Math.PI * 1.04, false);
context.stroke();