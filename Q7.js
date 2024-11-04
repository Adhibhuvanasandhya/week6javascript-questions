//Write a function that returns the intersection of two arrays. 

const num1 = [1, 2, 3];
const num2 = [2, 3, 4];
function intersection(num1, num2) {
  return num1.filter(element => num2.includes(element));
}
const result = intersection(num1,num2);
console.log(result);

//Output: [2, 3] 