function sumEvenNumbers(arr){
    let sum = 0;
    arr.forEach((a) => {
        if (a % 2 === 0) {
            sum += a;
          }
    })
    return sum;
}

console.log(sumEvenNumbers([2, 5, 8, 11, 4]));
