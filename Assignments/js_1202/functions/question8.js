
function createMultiplier(a){
    return function (b){
        return a*b;
    }
}

const double = createMultiplier(2); 

console.log(double(5)); 