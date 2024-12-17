// 5.Create an object representing a user and write a function to delete a 
// specific property (e.g., password)? 


let user = {
    name : "pavan",
    password : "pavan@123",
    email : "pavan@gmail.com",
    gender : "male",
}

function fn(object,key){
    delete object[key];
    return object;
}

console.log(fn(user,"password"));