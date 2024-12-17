// Create a function to count how many times a specific 
// number appears in an array. 


let arr = [1,2,3,2,1,2,3];

let count = 0;

const a = 3;

for(let i=0; i<arr.length; i++){
    if(arr[i] == a){
        count++;
    }
    
}

console.log(count);