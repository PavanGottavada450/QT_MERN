// 5. Write a function to find the length of an array without using the 
// length property. 


let arr = [1,2,3,4,5];
let length = 0;

for(let element of arr){
    length++;
}
console.log(length);