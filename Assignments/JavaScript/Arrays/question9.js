// 9. Implement a program to remove the first element from an array 
// without using shift().


let arr = [1,2,3,4,5];
let newArr = [];
for(let i=1; i<arr.length; i++){
    newArr.push(arr[i]);
}

console.log(newArr);