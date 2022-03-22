const add2 = (num) =>{
	return num+2;
}
const multiply3 = (num) =>{
	return num*3;
}

// 합성하여 사용
const add2Multiply3 = (num) => console.log(multiply3(add2(num))); 


add2Multiply3(5) // 21


const compose = (...funcs) => {
  return (initialVal) => funcs.reduceRight((val, fn) =>
    fn(val), initialVal)
};
console.log(compose(multiply3, add2)(5));

const pipe = (...funcs) => 
  (initialVal) => 
  funcs.reduce((val, fn) => 
  fn(val), initialVal);

console.log(pipe(add2, multiply3)(5));