// Однострочный комментарий

/* Многострочный
коментарий */

// Горячие клавиши ctrl + "/"

// alert(''); Метод alert('') выводит модальное окошко и пока мы не нажмём "ОК" код JavaScript дальше выполняться не будет
/* console.log(2); Метод Console.log выводит нам информацию в консоль. Это ещё единственная команда которая мы можем запусать 
прямо в редакторе кода. При помощи плагина Code Runner выделяем кода, кликаем правой кнопкой мыши и нажимаем Run Code  тогда в 
редакторе кода мы видим что в консоль добавилась цифра 2*/

// Всегда закрываем строку ;

// Переменные
// Чтобы обьявления переменное мы пишем ключевое слово var после ключевого слова пишет индефикатор который являеться именем переменной

var Variable = 12;
var camelCase = 20; // В JavaScript привыкли писать типо camelCase, смысл в том, что начало пременное мишества с маленькой а все последующие слова с большой

// В современном стандарте появилось два новых слова var let const.
// var myHeight = 175;
// let myAge = 31; let очень похожа на var, но прокачанней которая избавляет нас от ошибок которые могли возникнуть при использовании var
// const pi = 3,14; const обьявляет константу, т.е. пременная которую нельзя менять

// var такой типо переменной ведна везде. Она занимает место в памяти сразу даже если ещё нет в ней данных и его можно распечать если заключить его в { } кудрявые скобки.
alert('Lets begin');
console.log("lesson01");

  let money = 1000;
  let income = 5000;
  let addExpenses = 700;
  let deposit = 300;
  let misson = 50000;
  let period = 5;

console.log("Variable:", money, income, addExpenses, deposit, misson, period);
console.log("lets do it");

// Git команда git init инициализирует новый пустой репозеторий и создал папку git
// Git команда git status показывает статус и отслеживаемые файлы
// Git команда git add index.html добавляет файл в отлеживаемые 
// Git команда git add "." ставим точку и таким образом добавляем все папки и всё содержимое в отлеживаемые 
// Git команда git commit -m комментим измения и сохраняем проект, по хэшу можно вернутся
// Git команда git diff используеться чтобы посмотерть что поменялось до и после сохранения
// Git команда git log показывает историю коммитов, мы можем увидеть автора, описание и специальный хэш с помощью которого можно возвращаться к старым комитам
// Git команда git show "номер хэша" показывает что именно мы сделали в данным период
// Git команда git chekout откатывает до нужной версии проекта или если ввести наствание файла то до предыдущей коммиту этого файла
// Git команда git chekout 5f7bd23257677ebf7f3f5603f2ec8f228f91d2db style/testcss.css откатывает нужный файл до указанного коммита
// Git команда git chekout 966dea3 откатывает проект до указанного коммита (хэш нашли через комманду git log --oneline)
// Git команда git log --oneline показывает коммиты в виде списка
// Git команда git log --oneline --all видно все коммиты из всех веток(сортировка по дате)
// Git команда git log --oneline --all --graph рисует нам график где мы можем увидеть отдельные ветки
// Git команда git checkout -b html_css (создание новой ветки) переходим и называем нашу ветку по типу разработчика, это веткой будет заведовать новый верстальщик например
// Git команда git push -u origin "название ветки(master)" отправляет вашу ветку на GitHub.com
// Git команда git pull lesson01 можем вытягивать файл из нашего проекта находясь на другом компьютере