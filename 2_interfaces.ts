// Интерфейсы - тип, который создается для объектов или для классов, где мы указываем, 
// какие свойства, какие методы, должны присутствовать у этих элементов

// Создаем интерфейс
interface Rect {
    readonly id: string // модификатор readonly - означает, что данное свойство нельзя изменять оно только для чтения
    color?: string // ? - вопрос означает, что данный параметр не обязателен
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '54625',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = 'black'
// rect2.id = 3243

const rect3 = {} as Rect // Создали объект и строго привели его к типу Rect. Теперь rect3 будет считаться типом Rect
//OR
const rect4 = <Rect>{}

// ========================
// Наследование интерфейсов


interface ReactWithArea extends Rect {
    getArea: () => number   // Реализуем функцию, которая будет считать функцию данной фигуры
}

// Создаем объек с интерфесом ReactWithArea
const rect5: ReactWithArea = {
    id: '213',
    size: {
        width: 20,
        height: 15
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// =============================
// Взаимодействие интерфейса с классом
interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ======================
// Ситуация: необходимо создать интерфейс для объекта, у которого будет большое кол-во динамических ключей

interface Style {
    [key: string]: string // Тип ключа: значение типа данных
}

const css: Style = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}