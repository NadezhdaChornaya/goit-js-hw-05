// Напиши класс Car с указанными свойствами и методами.
class Car {
    constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;

    }
    /*
    * Конструктор получает объект настроек.
    *
    * Добавь свойства будущеего экземпляра класса:
    *  speed - текущая скорость, изначально 0
    *  price - цена автомобиля
    *  maxSpeed - максимальная скорость
    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
    *  distance - общий киллометраж, изначально 0
    */
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */
    static getSpecs(car) {
        return car;
    }

    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
    get newPrice() {
        return this.price
    }
    set newPrice(value) {
        this.price = value;
    }

    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this.isOn = true;
        return this.isOn;
    }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            this.speed = 0;
        }
        return this.isOn, this.speed;
    }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        if (this.speed + value < this.maxSpeed) {
            this.speed = this.speed + value;
            return this.speed
        }
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        if (this.speed - value > 0) {
            this.speed = this.speed - value;
            return this.speed
        }
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if (this.isOn) {
            this.distance = this.speed * hours;
            return this.distance;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });



mustang.turnOn();

mustang.accelerate(50);

mustang.drive(2);


Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
