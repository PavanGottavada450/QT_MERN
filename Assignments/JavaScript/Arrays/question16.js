// Write a program to find the sum of the elements at odd 
// indices of an array.

let arr = [0,1,2,3,4,5,6,7,8,9];
let sum = 0;

for(let i=1; i<arr.length; i+=2){
    sum += arr[i];
}

console.log(sum);