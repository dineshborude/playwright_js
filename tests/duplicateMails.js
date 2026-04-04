const arr = ["sambha@gmail.com", "daddy@gmail.com","rohit@gmail.com","daddy@gmail.com"];

let object = 
{
    name : "Dinesh",
    age : "28",
    email : "daddh@mail.com"
}

function findDuplicateMail(arr) {

    let map = new Map();

    for(let mail of arr) {
       
        map.set(mail,(map.get(mail) || 0)+1);

    }

    return map;
}

function returnDuplicateMail(arr) {

    let map = findDuplicateMail(arr);

    for(let [key,value] of map) {
        if(value > 1) {
            return key;
        }
    }

}

console.log(returnDuplicateMail(arr))