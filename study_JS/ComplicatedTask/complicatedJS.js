'use strict';

const myLesson = [
   {lesson: 1, status: true},
   {lesson: 2, status: true},
   {lesson: 3, status: false},
   {lesson: 4, status: true},
   {lesson: 5, status: false},
   {lesson: 6, status: true},
   {lesson: 7, status: true},
   {lesson: 8, status: true},
   {lesson: 9, status: true},
   {lesson: 10, status: false}
];

const falseLesson = function(){
   for (let i = 0; i < myLesson.length; i++){
      let tasks = myLesson[i];
      for (let key in tasks) {
         if (tasks[key] == false){
            console.log(myLesson[i]);
         }
      }
   }
};

console.log(falseLesson());

/*
Доп Задание:
Необходимо вывести в консоль массив с заданиями у которых статус false
*/

