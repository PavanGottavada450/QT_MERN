// arr = [1,2,3,4,5];

// arr.push(6);

// arr.unshift(7);

// console.log(arr);

// console.log(x);
// const x =10;
// console.log(x);

function manideep(){
    console.log("manideep");
}

function hello(callback){
    console.log("hello");
    callback();
}

hello(manideep);