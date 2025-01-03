const projects = [
    {
        name: 'Website',
        tasks: ['Design', 'Develop', 'Test'],
    },
    {
        name: 'App',
        tasks: ['Plan', 'Build'],
    },
];

let count = 0

projects.map((Element)=> 
    Element.tasks.map((task)=> count ++));

console.log(count);
