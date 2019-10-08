const popUpWindowOne = () => {
    const popupCall = document.querySelector('.popup-call'),
    callBtn = document.querySelectorAll('.call-btn'),
    popup = document.querySelectorAll('.popup');
    const openPopUp = () => {
        popupCall.style.display = 'block';
        popupCall.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            popupCall.style.transform = 'translateX(0%)';
            popupCall.style.transition = '0.8s';
        },450);
    };

    callBtn.forEach((element) => element.addEventListener('click', openPopUp));

    popup.forEach((element) => element.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('popup-close')){
            element.style.transform = 'translateX(-100%)';
            element.style.transition = '0.8s';
            window.statusMsg.remove('div');
        } else {
            target = target.closest('.popup-content');
            if(!target){
                element.style.transform = 'translateX(-100%)';
                element.style.transition = '0.8s';
                window.statusMsg.remove('div');
            }
        }
    }));
};

export default popUpWindowOne;