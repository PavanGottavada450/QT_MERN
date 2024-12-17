// 3. Write a function that adds a new property (publisher) to an object and 
// updates an existing property (pages) with a new value?


let obj = {
    title : "naruto",
    author : "pavan",
    pages : 720,
    isRead : "Yes",
}

function fn(object){
    object.publisher = "me";
    object.pages = 700;

    return object;
}

console.log(fn(obj));