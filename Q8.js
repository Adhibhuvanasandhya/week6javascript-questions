//Write a function that calculates the sum of all numbers in an array. 


//Using forLoop method:
var a=  [1, 2, 3, 4, 5]
var sum = 0
for(count=0; count < a.length; count++){
    sum += a[count];
}
console.log(sum)


//Using reduce() method:
const a = [1, 2, 3, 4, 5];
const sum = sumArray(a);
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sum);


//Output: 15 