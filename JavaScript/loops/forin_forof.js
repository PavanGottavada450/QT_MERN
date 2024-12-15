const obj = {a:1, b:2 };
const arr = [10,20,30];

// for...in
console.log("for...in on obj")
for(const key in obj){
    console.log(key,obj[key]);
}

console.log("for...in on arr")
for(const index in arr){
    console.log(index,arr[index]);
}

// for...of
console.log("for...of on arr")
for(const value of arr){
    console.log(value);
}

console.log('for...of on object:'); 
// Will throw an error unless you use Object.keys(), Object.values(), or Object.entries()
for(const value of Object.keys(obj)){
    console.log(value,obj[value]);
    
}