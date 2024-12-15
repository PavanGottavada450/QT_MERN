const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);



function getMax(accumlator,element){
    return Math.max(accumlator,element);
}

function getMin(accumlator,element){
    return Math.min(accumlator,element);
}