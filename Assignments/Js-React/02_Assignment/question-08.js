const inventory = [
    {
        category: 'Electronics',
        items: ['Laptop', 'Phone', 'Tablet'],
    },
    {
        category: 'Furniture',
        items: ['Table', 'Chair'],
    },
];

function fn(inventory,itemToRemove){
    return inventory.map((entry) => ({
        ...entry,
        items: entry.items.filter((item) => item !== itemToRemove),
    }))
}

console.log(fn(inventory, 'Tablet'));
