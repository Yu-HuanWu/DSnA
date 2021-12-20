function isPrime(num) {
    // your code here
    let range= []
    for (let i=2; i< num; i++){
        range.push(i);
    }
    let output= true
    range.forEach(i=> {
        if (num%i === 0) {
            output= false
        }
    })

    if (num=== 1) {
        output= false
    }

    return output
}

console.log(isPrime(1))