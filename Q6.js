//Write a function that groups an array of objects by a specific property. 


var product=[ 
    { id: 1, category: 'fruit' },
    { id: 2, category: 'vegetable' },
    { id: 3, category: 'fruit' }
    ] ;
    function groupBy(array, property) {
  return array.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
const groupedResult = groupBy(product, 'category');
console.log(groupedResult);
//Output: { fruit: [ { id: 1, category: 'fruit' }, { id: 3, category: 'fruit' } ], vegetable: [ { id: 2, category: 'vegetable' } ] } 