// Write a function that merges two objects into one. 

//Using Object.assign() method:
var obj1={ a: 1, b: 2 };
var obj2={ b: 2, c: 4 } ;
var obj3 = Object.assign({},obj1,obj2);
console.log(obj3);


//Using spread method:
var obj1={ a: 1, b: 2 };
var obj2={ b: 2, c: 4 } ;
var obj3 = mergeobject(obj1,obj2);
function mergeobject(obj1,obj2){
    return {...obj1, ...obj2}
}
console.log(obj3);
//Output: { a: 1, b: 2, c: 4 }