class Person {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHelloTo(name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const person1 = new Person("Ariston", "Rais");

console.info(person1.firstName); //  Output: Ariston
console.info(person1.lastName); // Output: Rais

person1.sayHelloTo("Rei");


