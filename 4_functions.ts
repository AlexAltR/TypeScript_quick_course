function add (a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

// =========================


interface MyPosition{
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition{
    default: string
}

// Создаем перегрузки
// Если функция ничего не будет получать, то вернет Interface - MyPosition
function position(): MyPosition
// Если функция получит одно число, то вернет Interface - MyPositionWithDefault
function position(a: number): MyPositionWithDefault
// Если функция получит два числа, то вернет Interface - MyPosition
function position(a: number, b: number): MyPosition

// Сама функция position
function position (a?: number, b?: number){
    if (!a && !b){
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(12, 15))