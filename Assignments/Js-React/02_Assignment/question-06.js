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

function product(catalog,price){
    return catalog.find((product)=> product.details.price === price);
}

console.log(product(catalog,500));
