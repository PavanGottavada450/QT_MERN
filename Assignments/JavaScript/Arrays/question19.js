// Implement a function that returns the cumulative sum of an 
// array (e.g., [1, 2, 3] → [1, 3, 6]).


let arr = [1,2,3];

let a = 0;
let newarr = [];

function cummulative(){
    
    for(let i=0; i<arr.length; i++){
        a += arr[i];
        newarr.push(a);
    }

    return newarr;
}

console.log(cummulative());