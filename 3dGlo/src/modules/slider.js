const slider = () => {
// получаем элементы со страницы
    const slide = document.querySelectorAll('.portfolio-item'),
            portfolioContent = document.querySelector('.portfolio-content'), // Родитель слайдера
            btnAll = document.querySelectorAll('.portfolio-btn');
        let  portfolioDots = document.querySelector('.portfolio-dots');

// чтобы опредлеить какой именно слайд у нас на экране создадим переменну
    let currentSlide = 0,
        interval;

// Добавляем количество dot's равному кол-ву слайдов
    const addDot = () => {
        for(let i = 0; i < slide.length; i++){
            let dots = document.createElement('li');
            dots.classList.add('dot');
            portfolioDots.append(dots);
        }
    };
    addDot();
    let dot = document.querySelectorAll('.dot');

// смена класса будет происходит часто поэтому выносим их в отдельную функцию
    const prevSlide = (element, index, strClass) => {
        element[index].classList.remove(strClass);
    };

    const nextSlide = (element, index, strClass) => {
        element[index].classList.add(strClass);
    };

// Рализуем autoPlay для слайдера, чтобы он автоматически листал изображение
    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };
// переключение по стрелочкам
    portfolioContent.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if(target.matches('#arrow-right')){
            currentSlide++;
        }else if(target.matches('#arrow-left')){
            currentSlide--;
        }else if(target.matches('.dot')){
            dot.forEach((element, index) => {
                if(element === target){
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    });

    portfolioContent.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
            stopSlide();
        }
    });
    portfolioContent.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
            startSlide();
        }
    });

    startSlide(2500);

};

export default slider;