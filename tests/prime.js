
function isPrime(num) {

    let squareRoot = Math.sqrt(num);

    for(let i = 2; i < squareRoot; i++) {

        if(num%i==0) {
            return false;
        }

    }

    return true;
}

console.log(isPrime(151));