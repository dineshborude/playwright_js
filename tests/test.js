
// var character = 'd';
// console.log(typeof(character));
// console.log(character)

// var character = 'dinesh';
// console.log(character);

let numberArray = [12,4001,600,9,110];

let doubleNumber = numberArray.map((x) => x*2);
console.log(`Doubles : ${doubleNumber}`);

let evenNumbers = numberArray.filter((x) => x%2==0);

console.log(`Even Number : ${evenNumbers}`);

let sumOfArray = numberArray.reduce((acc,current) => acc+current);
console.log(sumOfArray);

let maxNumber = numberArray.reduce((max,current) => {

    if(current > max) {
        max = current;
    }
    return max;
});
console.log(`maxNumber : ${maxNumber}`);

const users = [
  {
    fName: "Dinesh",
    lastName: "Patil",
    age: 28
  },
  {
    fName: "Seema",
    lastName: "Sharma",
    age: 24
  },
  {
    fName: "Rahul",
    lastName: "Joshi",
    age: 30
  },
  {
    fName: "Anita",
    lastName: "Kulkarni",
    age: 32
  }
];

let reOccuredAge = users.reduce(function (acc,current) {

    if(acc[current.age]) {
        acc[current.age] += acc[current.age];
    }else {
        acc[current.age] = 1;
    }

    return acc;

},{})

console.log(reOccuredAge )



let firstNameUnder30 = users.reduce(function(acc,current) {

    if(acc[current.age] >= 30) {
        return acc[current.fName];
    }


},{});

console.log(`Persons Under 30 : ${firstNameUnder30}`);


let characters = 'India'
let str = characters.toLowerCase().split("");

// console.log(str);

let reoccuredCharacter = str.reduce(function (acc,current) {

    if(acc[current]) {

        acc[current] += 1;

    }
    else {
        acc[current] = 1;
    }

    return acc;

},{})

// console.log(reoccuredCharacter);