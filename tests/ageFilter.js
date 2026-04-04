let map = new Map();

map.set("Rahul", 30);
map.set("Pravin", 31);
map.set("Akash", 45)

console.log(map);


function filterByAge(map,age) {

    for (let [key, value] of map) {
  
        if(value > age) {
            return key;
        }

}

}

console.log(filterByAge(map,40));