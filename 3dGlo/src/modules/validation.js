  const validation = () => {
    const calcBlock = document.querySelector('.calc-block');
    let inputCalc = calcBlock.querySelectorAll('input');

    inputCalc.forEach((element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/\D/g, '');
        });
    });

    let input = document.querySelectorAll('input');

    input.forEach((item) => {
        item.addEventListener('input', () => {
            if (item.classList.contains('form-name')) {
                item.value = item.value.replace(/[^а-яё _]/iu, '');
            }
            if (item.classList.contains('form-phone')) {
                item.value = item.value.replace(/[^0-9\+]/, '');
            }
            if (item.classList.contains('form-email')) {
                item.value = item.value.replace(/[^\w+@\w+.\w{2,3}]/g, '');
            }
            if (item.classList.contains('mess')) {
                item.value = item.value.replace(/[^а-яё _]/iu, '');
            }
        });
    });
};

export default validation;