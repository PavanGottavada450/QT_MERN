// 4.Write a function that checks if a key exists in an object. Return true if it 
// exists, otherwise false?

let obj = {
    title : "naruto",
    author : "pavan",
    pages : 720,
    isRead : "Yes",
}

function fn(object,key){
    return key in object;
}

console.log(fn(obj,"title"));
console.log(fn(obj,"publisher"));