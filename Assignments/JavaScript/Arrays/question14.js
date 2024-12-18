// Write a function to split an array into chunks of a specific size.

let arr = [1,2,3,4,5,6,7,8,9];

let chunksize = 3;

function chunkArray(arr,size){
    result = [];

    for(let i=0; i<arr.length; i+=size){
        result.push(arr.slice(i,i+size));
    }
    return result;
}

console.log(chunkArray(arr,chunksize));