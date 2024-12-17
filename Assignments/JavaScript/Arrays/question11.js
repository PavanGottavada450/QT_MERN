// Write a program to find the difference between the largest 
// and smallest numbers in an array.

let arr = [1,5,2,6,3,8,4];

arr.sort();

let diff = arr[arr.length-1] - arr[0];

console.log(diff);
