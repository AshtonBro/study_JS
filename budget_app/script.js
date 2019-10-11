'use strict';

const start = document.getElementById('start'),
      cancel = document.getElementById('cancel'),
      buttonsPlus = document.getElementsByTagName('button'),
      incomePlus = buttonsPlus[0],
      expensesPlus = buttonsPlus[1],
      additionIncomeItem = document.querySelectorAll('.additional_income-item'),
      depositCheck = document.querySelector('#deposit-check'),
      allRightCollumn = document.getElementsByClassName('result-total'),
      budgetDayValue = allRightCollumn[1],
      budgetMonthValue = allRightCollumn[0],
      expensesMonthValue = allRightCollumn[2],
      additionalIncomeValue = allRightCollumn[3],
      additionalExpensesValue = allRightCollumn[4],
      incomePeriodValue = allRightCollumn[5],
      targetMonthValue = allRightCollumn[6],
      salaryAmount = document.querySelector('.salary-amount'),
      expensesTitle = document.querySelector('.expenses-title'),
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      periodSelect = document.querySelector('.period-select'),
      targetAmount = document.querySelector('.target-amount'),
      incomeTitle = document.querySelector('.income-title'),
      periodAmount = document.querySelector('.period-amount'),
      imputs = document.querySelectorAll('input'),
      depositBank = document.querySelector('.deposit-bank'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent'),
      expensesItems = document.querySelectorAll('.expenses-items'),
      incomeItems = document.querySelectorAll('.income-items');

class AppData {
 constructor(){
 this.budget = 0;
 this.income = {};
 this.incomeMonth = 0;
 this.addIncome = [];
 this.expenses = [];
 this.addExpenses = [];
 this.deposit = false;
 this.depositPercent = 0;
 this.moneyDeposit = 0;
 this.budgetDay = 0;
 this.budgetMonth = 0;
 this.expensesMonth = 0;
 }

start() {
 if(salaryAmount.value === ''){
  alert('Поле "Месячный доход" должны быть заполнено!');
  return;
 }
 if(isNaN(salaryAmount.value) || salaryAmount.value === 0 || salaryAmount.value === null) {
  alert('Поле: Месячный доход! \n Только цифры!');
  salaryAmount.value = '';
  return;
 }

 this.budget = +salaryAmount.value;

 this.getExpenses();
 this.getIncome();
 this.getExpensesMonth();
 this.getInfoDeposit();
 this.getBudget();
 this.getAddExpInc();
 this.showResult();
 this.blocked();
 this.setLocalStorage();
}

showResult() {
 const _this = this;
 budgetDayValue.value = Math.ceil(this.budgetDay);
 budgetMonthValue.value = this.budgetMonth;
 expensesMonthValue.value = this.expensesMonth;
 additionalExpensesValue.value = this.addExpenses.join(', ');
 additionalIncomeValue.value = this.addIncome.join(', ');
 targetMonthValue.value = Math.ceil(this.getTargetMonth());
 incomePeriodValue.value = _this.calcSavedMoney();
}

setLocalStorage() {
  const map = new Map();
  const _this = this;
  localStorage.setItem('Доход за месяц', this.budgetMonth);
  localStorage.setItem('Дневной бюджет', this.budgetDay);
  localStorage.setItem('Расход за месяц', this.expensesMonth);
  localStorage.setItem('Возможные доходы', this.addIncome);
  localStorage.setItem('Возможные расходы', this.addExpenses);
  localStorage.setItem('Срок достижения цели в месяцах', Math.ceil(this.getTargetMonth()));
  localStorage.setItem('Накопления за период', _this.calcSavedMoney());
  
}

onAddbuttonClick(e) {
 let parent = e.target.parentNode;
 const cloneIncomeItems = parent.children[1].cloneNode(true);
 parent.insertBefore(cloneIncomeItems,e.target);
 cloneIncomeItems.querySelectorAll('input').forEach((item) => {
  item.value = '';
 });
 if(parent.children.length === 5){
  e.target.style.display = 'none';
 } 
}

getExpenses() {
 document.querySelectorAll('.expenses-items').forEach((item) => {
  let itemExpenses = item.querySelector('.expenses-title').value;
  let cashExpenses = +item.querySelector('.expenses-amount').value;
  if (itemExpenses !== '' && cashExpenses !== '') {
    this.expenses[itemExpenses] = cashExpenses;
  }
 });
}

getIncome() {
 document.querySelectorAll('.income-items').forEach(() => {
  let itemIncome = document.querySelector('.income-title').value;
  let cashIncome = +document.querySelector('.income-amount').value;
    if(itemIncome !== '' && cashIncome !== '') {
      this.income[itemIncome] = cashIncome;
      this.incomeMonth += cashIncome;
    }
 });
}

getAddExpInc() {
 if(additionalExpensesItem.value !== '') {
 let addExpenses = additionalExpensesItem.value.split(',');
 const _this = this;
  addExpenses.forEach((item) => {
  item = item.trim();
    if (item !== '') {
    _this.addExpenses.push(item);
    }
  });
 }
 if(additionIncomeItem !== '') {
 additionIncomeItem.forEach((item) => {
  let itemValue = item.value.trim();
  if (itemValue !== '') {
    this.addIncome.push(itemValue);
  }
  });
 }

 // AppData.prototype.getAddExpenses = function(){
 //   const parts = additionalExpensesItem.value.split(',');
 //   this.addExpenses.push(...parts.filter(f => f.trim.length > 0));
 // };

 // AppData.prototype.getAddIncome = function(){
 //   const parts = additionIncomeItem.select(f => f.value);
 //   this.addIncome.push(...parts.filter(f => f.trim.length > 0));
 // };
}

getPeriodSelect(event) {
 const _this = this;
 periodSelect.addEventListener('change', () => {
  incomePeriodValue.value = _this.calcSavedMoney();
  periodAmount.textContent = event.target.value;
 });
}

blocked() {
 start.style.display = 'none';
 cancel.style.display = 'block';
 additionalExpensesItem.disabled = true;
 document.querySelectorAll('.data input[type = text]').forEach((item) => {
  item.disabled = true;
 });
 
}

reset() {
 this.budget = 0;
 this.income = {};
 this.incomeMonth = 0;
 this.addIncome = [];
 this.expenses = [];
 this.addExpenses = [];
 this.percentDeposit = 0;
 this.moneyDeposit = 0;
 this.budgetDay = 0;
 this.budgetMonth = 0;
 this.expensesMonth = 0;

 document.querySelectorAll('.data input[type = text]').forEach((item) => {
  item.disabled = false;
  periodSelect.value = '0';
  periodAmount.innerHTML = periodSelect.value;
 });
 document.querySelectorAll('input[type = text]').forEach((item) => {
  item.value = '';
 });

 document.querySelectorAll('.result input[type = text]').forEach((item) =>{
  item.value = '';
 });

 const incomTems = document.querySelectorAll('.income-items');
 for (let i = 1; i <= incomTems.length - 1; i++){
  incomTems[i].remove();
 }

 const expensesTems = document.querySelectorAll('.expenses-items');
 for (let i = 1; i <= expensesTems.length - 1; i++){
   expensesTems[i].remove();
 }

 start.style.display = 'block';
 cancel.style.display = 'none';
 incomePlus.style.display = 'block';
 expensesPlus.style.display = 'block';
}

getExpensesMonth() {
 for (let key in this.expenses) {
  this.expensesMonth += this.expenses[key];
 }
}

getBudget() {
 this.budgetMonth = Math.ceil(this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12);
 this.budgetDay = this.budgetMonth / 30;
}

getTargetMonth() {
 return targetAmount.value / this.budgetMonth;
}

getStatusIncome() {
 if (this.budgetDay >= 800) {
    return('Высокий уровень дохода');
  } else if (this.budgetDay >= 300 && this.budgetDay < 300) {
    return('Средний уровень дохода');
  } else if (this.budgetDay >= 0) {
    return('Низкий уровень дохода');
  } else if (this.budgetDay < -this.budgetDay) {
    return('Что-то пошло не так');
  } else {
    return('Некорректный ввод');
  }
}

getInfoDeposit() {
 if(this.deposit) {
  this.percentDeposit = depositPercent.value;
  this.moneyDeposit = depositAmount.value;
 }
}

calcSavedMoney() {
 return this.budgetMonth * periodSelect.value;
}

AddToUpperCaseForFirstChar() {
 const _this = this;
 let result = ("");
 for (let i = 0; i < _this.addExpenses.length; i++) {
  let Element = _this.addExpenses[i];
  let FirstElement = Element.substring(0, 1).toUpperCase();
  let lastElement = Element.substring(1, Element.length);
  result += FirstElement + lastElement + ", ";
 }
}

eventListeners() {
 start.addEventListener('click', this.start.bind(this));

 expensesPlus.addEventListener('click', this.onAddbuttonClick.bind(this));
 incomePlus.addEventListener('click', this.onAddbuttonClick.bind(this));
 periodSelect.addEventListener('change', this.getPeriodSelect.bind(this));
 cancel.addEventListener('click', this.reset.bind(this));

 depositCheck.addEventListener('change', function() {
  if(depositCheck.checked) {
   depositBank.style.display = 'inline-block';
   depositAmount.style.display = 'inline-block';
   depositPercent.removeAttribute('disabled');
   appData.deposit = 'true';
   depositBank.addEventListener('change', function() {
   let selectIndex = this.options[this.selectedIndex].value;
    if (selectIndex === 'other'){
     depositPercent.style.display = 'inline-block';
     depositPercent.value = '';
    } else {
     depositPercent.style.display = 'none';
     depositPercent.value = selectIndex;
    }
    });
    } else {
     depositBank.style.display = 'none';
     depositAmount.style.display = 'none';
     depositAmount.value = '';
     appData.deposit = 'false';
    }
 });
}




}

const appData = new AppData();
appData.eventListeners();
console.log('appData: ', appData);
