let str = "0456800009";

function removeLeadingZeroes(str) {
    

    for(let s in str) {

        if(str[s] !== '0') {
            return str.slice(s)
        }
        
    }
    


}

// console.log(removeLeadingZeroes(str));
console.log(removeLeadingZeroes(str));