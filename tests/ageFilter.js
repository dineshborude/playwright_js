let map = new Map();



console.log(map);


function filterByAge(map,age) {

    for (let [key, value] of map) {
  
        if(value > age) {
            return key;
        }

}

}

let arr = [...map];
console.log(arr[1][1]);

// console.log(filterByAge(map,40));