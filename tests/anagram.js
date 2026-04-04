let str = "GeeksForGeeks";
let str2 = "SeeksForGeeks";

function isAnagram(str,str2) {

    let map = new Map();

    for (let s of str) {

      map.set(s,(map.get(s) || 0) +1);
       
    }

    for (let s of str2) {

      map.set(s,(map.get(s) || 0) -1);
       
    }

    for(let [key,value] of map) {

        if(value!==0) {
            return false
        }

    }

    return true;
}

console.log(isAnagram(str,str2))