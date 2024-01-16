// Destructuring Array and Object

// Destructuring Array
const names = ["Ariston", "Rais", "Zidane"];

const [fistname, middleName, lastName, ...others] = names;

console.log(fistname);
console.log(middleName);
console.log(lastName);
{
    debugger;
    // Destructuring object
    const person = {
        firstName: "Ariston",
        lastName: "Zidane",
        address: {
            street: "Nothing",
            city: "Salatiga"
        },
        hobby: "Do creative think"
    }
    let { firstName, lastName, address, ...others } = person;
    console.info(firstName);
    console.info(lastName);
    console.info(address.street);
    console.info(address.city);
    console.info(others.hobby);
}