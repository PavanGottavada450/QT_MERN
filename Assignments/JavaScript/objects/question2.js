// 2. Write a function that takes an object and a property name as arguments   
// and returns the value of that property?


let obj = {
    title : "naruto",
    author : "pavan",
    pages : 720,
    isRead : "Yes",
}

function fn(object,property){
    return object[property];
}

console.log(fn(obj,"title"));