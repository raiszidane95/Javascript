function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.fullName = `${fName} ${lName}`;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, My name is ${this.fullName}`)
    }
}
const eko = new Person("Eko", "Khanedy");
const budi = new Person("Budi", "Darmawan");

console.log(eko.firstName + " " + eko.lastName)
eko.sayHello("Ariston")
console.log(budi.firstName + " " + budi.lastName)
budi.sayHello("Ariston")