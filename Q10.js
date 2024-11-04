//Write a function that calculates the average of all numbers in an array. 

//Using forLoop method:
var a=  [1, 2, 3, 4, 5]
var sum = 0
for(count=0; count < a.length; count++){
    sum += a[count]/a.length;
}
console.log(sum)
//Using forEach method:
let a = [1, 2, 3, 4, 5];
function calculateAverage(array) {
    let sum = 0;
    array.forEach(function(element) {
        sum += element;
    });
    return sum / a.length;
}
console.log(calculateAverage(a));


//Output: 3 