class CalculatorAccordion {
  constructor (){
    this.theWell = document.getElementById('myonoffswitch');
    this.theBottomCheck = document.getElementById('myonoffswitch-two');
    this.secondWill = document.querySelectorAll('.second-will');
    this.accordion = document.getElementById('accordion');
    this.expandAll = document.querySelectorAll('.expand');
    this.totalResult = document.getElementById('calc-result');
    this.selectAll = [...document.querySelectorAll('select')];
    this.inputs = document.querySelectorAll('input');
    
    this.body = {
      total: 0,
      whichSeptic: [],
      distanceToHome: 0
    };
  }

  calcSection1() {
    if (this.theWell.checked) {
      this.body.total = +10000;
      this.secondWill.forEach( item => item.classList.add('hidden'));
      this.body.whichSeptic.splice(0,1,'Однокамерный');
    } else if (!this.theWell.checked) {
      this.body.total = +15000;
      this.secondWill.forEach( item => item.classList.remove('hidden'));
      this.body.whichSeptic.splice(0,1,'Двухкамерный');
    } 
  }

  calcSection2() {
    let isTwo = !this.theWell.checked;
    let diametrProcent = 0;
    if (this.selectAll[0].value == 1 ){
      diametrProcent += 0.2;
    }
    if(isTwo && this.selectAll[2].value == 1) {
      diametrProcent += 0.2;
    }
    this.body.total += this.body.total * diametrProcent;
    let ringsProcent = 0;
    if (this.selectAll[1].value == 1){
      ringsProcent += 0.3;
    } else if (this.selectAll[1].value == 2){
      ringsProcent += 0.5;
    }
    if(isTwo) {
      if (this.selectAll[3].value == 1){
        ringsProcent += 0.3;
      } else if (this.selectAll[3].value == 2){
        ringsProcent += 0.5;
      }
    }
    this.body.total += this.body.total * ringsProcent;
  }

  calcSection3() {
    let isTwo = !this.theWell.checked;
    let isFilterSelected = this.theBottomCheck.checked;
    if(isFilterSelected) {
      this.body.total += 1000 * (isTwo + 1);
    }
  }

  saveSection4() {
    this.distanceToHome = this.inputs[5].value;
  }

  calculateAll() {
    this.body.total = 0;
    this.calcSection1();
    this.calcSection2();
    this.calcSection3();
    this.totalResult.value = this.body.total;
  }

  init() {
    this.theWell.checked = false; 
    this.theBottomCheck.checked = false;
    
    this.theWell.addEventListener('change', this.calculateAll.bind(this));
    for (let i = 0; i < this.selectAll.length; i++) {
      this.selectAll[i].addEventListener('change', this.calculateAll.bind(this));
    }
    this.theBottomCheck.addEventListener('change', this.calculateAll.bind(this));
    this.inputs[5].addEventListener('input', this.saveSection4.bind(this));
  }

}

export default CalculatorAccordion;