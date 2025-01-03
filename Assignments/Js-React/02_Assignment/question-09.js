const employees = [
    {
        name: 'Alice',
        details: { salary: 50000, role: 'Developer' },
    },
    {
        name: 'Bob',
        details: { salary: 75000, role: 'Manager' },
    },
];

function fn(array){
    return array.reduce((prev, current)=>
        prev.details.salary > current.details.salary ? prev : current
    )
}

console.log(fn(employees));

