//Write a function that takes an array and returns a new array with the elements in reverse order. 


//Using reverse() method:
let a = [1, 2, 3, 4, 5];
a.reverse();
console.log(a);

//Using map method:
var b = [1,2,3,4,5]
var newarr = b.map((item,idx)=> b[b.length -1 - idx])
console.log(newarr)

//output:[5, 4, 3, 2, 1] 