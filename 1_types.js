//Work with types
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello, world';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
//OR
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'TypeScript'];
//Tuple переводится как кортеж - массив из разных типов данных
var contact = ['Alex', 12341324];
//Any - динамический тип данных. Позволяет изменять тип переменной
var variable = 32;
//После объявления типа any, можем изменять данные
variable = 'New string';
variable = [];
//Задаем тип данных функции и ее аргументам
function sayMyName(name) {
    console.log(name);
}
sayMyName('Alex');
// Тип Never - задается в двух случаях
// 1 Когда функция возвращает ошибку и никогда не закансивает свое выполнение
// 2 Либо когда постоянно что-то делает
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin'; // Применили тип данных
var id1 = 1254;
var id2 = '1234';
