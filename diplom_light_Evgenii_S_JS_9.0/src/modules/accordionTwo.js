const accordionTwo = () => {
    const questions = document.querySelector('.questions'),
    panelHeading = questions.querySelectorAll('.panel-heading'),
    collapse = questions.querySelectorAll('.collapse'); 

    const toggleCollapse = (index) => {
        for(let i = 0; i < panelHeading.length; i++){
            if(index === i) {
                 collapse[i].classList.add('in');
            } else {
                collapse[i].classList.remove('in');
            }
        }
    };
    
    questions.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.panel-heading');
        if(target) {
            panelHeading.forEach((item, i) => {
                if(item === target){
                    toggleCollapse(i);
                }
            });
        }
    });
};

export default accordionTwo;

