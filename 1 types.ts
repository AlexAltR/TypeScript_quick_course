//Work with types
const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello, world'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
//OR
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'TypeScript']

//Tuple переводится как кортеж - массив из разных типов данных
const contact: [string, number] = ['Alex', 12341324]

//Any - динамический тип данных. Позволяет изменять тип переменной
let variable: any = 32
//После объявления типа any, можем изменять данные
variable = 'New string'
variable = []

//Задаем тип данных функции и ее аргументам
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Alex')

// Тип Never - задается в двух случаях
// 1 Когда функция возвращает ошибку и никогда не закансивает свое выполнение
// 2 Либо когда постоянно что-то делает
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

// Type - конструкция, которая позволяет создавать свои собственные типы
type Login = string // Создали новый примитивный тип данных Login со значением string

const login: Login = 'admin' // Применили тип данных
// const login1: Login = 123 

type ID = string | number // Создаем неявный тип данных
const id1: ID = 1254
const id2: ID = '1234'
// const id3: ID = true

// Также есть типы null и undefined
type someType = string | null | undefined



