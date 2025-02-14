const user = { name: "Alice", age: 25, city: "New York" }; 
console.log(countProperties(user)); 



function countProperties(user){
    var count = 0
    for(const key in user){
        count++;
    }
    return count;
}