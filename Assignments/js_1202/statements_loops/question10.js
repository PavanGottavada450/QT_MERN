
function findPrimes(start, end){

    let primes = [];

    for(let n = start; n <= end ; n ++){
        let isPrime = true;

        if(n<2) isPrime = false;
        for(let i=2; i< n; i++){
            if(n%i === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            primes.push(n);
        }
    }

    return primes;

}

console.log(findPrimes(10, 20));