(() => {

    const $ = function(selector){
      const elem = document.querySelectorAll(selector);
  
      const obj = {
        hide(){
          elem.forEach(item => {
            item.style.display = 'none';
          });
          return this;
        },
        show(){
          elem.forEach(item => {
            item.style.display = '';
          });
          return this;
        },
        toggle(){
          elem.forEach(item => {
            if (item.style.display === 'none'){
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
          return this;
        },
        addClass(className){
          elem.forEach(item => {
            item.classList.add(className);
          });
          return this;
        },
        removeClass(className){
          elem.forEach(item => {
            item.classList.remove(className);
          });
          return this;
        },
        on(eventName, callBack){
          elem.forEach(item => {
            item.addEventListener(eventName, callBack);
          });
          return this;
        }
      };
  
      return obj;
    };
  
  
  
  
  
    window.$ = $;
  
  })();
  
  
  