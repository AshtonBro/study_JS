'use strict';
// создаём класс
class SliderCarousel{
    constructor({
        main, 
        wrap, 
        next,
        prev,
        infinity = false,
        position = 0,
        sliderToShow = 3,
        responsive = []
    
    }){
        if(!main || !wrap){
            console.warn('slider-carusel: необходимо 2 свойства, "main" и "wrap"!');
        }
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.sliderToShow = sliderToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100/ this.sliderToShow),
            maxPosition: this.slides.length - this.sliderToShow
        };
        this.responsive = responsive;
    }

    init(){

        this.addGloClass();
        this.addStyle();

        if(this.prev && this.next){
            this.controlSlider();
        }else{
            this.addArow();
            this.controlSlider();
        }
        if(this.responsive){
            this.responseInit();
        }
        

    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for( const item of this.slides){
            item.classList.add('glo-slider__item');
        }
    }

    addStyle(){
        let style = document.getElementById('sliderCarusel-style');

        
        if(!style){
   style = document.createElement('style');
        style.id = 'SliderCarousel-style';
        }
     
    
        style.textContent = `
        .glo-slider {
            overflow: hidden !important; 
        }

        .glo-slider__wrap {
            display: flex !important;
            transition: transform 0.5s !important;
            will-chang: transform !important;
        }

        .glo-slider__item {
            display: flex !important;
            aligne-items: center;
            justify-content: center;
            flex: 0 0 ${this.options.widthSlide}% !important;
            margin: auto 0 !important;
        }
        `;
        document.head.appendChild(style);
    }

    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){
        if(this.options.infinity || this.options.position > 0){
        --this.options.position;
        if(this.options.position < 0){
            this.options.position = this.options.maxPosition;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
       }
    }

    nextSlider(){
        if(this.options.infinity || this.options.position < this.options.maxPosition){
        ++this.options.position;
        if(this.options.position > this.options.maxPosition){
            this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    addArow(){
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');
        style.textContent = `
            .glo-slider__prev,
            .glo-slider__next{
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
            }

            .glo-slider__next {
                border-left-color: #19b5fe
            }

            .glo-slider__prev {
                border-right-color: #19b5fe
            }

            .glo-slider__prev:hover,
            .glo-slider__next:hover,
            .glo-slider__prev:focus,
            .glo-slider__next:focus{
                background: transparent;
                outline: transparent
            }
        `;

        document.head.appendChild(style);

    }

    responseInit(){
        const sliderToShowDefault = this.sliderToShow;
        const allRespone = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allRespone);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if(widthWindow < maxResponse){
                for(let i = 0; i < allRespone.length; i++){
                    if(widthWindow < allRespone[i]){
                    this.sliderToShow = this.responsive[i].sliderToShow;
                    this.options.widthSlide = Math.floor(100 / this.sliderToShow);
                    this.addStyle();
                    }
                }
                }else{
                this.sliderToShow = this.sliderToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.sliderToShow);
                this.addStyle();
            }
        };

    checkResponse();

    document.addEventListener('resize', checkResponse);
    }

}