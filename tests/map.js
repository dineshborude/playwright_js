let arr = [
  { name: "Dinesh", age: 28 },
  { name: "Rohit", age: 32 },
  { name: "Amit", age: 26 },
  { name: "Suresh", age: 35 },
  { name: "Neha", age: 24 },
  { name: "Priya", age: 29 },
  { name: "Vikas", age: 31 },
  { name: "Anjali", age: 27 },
  { name: "Karan", age: 33 },
  { name: "Sneha", age: 25 }
];


function filterAge(arr,age) {

let arr2 = [];

    for(let user of arr) {

        if(user.age > age) {
            arr2.push(user.name)
        }
    }
    return arr2;
}

console.log(filterAge(arr,30));