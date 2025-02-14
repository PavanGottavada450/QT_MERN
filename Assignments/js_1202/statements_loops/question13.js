function mostFrequent(ar,nr){
    let maxCount = 0;
    let eleMaxFreq;

    for(let i=0;i<n;i++){
        let count = 0;
        for(let j=0; j<n ; j++){
            if(arr[i] == arr[j]){
                count++
            }
        }

        if(count > maxCount){
            maxCount = count;
            eleMaxFreq = arr[i];
        }
    }
    return eleMaxFreq;
}
let arr = [40, 50, 30, 40, 50, 30, 30];
let n = arr.length;
console.log(mostFrequent(arr, n)); 