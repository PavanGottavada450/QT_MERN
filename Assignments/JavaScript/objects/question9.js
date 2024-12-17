// 9.Write a function to merge two objects. If they have common keys, the 
// values in the second object should override those in the first?

const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};

function fn(obj1, obj2){
    return {...obj1,...obj2};
}

const mergeObj = fn(obj1,obj2);

console.log('MergedObject',mergeObj);
