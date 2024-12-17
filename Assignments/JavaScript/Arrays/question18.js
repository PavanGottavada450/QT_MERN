// Write a program to find the product of all elements in an 
// array. 

let arr = [1,2,3,4,5,6];
let product = 1;

for(let i=0; i<arr.length; i++){
    product *= arr[i];
}

console.log(product);