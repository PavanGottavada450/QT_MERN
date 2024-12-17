// 2. Create an array of 5 numbers and find their average. 

let arr = [1,2,3,4,5];
let sum = 0;
let average;

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}

average = sum / arr.length;

console.log(average);