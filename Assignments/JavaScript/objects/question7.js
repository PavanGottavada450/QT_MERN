
const student = {
    name : 'Alex',
    address : {city : 'New York',zip:'10001'},
    subjects : ['Math','Science']
};


function fn(object,key){
    console.log(`City : ${student.address.city}`);
    student.subjects.push(key);
    return object;
}

console.log(fn(student,"history"));
