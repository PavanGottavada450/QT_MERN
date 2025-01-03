const departments = [
    {
        name: 'HR',
        employees: ['Alice', 'Bob'],
    },
    {
        name: 'IT',
        employees: ['Charlie', 'David'],
    },
];


const allEmployees = departments.reduce((acc,department) => acc.concat(department.employees),[])


console.log(allEmployees);
