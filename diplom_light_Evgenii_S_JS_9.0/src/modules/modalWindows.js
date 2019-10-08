const popUpWindowOne = () => {
    const togglePopup = (elem, btn) => {
        const popup = document.querySelector(elem);
        document.body.addEventListener('click', (event) => {
          let target = event.target;
          if (target.closest(btn)) {
            popup.style.display = 'block';
            popup.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                popup.style.transform = 'translateX(0%)';
                popup.style.transition = '0.8s';
            },450);
          } else if (target.classList.contains('popup-close')) {
            popup.style.transform = 'translateX(-100%)';
            popup.style.transition = '0.8s';
            window.statusMsg.remove('div');
          } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.transform = 'translateX(-100%)';
                popup.style.transition = '0.8s';
                window.statusMsg.remove('div');
            }
          }
        });
    };
    
    togglePopup('.popup-call', '.call-btn');
    togglePopup('.popup-discount', '.calc-btn');
    togglePopup('.popup-check', '.check-btn');
    togglePopup('.popup-consultation', '.director-btn');
    togglePopup('.popup-discount', '.sentence-btn');

};

export default popUpWindowOne;