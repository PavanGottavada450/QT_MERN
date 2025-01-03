const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];



function removeArrayByName(products,item){
    return products.filter((Element) =>Element.name !== item)
}

console.log(removeArrayByName(products,"Phone"));
