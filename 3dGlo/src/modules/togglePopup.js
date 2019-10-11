const togglePopup = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn');

    const handlerPopUp = () => {
        if (document.documentElement.clientWidth > 720){
            popup.style.display = 'block';
            popup.style.transform = 'translateX(-100%)';
            setTimeout(function(){
                popup.style.transform = 'translateX(0%)';
                popup.style.transition = '0.8s';
            },500);
        }else{
            popup.style.display = 'block';
        }
    };

    popupBtn.forEach((elem) => elem.addEventListener('click', handlerPopUp));

    popup.addEventListener('click', (event) => {
        let target = event.target;
    if (document.documentElement.clientWidth > 720){
        if(target.classList.contains('popup-close')){
            popup.style.transform = 'translateX(-100%)';
            popup.style.transition = '0.8s';
        } else {
            target = target.closest('.popup-content');
            if(!target){
                popup.style.transform = 'translateX(-100%)';
                popup.style.transition = '0.8s';
            }
        }
    } else {
             popup.style.display = 'none';
        }
    
    });
 
};

export default togglePopup;