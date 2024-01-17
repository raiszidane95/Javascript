class Car {
    // engine;
    // tire;
    #counter = 0; // private property
    #engineStatus;

    constructor(engine, tire) {
        this.engine = engine;
        this.tire = tire;
    }

    get carProperty() {
        return `${this.engine}, ${this.tire}`;
    }

    set carProperty(value) {
        const result = value.split(",");
        this.engine = result[0];
        this.tire = result[1];
    }

    increment() {
        this.#counter++;
    }

    decrement() {
        this.#counter--;
    }

    getCounter() {
        return this.#counter;
    }

    #startEngine() {
        this.#engineStatus = "Engine Started!";
    }

}
// debugger;

const car = new Car("V8", "Michelin");

console.info(car.engine);
console.info(car.tire);
console.info(car.carProperty);

car.carProperty = "G6DG,Bridgestone"

console.info(car.engine);
console.info(car.tire)
console.info(car.carProperty);

car.increment(); // 1
car.decrement(); // 0
car.increment(); // 1
car.increment(); // 2
car.increment(); // 3

console.info(car.getCounter()); // 
