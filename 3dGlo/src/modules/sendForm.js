const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с Вами свяжемся';
    const allForm = document.getElementsByName('user_form');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    allForm.forEach((elem) => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            if(elem !== allForm[2]){
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
            } else {
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                statusMessage.style.cssText = 'font-size: 2rem; color: #fff';
            }
            
            const formData = new FormData(elem);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Status network is not 200');
                }
                statusMessage.textContent = successMessage;
                clearInputs();
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            });
            
        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
    const clearInputs = () => {
        let inputs = document.querySelectorAll('input');
            inputs.forEach((elem) => {
                elem.value = '';
        });
    };
};

export default sendForm;