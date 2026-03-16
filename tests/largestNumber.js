let arr = [26,100,97,78];

function findMax(arr) {

    let max = arr[0];

    for(let number of arr) {
        if(number > max) {
            max = number;
        }
    }
        return max;
}

console.log(findMax(arr));