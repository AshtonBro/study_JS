
const clocklDegreeCalculate = function(hours, minutes) {
 if (hours < 0 || hours > 24) {
     console.log('Часы должны быть от 0 до 24');
     return;
 }
 if (minutes < 0 || minutes > 60) {
    console.log('Минуты должны быть от 0 до 60');
    return;
}
if (hours > 12) {hours = hours - 12;}
if (hours === 0){ hours = 12;}
if (minutes === 0){ minutes = 60;}
let gradusOfHours = (360 / 12) * hours;
let gradusOfMinutes = (360 / 60) * minutes;
let differentDegree = Math.abs(gradusOfHours - gradusOfMinutes);
if (differentDegree > 180){differentDegree = 360 - differentDegree;}
return console.log(' угол между часовой и минутной: ', differentDegree);

};