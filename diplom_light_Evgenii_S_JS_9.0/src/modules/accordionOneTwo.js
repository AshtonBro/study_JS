const accordionOneTwo = () => {
    const panelHeading = document.querySelectorAll('.panel-heading'),
    panelContent = document.querySelectorAll('.panel-collapse'),
    panelGroup = document.querySelectorAll('.panel-group');
    
    const toggleCollapse = (index) => {
        for(let i = 0; i < panelContent.length; i++){
            if(index === i) {
                panelContent[i].classList.add('in');
            } else {
                panelContent[i].classList.remove('in');
            }
        }
    };
    
    panelGroup.forEach((item) => {
        item.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('.construct-btn span') || target.matches('.construct-btn')) {
                event.preventDefault();
                panelHeading.forEach( (Item) => { 
                    Item = target.closest('.panel-collapse').previousElementSibling;
                    if (Item) {
                        panelHeading.forEach( (item, i) => {
                            if (item === Item) {
                                if (i < 3) {
                                    panelContent[++i].classList.toggle('in');
                                } else {
                                    return;
                                }
                                
                            }
                        });
                    }
                });
            } else {
                target = target.closest('.panel-heading');
                if(target) {
                    panelHeading.forEach((item, i) => {
                        if(item === target){
                            event.preventDefault();
                            toggleCollapse(i);
                        }
                    });
                }
            }
        });
    });
};

export default accordionOneTwo;

