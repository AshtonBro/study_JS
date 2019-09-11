'use strict';

let money,
    start = function() {
    do {
    money = prompt('Каковы твои доходы?', 50000);
    }
    while(isNaN(money) || money === '' || money === null || money.includes(' ')); 
};
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 500000,
  period: 11,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
// Задаём методы и функции
  
// Asking
asking: function() {
  if (confirm('Есть ли у вас дополнительный источник заработока ?')) {
  
  let itemIncome;
  do {
    itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
  }
  while(!isNaN(itemIncome) ||  itemIncome === undefined || itemIncome.includes(' '));

  let cashIncome;
  do { 
    cashIncome = +prompt('Сколько в месяц зарабатываешь на этом ?', 25000);
    } while(isNaN(cashIncome) || cashIncome === 0 || cashIncome === null);
    appData.income[itemIncome] = cashIncome;
  }

  appData.deposit = confirm('Есть ли у вас депозит в банке?');

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      do { 
        appData.addExpenses[i] = prompt('Введите обязательную статью раcходов', 'кошка');
      } while(!isNaN(appData.addExpenses) ||  appData.addExpenses === undefined || appData.addExpenses.includes(' '));
    }
    if (i === 1) {
     do { 
      appData.addExpenses[i] = prompt('Введите ещё обязательную статью раcходов', 'квартплата');
      } while(!isNaN(appData.addExpenses[i]) || appData.addExpenses[i] === undefined || 
      appData.addExpenses[i].includes(' '));
    }
    
    let priceIncome;
    do { 
    priceIncome = +prompt('Во сколько это обойдется ?', 2500);
    } while(isNaN(priceIncome) || priceIncome === 0 || priceIncome === null); 
    appData.expenses[appData.addExpenses[i]] = priceIncome;
  }
  
},

// GetExpensesMonth
getExpensesMonth: function () {

  for (let key in this.expenses) {
    appData.expensesMonth += appData.expenses[key];
  }
    
  console.log('Расходы за месяц: ', appData.expensesMonth);
},

// getBudget
getBudget: function() {
  appData.budgetMonth =  money - appData.expensesMonth;
  appData.budgetDay = appData.budgetMonth / 30;
},

// GetTargetMonth
getTargetMonth: function() {
  let Target = appData.mission / appData.budgetMonth;
  if (Target < -Target) {
    console.log('Цель не будет достигнута: ', Math.floor(Target));
  }
  console.log('Cрок достижения цели в месяцах: ', Math.floor(Target));
},

// GetStatusIncome
getStatusIncome: function() {

  if (appData.budgetDay >= 800) {
      return('Высокий уровень дохода');
        
    } else if (appData.budgetDay >= 300 && appData.budgetDay < 300) {
      return('Средний уровень дохода');
        
    } else if (appData.budgetDay >= 0) {
       return('Низкий уровень дохода');
        
    } else if (appData.budgetDay < -appData.budgetDay) {
      return('Что-то пошло не так');

    } else {
      return('Некорректный ввод');
    }
  },
    
// GetInfoDeposit
getInfoDeposit: function() {
  if(appData.deposit) {
   do {
     appData.percentDeposit = +prompt('Какой годовой процент ?', 10);
   }
   while(isNaN(appData.percentDeposit) || appData.percentDeposit === 0 || appData.percentDeposit === null);
   do {
     appData.moneyDeposit = +prompt('Какая сумма задожена ?', 10000);
   }
   while(isNaN(appData.moneyDeposit) || appData.moneyDeposit === 0 || appData.moneyDeposit === null);
    
  }
},

//CalcSavedMoney
calcSavedMoney: function() {
  return appData.budgetMonth * appData.period;
},

//AddToUpperCaseForFirstChar
AddToUpperCaseForFirstChar: function() {
    let result = ("");
    for (let i = 0; i < appData.addExpenses.length; i++) {
      let Element = appData.addExpenses[i];
      let FirstElement = Element.substring(0, 1).toUpperCase();
      let lastElement = Element.substring(1, Element.length);
      //конкатенация строк
      result += FirstElement + lastElement + ", ";
    }
    console.log('В строке с большой буквы: ', result);
}
  
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
console.log(appData.getStatusIncome());
appData.getInfoDeposit();
appData.calcSavedMoney();
appData.AddToUpperCaseForFirstChar();

// for(let key in appData) {
//   console.log('Наша программа включает в себя данные: ', appData[key]);
// }


