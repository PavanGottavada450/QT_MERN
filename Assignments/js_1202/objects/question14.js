const projects = [ 
    { 
      project: 'Website', 
      tasks: [ 
        { task: 'Design', assignedTo: 'Alice' }, 
        { task: 'Code', assignedTo: 'Bob' }, 
      ], 
    }, 
    { 
      project: 'App', 
      tasks: [ 
        { task: 'Develop', assignedTo: 'Alice' }, 
        { task: 'Test', assignedTo: 'Charlie' }, 
      ], 
    }, 
  ]; 



  const aliceTasks = projects.flatMap(p => p.tasks).filter(t => t.assignedTo === "Alice");

  console.log(aliceTasks);
  