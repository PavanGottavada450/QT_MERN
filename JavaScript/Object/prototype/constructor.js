function Person(fName, lName){
    this.firstName = fName,
    this.lastName = lName
}

Person.prototype.gender = "Male";

const object1 = new Person("Elon","Musk");
const object2 = new Person("Bill","Gates")

console.log(object1.gender);


Person.prototype.getname = function(){
    return this.firstName + " " + this.lastName
};

console.log(object1.getname());
console.log(object2.getname());


