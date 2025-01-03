const catalog = [
    {
        id: 101,
        name: 'Laptop',
        details: { price: 1000, stock: 5 },
    },
    {
        id: 102,
        name: 'Phone',
        details: { price: 500, stock: 10 },
    },
];

catalog.forEach((item) => {
    if(item.name === "Phone") {
        item.details.stock = 15;
    }
});


console.log(catalog);
