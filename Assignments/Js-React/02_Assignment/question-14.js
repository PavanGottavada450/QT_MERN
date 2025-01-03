const employees = [
    { name: 'Alice', details: { age: 25, role: 'Developer' } },
    { name: 'Bob', details: { age: 35, role: 'Manager' } },
];

function filterArray(employees){
    return employees.filter((Element)=> Element.details.age > 30);
}


console.log(filterArray(employees));
