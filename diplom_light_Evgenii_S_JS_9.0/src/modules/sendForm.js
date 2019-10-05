const sendForm = () => {
    const errorMsg = 'Ошибка',
        loadMsg = 'Идет отправка',
        successMsg = 'Отправлено';
    const allSendForms = document.querySelectorAll('.text-center');
    const statusMsg = document.createElement('div');
    statusMsg.style.cssText = 'font-size: 2rem';
    allSendForms.forEach((element) => {
        element.addEventListener('submit', (event) => {
            event.preventDefault();
            element.appendChild(statusMsg);
            statusMsg.textContent = loadMsg;

            const formData = new FormData(element);
            let body = {};
            
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('Status network is not 200');
                }
                statusMsg.textContent = successMsg;
                clearInputs();
            })
            .catch((error) => {
                statusMsg.textContent = errorMsg;
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