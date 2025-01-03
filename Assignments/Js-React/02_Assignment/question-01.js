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

const output = companies[0].details.address.city;

console.log(output);
