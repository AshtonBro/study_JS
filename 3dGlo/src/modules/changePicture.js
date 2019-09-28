const changePicture = () => {
    let command = document.querySelector('#command');
    let imgAll = command.querySelectorAll('img');
    let curSrc;
    
    imgAll.forEach((element) => {
        element.addEventListener('mouseenter', (e) => {
            curSrc = element.getAttribute('src');
            event.target.src = event.target.dataset.img;
        });
        element.addEventListener('mouseleave', (e) => {
            event.target.src = curSrc;
        });
    });
};

export default changePicture;