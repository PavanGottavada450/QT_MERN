// Create a function that returns all elements of an array 
// greater than a given number. 

let arr = [1,2,3,4,5,6,7,8,9];

let a = 5;

function array(){
    for(let i=0; i<arr.length; i++){
        if(a < arr[i]){
            console.log(arr[i]);
        }
    }
}

array();