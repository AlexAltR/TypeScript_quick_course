// Стандартный способ записи классов в JavaScript
class Typescript {
    version: string

    constructor(version: string){
        this.version = version
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

// Отличия записи класса в TypeScript
// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string){
//         this.model = theModel // Мы можем перезаписать поле model с модификатором "readonly", только внутри конструктора 
//     }
// }
// Более лаконичная запись
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string){}
}

// Модификаторы в TypeScript
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor(){
        this.go()
    }

    private go(){
        console.log('Go')
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const cat = new Cat()

cat.setVoice('test')
console.log(cat.color)

// ================================
// Абстрактные классы - это класс, от которого можно наследовать другие классы, но нельзя создавать инстансы этого класса.
// Абстрактные классы могут иметь абстрактные методы. Абстрактные методы - это методы, у которых объявлена сигнатура, но не объявлено тело метода.
// Абстрактные методы стоит воспринимать как интерфейс

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppConponent extends Component{
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info'
    }
}


