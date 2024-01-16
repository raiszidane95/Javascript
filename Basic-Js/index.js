const user = {
    "name": "Ariston Rais Zidane",
    "email": "raiszidane95@gmail.com",
    "address": "Argomulyo, Salatiga"
}

let data = null;
typeOfData = typeof data;
const names = ["Aris", "Ahmad", "Adi"]

// console.table(user);
// console.info(typeof data)
// console.info('')

// for (let index = 0; index < names.length; index++) {
//     const element = names[index];
//     console.info(element)
// }

for (let index = 0; index < 10; index++) {
    console.log("1")
}
names.map((name) => { console.log(name) });


function sayHello(firstName, lastName, fullName = firstName + " " + lastName) {
    console.log(fullName);
    console.log(firstName);
    console.log(lastName);
}


// Function on Variable
sayHello("Ariston", "Rais");

let say = sayHello;
say("Ariston", "Rais");

// Function on parameter
function giveTheName(callback) {
    callback("Ariston", "Rais");
}

console.log("------");
giveTheName(sayHello);

// Anonymous Function with no name

// with variable
let sayIt = function (name) {
    console.log(name);
}

sayIt("Foo Bar!")

// Anonymous function in Parameter

function getName(callback) {
    callback("My name is Rais")
}

getName(function (name) {
    console.log(`Haloo ${name}`)
})


function factorialRecursive(value) {
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1)
    }
}

console.warn(factorialRecursive(3));

// Arrow Function
const sayName = name => console.log(`Halo @${name}`);
sayName("Ariston");

// Arrow Function sebagai Parameter. 
function giveData(callback) {
    callback("Rais");
}

giveTheName(name => console.info(`Hello ${name}`));

// Getter Setter

const person = {
    firstName: "Rais",
    lastName: "Zidane",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
person.firstName = "Ariston"

console.log(person.fullName);