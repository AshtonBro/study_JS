const validation = () => {
    document.addEventListener('input', (event) => {
        let element = event.target;
        if(element.classList.contains('phone-user')) {
            element.value = element.value.replace(/[^0-9+]/g, '');
        } 
        if (element.classList.contains('user-name')) {
            element.value = element.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
        }
        if (element.classList.contains('user_quest')) {
            element.value = element.value.replace(/[^а-яА-ЯёЁ0-9\W\ ]/g, '');
        }
    });
};

export default validation;