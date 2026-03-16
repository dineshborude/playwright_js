// 12345
// abcdefgh
// output: a1b2c3d4e5fgh
 
let number = [1,2,3,4,5];
let string = ["a","b","c","d","e","f","g","h"];

let output ="";

for(let i = 0; i < string.length; i++) {

    output = number[i]+string[i];

}

console.log(output);