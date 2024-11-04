//Write a function that removes all falsy values from an array. 


const num = [0, 1, false, 2, '', 3];
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
const result = removeFalsyValues(num);
console.log(result); 


//Output: [1, 2, 3] 