// 10.Write a function that converts the following object into an array of 
// objects, where each object represents a key-value pair?

// const user = {id: 101, name: 'John', age: 30};

// expected output:

// [{ key: 'id', value: 101 }, { key: 'name', value: 'John' }, { key: 'age', 
//     value: 30 }]


const user = {id: 101, name: 'John', age: 30};

function fn(obj){
    const result = [];
    for(let key in obj){
        result.push({ key: key, value: obj[key]});
    }

    return result;
}

console.log(fn(user));