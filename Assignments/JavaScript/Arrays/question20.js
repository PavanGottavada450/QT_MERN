// Given an array of numbers, write a function to check if it is 
// sorted in ascending order 

let arr = [1,2,4,3,5];

function check(arr){
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[i+1]){
            console.log("not sorted in ascending order");
            return;
        }
    }
    console.log("sorted in ascending order");
}

check(arr);
