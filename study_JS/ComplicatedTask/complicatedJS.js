let arr = ['24456','7895','4592','2386','341','48','905'];
console.log(arr);

let arry2 = [];
for (let i = 0; i < arr.length; i++) {
   if (arr[i].startsWith('2')){
      arry2.push(arr[i]);
     } else if (arr[i].startsWith('4')) {
      arry2.push(arr[i]);
     }  
}
console.log('Те, что начинаются с цифры 2 или 4: ', arry2);



let PrimeNumbers;
let primeI;

 for (PrimeNumbers = 2; PrimeNumbers <= 100; PrimeNumbers++) {

    let Flag = true;

      for (primeI = 2; primeI < PrimeNumbers/2; primeI++) {
        
         if (PrimeNumbers % primeI == 0) {
            Flag = false;
            break;
         }

         if(Flag) {
            console.log('Простое число:' ,PrimeNumbers);
            console.log('Делители этого числа: 1 и' ,primeI);
         }

      } 
      
}

