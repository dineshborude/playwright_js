//  Given int num = 12344321, remove duplicate digits

function findDuplicates(str) {

    let occ = "";

   for(let i = 0; i < str.length; i++) {
    let char = str[i];

        if(!occ.includes(char)) {
            occ = occ + char;
        }

        
   }
  return occ;
}
console.log(findDuplicates("12344321"));

function removeDuplicates(str) {
    str = str.toLowerCase();
    return [...new Set(str)].join("");
}

console.log(removeDuplicates("Indiaaa"));