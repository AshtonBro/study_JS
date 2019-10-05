const validation = () => {
    document.addEventListener('input', (event) => {
        let element = event.target;
        if(element.classList.contains('phone-user')) {
            element.value = element.value.replace(/[^0-9+]/g, '');
        } else if (element.classList.contains('user-name')) {
            element.value = element.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
        }
    });
};

export default validation;