const numbers = [10, 25, 40, 5, 60]; 

const maxNumber = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);

console.log(maxNumber);
