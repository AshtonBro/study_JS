const validation = () => {
    const calcBlock = document.querySelector('.calc-block');
    let inputCalc = calcBlock.querySelectorAll('input');

    inputCalc.forEach((element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/\D/g, '');
        });
    });
    
    document.addEventListener('input', (event) => {
        let item = event.target;
        if(item.classList.contains('form-name')) { 
            item.value = item.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');

        } else if (item.classList.contains('form2_name')) { 
            item.value = item.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
        
        } else if (item.classList.contains('form-phone')){
            item.value = item.value.replace(/[^0-9+]/, '');

        } else if (item.classList.contains('form-email')){
            item.value = item.value.replace(/[^\w+@\w+.\w{2,3}]/g, '');

        } else if (item.classList.contains('mess')){
            item.value = item.value.replace(/[^а-яА-ЯёЁ\W\ ]/g, '');
            
        } else {
            return;
        }
    });
};

export default validation;