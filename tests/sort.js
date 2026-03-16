
let arr = [5,6,9,2,7];
let arr2 = [];

for(let i = 0; i < arr.length; i++) {

    for(let j = i+1; j < arr.length; j++) {

      if(arr[i] > arr[j]) {
        arr2.push(arr[i]);
    }

    }

  


}



console.log(arr2)