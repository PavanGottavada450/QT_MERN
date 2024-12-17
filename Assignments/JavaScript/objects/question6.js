// 6.Write a function to loop through all the keys in an object and log both the 
// key and value? 



let obj = {
    title : "naruto",
    author : "pavan",
    pages : 720,
    isRead : "Yes",
}

function fn(object){
    for(let key in object){
        console.log(`key : ${key} , value : ${object[key]}`);
    }
}

fn(obj);