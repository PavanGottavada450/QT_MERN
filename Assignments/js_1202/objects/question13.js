const team = [ 
    { 
      name: 'Alice', 
      skills: ['HTML', 'CSS', 'JavaScript'], 
    }, 
    { 
      name: 'Bob', 
      skills: ['Java', 'Spring Boot'], 
    }, 
  ];


  team.forEach(t =>{
    if(t.name === "Alice"){
        t.skills.push("Node.js");
    }
  });

  console.log(team);
  