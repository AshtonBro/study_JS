'use strict';

let newTitle = document.querySelector('title');
newTitle.textContent = 'Сurrent time';

let myClock = document.getElementsByClassName('Clock');


// function CurrentDate() {
   

//     myClock[0].innerHTML = strTime;

//    //  setTimeout('formatAMPM()', 1000);
//     return strTime;
// } 


function CurrentDate() {
   let DateNow = new Date();
   let hours = DateNow.getHours();
   let minutes = DateNow.getMinutes();
   let secunds = DateNow.getSeconds();
   
   let day = DateNow.getDay();
   let month = DateNow.getMonth();
   let year = DateNow.getFullYear();
   
   (function() { 
      if (hours < 10 || day < 10 || month < 10) {
         hours = '0'+hours;
         day = '0'+day;
        month = '0'+month;
      }
     })();

   let allTime = hours + ':' + minutes + ':' + secunds + ' ' + day + '.'+ month + '.' + year;
      console.log('time: ', allTime );

     

   myClock[0].innerHTML = allTime;
   setTimeout('CurrentDate()', 1000);

}

