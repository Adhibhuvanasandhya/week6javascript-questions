//Question 5: Find the Maximum Number in an Array 
//Using Math.max() method:
const a = [1, 3, 2, 8, 5] ;
const b = findmax(a);
function findmax(high){
    return Math.max(...high);
}
console.log(b)


//Using filter method
const arr = [1, 3, 2, 8, 5] ;
function largestElementWithFilter(arr) {
    if (arr.length === 0) {
        return;
    }
    let max = arr[0];
    arr.filter(num => {
        if (num > max) {
            max = num;
        }
    });
    return max;
}
console.log( largestElementWithFilter(arr));
//Output: 8 