// Implement a program to remove duplicates from an array.

let arr = [1,3,4,2,3,4,5,2];

let newArr = [];

for(let i=0; i<arr.length; i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i]);
    }
}

console.log(newArr);