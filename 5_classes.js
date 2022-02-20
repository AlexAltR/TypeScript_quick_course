var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Стандартный способ записи классов в JavaScript
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[".concat(name, "]: TypeScript version is ").concat(this.version);
    };
    return Typescript;
}());
// Отличия записи класса в TypeScript
// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//     constructor(theModel: string){
//         this.model = theModel // Мы можем перезаписать поле model с модификатором "readonly", только внутри конструктора 
//     }
// }
// Более лаконичная запись
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
// Модификаторы в TypeScript
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
        this.go();
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
// ================================
// Абстрактные классы - это класс, от которого можно наследовать другие классы, но нельзя создавать инстансы этого класса.
// Абстрактные классы могут иметь абстрактные методы. Абстрактные методы - это методы, у которых объявлена сигнатура, но не объявлено тело метода.
// Абстрактные методы стоит воспринимать как интерфейс
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppConponent = /** @class */ (function (_super) {
    __extends(AppConponent, _super);
    function AppConponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppConponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppConponent.prototype.info = function () {
        return 'This is info';
    };
    return AppConponent;
}(Component));
