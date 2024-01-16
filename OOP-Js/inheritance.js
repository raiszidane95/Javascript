class Animal {
    age = 0;
    race = "Unknown";
    constructor(age, race) {
        this.age = age;
        this.race = race;
    }
}

class Cat extends Animal {
    name;
    constructor(age, race, name) {
        super(age, race);
        this.name = name;
    }
}

const chibi = new Cat(1, "mixed", "Chibi");

console.info(chibi.name);
console.info(chibi.age);
console.info(chibi.race);