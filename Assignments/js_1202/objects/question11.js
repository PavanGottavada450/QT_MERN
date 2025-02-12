const companies = [ 
    { 
      id: 1, 
      name: 'TechCorp', 
      details: { 
        address: { 
          street: '123 Elm St', 
          city: 'New York', 
        }, 
      }, 
    }, 
    { 
      id: 2, 
      name: 'SoftSystems', 
      details: { 
        address: { 
          street: '456 Pine St', 
          city: 'San Francisco', 
        }, 
      }, 
    }, 
  ];


//   for(let i=0; i < companies.length ; i++){
//     if(companies[i].name === "TechCorp"){
//         console.log(companies[i].details.address.city);
        
//     }
//   }


companies.forEach(company => {
    if(company.name === "TechCorp"){
        console.log(company.details.address.city);
        
    }
});


// console.log(companies[0].details.address.city);


// const [arr1, arr2] = companies;
// const {details:{address:{city}}} = arr1;


// console.log(city);
