
let arr = [3,5];
    
arr.sort(function(a, b){
    return b - a;    
});
    
console.log(arr);    


const obj = {
    title: "mart",
    product:[
      {name: "사과",
      price: 100},
      {name: "배",
      price: 200}
    ]
  }
  obj.product.sort((a,b)=> b.price - a.price);

  console.log(obj);


 const arr2 =  [ [ 10, 1 ], [ 6, 3 ], [ 4, 5 ], [ 4, 3 ], [ 6, 5 ] ]
 
// arr[0]이 같으면 arr[1] 기준으로 오름차순 정렬
arr2.sort((a, b) => {
	if (a[0]===b[0]) return a[1]-b[1];
    else return a[0] - b[0]
})

console.log(arr2);

const arr3 = [
    {score: 30, num: 1},
    {score: 15, num: 2},
    {score: 10, num: 3},
    {score: 15, num: 4},
    {score: 10, num: 5},
];
arr3.sort(function (a, b) {
 if (a.score > b.score) return 1;
 if (a.score < b.score) return -1;

 if (a.num > b.num) return 1;
 if (a.num < b.num) return -1;
});

console.log(arr3);