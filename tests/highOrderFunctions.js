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




let under30 = users.reduce(function(acc,current) {

    if([current.age] < 30) {
        acc.push(current.fName);
    }

    return acc;

},[])

console.log(under30);