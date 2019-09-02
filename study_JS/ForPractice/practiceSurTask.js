
let arr = [15,1,2,3,0,12,4];
console.log('Original: ', arr);
let ArrResult = [];

funcNum(arr);

function funcNum(massiv) {

    console.log('length: ', massiv.length);

    for (let i = 0; i < massiv.length; i++){
        
        console.log('massiv[i]: ', massiv[i]);
        
        let lessCount = 0;

            for(let j = i; j < massiv.length; j++) 
            {
                if (massiv[i] > massiv[j]) {
                    lessCount += 1;
                }
                
            } 
        
        ArrResult.push(lessCount);
        // console.log('lessCount: ', lessCount);

    }

  console.log('ArrResult: ', ArrResult);
} 


