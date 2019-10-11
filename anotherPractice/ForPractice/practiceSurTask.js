
const output = document.getElementById('output');

const getData = (url) => {
    const promise = new Promise((resolve, rejact) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('readystatechange', () => {
            if(request.readyState !==4){
                return;
            }
            if(request.status === 200){
                const response = JSON.parse(request.responseText);
                resolve(response);
            } else {
                rejact(request.statusText);
            }
        });
        request.send();
    });
    return promise;
};

const outputPhotos = (data) => {

    console.log('data: ', data);
    data.forEach((element) => {
        output.insertAdjacentHTML('beforebegin',
    `<h4>${element.title}</h4>
    <h3>${element.id}</h3>
    <img src="${element.thumbnailUrl}" alt="${element.title}">`);
    });
   
    
};

const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
     twoImg = getData('https://jsonplaceholder.typicode.com/photos/2'),
     threeImg = getData('https://jsonplaceholder.typicode.com/photos/3');

Promise.all([oneImg, twoImg, threeImg])
.then(outputPhotos)
.catch(error => console.log(error));





/*                                  ВАРИАНТ БЕЗ PROMISE

const output = document.getElementById('output');

const getData = (url, outputData) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('readystatechange', () => {
        if(request.readyState !==4){
            return;
        }
        if(request.status === 200){
            const response = JSON.parse(request.responseText);
            outputData(response);
        } else {
            console.error(request.statusText);
        }
    });
    request.send();
};

const outputPhotos = (data) => {
    const random = Math.floor(Math.random() * data.length);
    const obj = data[random];
    output.innerHTML = `<h2>${obj.title}</h2>
                        <h3>${obj.id}</h3>
                        <img src="${obj.url}" alt="${obj.title}">`;

};

const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

getData(urlPhotos, outputPhotos);

*/

/*                            ПЕРЕПИСАЛИ ЗАПРОС ПОД PROMISE

const output = document.getElementById('output');

const getData = (url) => {
    const promise = new Promise((resolve, rejact) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('readystatechange', () => {
            if(request.readyState !==4){
                return;
            }
            if(request.status === 200){
                const response = JSON.parse(request.responseText);
                resolve(response);
            } else {
                rejact(request.statusText);
            }
        });
        request.send();
    });
    return promise;
};

const outputPhotos = (data) => {
    const random = Math.floor(Math.random() * data.length);
    const obj = data[random];
    output.innerHTML = `<h2>${obj.title}</h2>
                        <h3>${obj.id}</h3>
                        <img src="${obj.url}" alt="${obj.title}">`;

};

const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

getData(urlPhotos)
.then(outputPhotos)
.catch(error => console.error(error));

*/