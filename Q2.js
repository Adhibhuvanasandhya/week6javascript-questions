//Write a function that takes a nested array and flattens it to a single-level array. 

let a = [1, [2, 3], [4, [5]]] ;
let b = flattenArray(a);
console.log(b);
function flattenArray(arr) {
  return arr.flat(Infinity);
}
//Output: [1, 2, 3, 4, 5] 