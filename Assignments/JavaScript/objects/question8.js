// 8. Write a function to create a shallow copy and a deep copy of the 
// following object:

const person = {
    name:'Alice',
    details: {
        age: 30,
        city: 'Hyderabad'
    }
};

function fn(object){
    const shallowCopy = {...object};

    const deepCopy = JSON.parse(JSON.stringify(object));

    return {shallowCopy,deepCopy};
}

const { shallowCopy, deepCopy } = fn(person);

console.log('original', person);
console.log('Shallow Copy', shallowCopy);
console.log('Deep Copy', deepCopy);

person.details.city = 'Mumbai';

console.log('\n After modifiying the original object \n')
console.log('Original', person);
console.log('Shallow Copy', shallowCopy);
console.log('Deep Copy', deepCopy);