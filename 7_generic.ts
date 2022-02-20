// generic type

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Alex']

function reverse<T>(array: T[]): T[]{ // T - некоторый generic тип, который будет подстраиваться под передеваемый тип данных функции
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)