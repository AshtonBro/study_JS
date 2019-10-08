const accordionTwo = () => {
    const questions = document.querySelector('.questions'),
    panelHeading = questions.querySelectorAll('.panel-heading'),
    collapse = questions.querySelectorAll('.collapse'),
    constructor = document.querySelector('.constructor'),
    collapseTwo = constructor.querySelectorAll('.collapse'),
    nextBtn = constructor.querySelectorAll('.next-btn'),
    panelHeadingTwo = constructor.querySelectorAll('.panel-heading'),
    accordion = document.getElementById('accordion');
    
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

    accordion.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.panel-heading');
      if (target) {
        event.preventDefault();
        panelHeadingTwo.forEach((item, i) => {
            if(item === target){
                collapseTwo[i].classList.toggle('in');
            } else {
                collapseTwo[i].classList.remove('in');
            }
        });
      }
      let targetNew = event.target;
      targetNew = targetNew.closest('.next-btn');
      if(targetNew){
        event.preventDefault();
        nextBtn.forEach((item, i) => {
            if(item === targetNew){
                collapseTwo[++i].classList.toggle('in');
            }
        });
      }
    });
};

export default accordionTwo;

