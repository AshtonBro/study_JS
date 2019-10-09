class CalculatorAccordion {
  constructor (){
    this.chbIsSingle = document.getElementById('myonoffswitch');
    this.chbIsBottom = document.getElementById('myonoffswitch-two');
    this.isHidden = document.querySelectorAll('.second-will');
    this.totalResult = document.getElementById('calc-result');
    this.selectors = [...document.querySelectorAll('select')];
    this.inputs = document.querySelectorAll('input');
    window.globalObj = {};
    this.data = {
      "сумма" : 0,
      "Тип септика" : "",
      "Расстояние до дома" : 0,
      "Диаметр" : "",
      "Диаметр второго": "",
      "Количество колец" : "",
      "Количество колец второго" : "",
      "Наличие днища" : ""
    };
  }

  calcSection1() {
    if (this.chbIsSingle.checked) {
      this.data['сумма'] = +10000;
      this.isHidden.forEach( item => item.classList.add('hidden'));
      this.data['Тип септика'] = 'Однокамерный';
    } else if (!this.chbIsSingle.checked) {
      this.data['сумма'] = +15000;
      this.isHidden.forEach( item => item.classList.remove('hidden'));
      this.data['Тип септика'] = 'Двухкамерный';
    } 
  }

  calcSection2() {
    let isTwo = !this.chbIsSingle.checked;
    let diametrProcent = 0;
    if (this.selectors[0].value == 0) {
      this.data['Диаметр'] = '1.4 метра';
    }
    if (this.selectors[0].value == 1 ){
      diametrProcent += 0.2;
      this.data['Диаметр'] = '2 метра';
    }
    if(isTwo && this.selectors[2].value == 0) {
      this.data['Диаметр второго'] = '1.4 метра';
    }
    if(isTwo && this.selectors[2].value == 1) {
      diametrProcent += 0.2;
      this.data['Диаметр второго'] = '2 метра';
    }
    this.data['сумма'] += this.data['сумма'] * diametrProcent;

    let ringsProcent = 0;

    if (this.selectors[1].value == 0){
      this.data['Количество колец'] = '1 штуки';
    }
    if (this.selectors[1].value == 1){
      ringsProcent += 0.3;
      this.data['Количество колец'] = '2 штуки';
    } else if (this.selectors[1].value == 2){
      ringsProcent += 0.5;
      this.data['Количество колец'] = '3 штуки';
    }
    if(isTwo) {
      if (this.selectors[3].value == 0){
        this.data['Количество колец второго'] = '1 штука';
      }
      if (this.selectors[3].value == 1){
        ringsProcent += 0.3;
        this.data['Количество колец второго'] = '2 штуки';
      } else if (this.selectors[3].value == 2){
        ringsProcent += 0.5;
        this.data['Количество колец второго'] = '3 штука';
      }
    }
    this.data['сумма'] += this.data['сумма'] * ringsProcent;
   
  }

  calcSection3() {
    let isTwo = !this.chbIsSingle.checked;
    let isFilterSelected = this.chbIsBottom.checked;
    if(isFilterSelected) {
      this.data['сумма'] += 1000;
      this.data['Наличие днища'] = 'Да';
      if(isTwo) {
        this.data['сумма'] += 1000;
        this.data['Наличие днища'] = 'Да';
      }
    } else {
      this.data['Наличие днища'] = 'Нет';
    }
  }

  calculateAll() {
    this.data['сумма'] = 0;
    this.calcSection1();
    this.calcSection2();
    this.calcSection3();
    this.data['Расстояние до дома']  = +this.inputs[5].value + ' метров';
    this.totalResult.value = 'примерная стоимость: ' + this.data['сумма'];
    window.globalObj = this.data;
  }

  init() {
    this.chbIsSingle.checked = false; 
    this.chbIsBottom.checked = false;
    
    this.chbIsSingle.addEventListener('change', this.calculateAll.bind(this));
    for (let i = 0; i < this.selectors.length; i++) {
      this.selectors[i].addEventListener('change', this.calculateAll.bind(this));
    }
    this.chbIsBottom.addEventListener('change', this.calculateAll.bind(this));
    this.inputs[5].addEventListener('change', this.calculateAll.bind(this));
  }

}

export default CalculatorAccordion;