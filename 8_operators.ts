interface Person {
    name: string
    age: number
}

// Создаем свой тип, который будет состоять из ключей интерфейса Person

type PersonKeys = keyof Person // на выходе в типе PersonKeys будут храниться 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'
// key = 'hello'

// Создаем тип с данными и метаданными

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// Создадим новый тип на основе типа User и исключим из него некоторые поля
// 1 Способ
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // Передвигаемся по типу User с помощью оператора keyof и перечисляем, что нам нужно исключить
// 2 Способ
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // Указываем, какие поля нам необходимо забрать

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'