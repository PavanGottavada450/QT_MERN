const nestedArray = [[1, 2], [3, 4], [5, 6]];

function flattenArray(nestedArray){
    return nestedArray.flatMap(item => item);
}



console.log(flattenArray(nestedArray));
