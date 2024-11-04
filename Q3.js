//Write a function that checks if an array contains duplicates. 

let set1=[1, 2, 3, 4, 5, 1]
let set2=[1, 2, 3, 4, 5]
function hasDuplicates(arr) {
  const seenElements = {};
  for (let i = 0; i < arr.length; i++) {
    if (seenElements[arr[i]]) {
      return true;
    }
    seenElements[arr[i]] = true;
  }
  return false;
}
console.log(hasDuplicates(set1));
console.log(hasDuplicates(set2)); 

//Output: true 
//Output: false