const arr = [3,1,2];

function findSmallest(arr) {

  
  let smallest = arr[0];  

  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;


  for (let num of arr) {
    if (typeof num !== 'number' || !Number.isFinite(num)) return false;
    
    if (num < smallest) {
      smallest = num;
    }
  }
  return smallest;
}

console.log(findSmallest(arr))