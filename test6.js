function test6() {
    // TODO: 여기에 코드를 작성합니다.
    let x=0;
    function fibo(x){   
        if(x<=1){
            return x;
        }else{
            return fibo(x-1) + fibo(x-2);
        }
    }
    return function(){
        return fibo(x++);
    };
}

const fn = test6();

console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
  