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

const output = projects.flatMap((project)=> 
    project.tasks.filter((task) => task.assignedTo === 'Alice')
);

console.log(output);

