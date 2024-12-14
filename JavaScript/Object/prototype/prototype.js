const person = {
    name : "Elon"
}

Object.setPrototypeOf(person,{age : 23 } );
// person.__proto__.age = 25
console.log(person.age);
console.log(person);