const employees = [ 
    { 
      id: 1, 
      name: 'Alice', 
      details: { 
        salary: 50000, 
        role: 'Developer', 
      }, 
    }, 
    { 
      id: 2, 
      name: 'Bob', 
      details: { 
        salary: 60000, 
        role: 'Manager', 
      }, 
    }, 
  ]; 


//   for (let i=0; i<employees.length ; i++){
//     if(employees[i].name === "Bob"){
//         employees[i].details.salary = 75000;
//     }
//   }

//   console.log(employees);


employees.forEach(employee => {
    if(employee.name === "Bob"){
        employee.details.salary = 75000;
    }
});
  
console.log(employees);
