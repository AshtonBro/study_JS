document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', (data) => {
        fetch('./cars.json', {
            method: 'GET',
            mode: 'same-origin',
            cache: 'default',
            credentials: 'same-origin',
            headers: {
                'Conten-type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'client',
            body: JSON.stringify(data)
        })
        .then((response) => {
           if (response.status !== 200){
                throw new Error('Status network is not 200');
           }
            return (response.json());
        })
        .then((data) => {
            data.cars.forEach(item => {
                if (item.brand === select.value) {
                    const {brand, model, price} = item;
                    output.innerHTML = `Тачка ${brand} ${model} <br>
                     Цена: ${price}$`;
                   }
            });
            
        })
        .catch((error) => console.error(error));
    });



});

// const request = new XMLHttpRequest();
// request.open('GET', './cars.json');
// request.setRequestHeader('Content-type', 'application/json');
// request.send();
// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         data.cars.forEach(item => {
//             if (item.brand === select.value) {
//                 const {brand, model, price} = item;
//                 output.innerHTML = `Тачка ${brand} ${model} <br>
//                 Цена: ${price}$`;
//             }
//         });
//     } else {
//         output.innerHTML = 'Произошла ошибка';
//     }
// });
// });