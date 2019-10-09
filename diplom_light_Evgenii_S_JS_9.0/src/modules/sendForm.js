import { setInterval } from "timers";
const sendForm = () => {
    const errorMsg = 'Ошибка',
        loadMsg = 'Идет отправка',
        successMsg = 'Отправлено';
    const allSendForms = document.querySelectorAll('.text-center');
    window.statusMsg = document.createElement('div');
    window.statusMsg.style.cssText = 'font-size: 2rem';
    const questionInput = document.querySelector('.user_quest');
    questionInput.addEventListener('input', () => {
        window.globalObj["Вопрос Клиента"] = questionInput.value;
    });

    allSendForms.forEach((element) => {
        element.addEventListener('submit', (event) => {
            event.preventDefault();
            element.appendChild(window.statusMsg);
            window.statusMsg.textContent = loadMsg;
            
            const formData = new FormData(element);
            
            formData.forEach((val, key) => {
                window.globalObj[key] = val;
            });
            postData(window.globalObj)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('Status network is not 200');
                }
                window.statusMsg.textContent = successMsg;
                clearInputs();
            })
            .catch((error) => {
                window.statusMsg.textContent = errorMsg;
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
        const formInputs = [...document.querySelectorAll('input')];
        formInputs.forEach(item => {
            if (item.value !== '') {
                item.value = '';
            }
            setTimeout(() => {
                window.statusMsg.remove('div');
                window.globalObj = {};
                clearTimeout();
            }, 2000);
        });
    };
};

export default sendForm;