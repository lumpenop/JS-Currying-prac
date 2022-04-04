
const arr = [1,2,[3,4],[5,6]];

const flattened = arr => [].concat(...arr);

const reduced = arr.reduce((acc,items)=>{
  return acc.concat(items);
},[]);

const flatMethod = arr.flat();

const test = [].concat(...arr);

console.log(flattened(arr));
console.log(reduced);
console.log(flatMethod);
console.log(test);
