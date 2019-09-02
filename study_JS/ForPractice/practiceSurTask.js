/*
Добавлять новые <li> элементы
с текстом из инпута

*/

function newLiElements() {

    let imputText = document.getElementById('imput').value;
    let list = document.querySelector('#listOfLi');
    
    let liCollect = document.createElement('Li');
    let txtNode = document.createTextNode(imputText);
    
    liCollect.appendChild(txtNode);
    list.appendChild(liCollect);
    
    console.log('list: ', list);
}
