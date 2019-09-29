const toggleMenu = () => {
    // получим элементы со страницы
        const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        body = document.querySelector('body');
    
    
        btnMenu.addEventListener('click', () => {
            menu.classList.add('active-menu');
        });
    
        body.addEventListener(('click'), (event) => {
        let target = event.target;
    
        if(target.closest('menu') && menu.classList.contains('active-menu')) { 
            if(target.tagName !== 'MENU') {
                if(target.tagName === 'A'){ 
                    menu.classList.remove('active-menu');
                }
            }
        } else if (!target.closest('menu') && !target.closest('.menu')) {
            menu.classList.remove('active-menu');
        }
    
    });
    
};

export default toggleMenu;