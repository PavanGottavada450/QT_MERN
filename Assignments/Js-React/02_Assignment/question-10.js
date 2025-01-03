const employees = [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Manager' },
    { name: 'Charlie', role: 'Developer' },
];

function groupByRole(employees){
    return employees.reduce((grouped, employee) =>{
        const {role} = employee;
        if(!grouped[role]){
            grouped[role] = [];
        }
        grouped[role].push(employee);
        return grouped;
    }, {});
}

console.log(groupByRole(employees));
