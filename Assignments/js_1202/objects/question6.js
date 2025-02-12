const product = { name: "Laptop", price: 1000, brand: "Dell" }; 

for (let key in product){
    console.log(`${key} : ${product[key]}`);
    
}