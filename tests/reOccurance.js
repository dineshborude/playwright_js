function findOccurances(str) {

    let occ = {};

    for(let i = 0; i < str.length; i++) {

        let char = str[i];

        if(occ[char]) {
            occ[char] = occ[char] + 1;
        } else {

            occ[char] = 1;
            
        }

    }
   return occ;
}

console.log(findOccurances("Hello"));

let occ = findOccurances("Hello");

console.log(occ['l'])