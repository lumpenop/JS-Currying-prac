function test5(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    
    for(var i=0;i<arr.length;i++){
        let name;
        let age;
        for(var j=0; j<arr[i].length;j++){
            if(arr[i][j][0] === 'firstName'){
              name = `${arr[i][j][1]}`;
            
            }
            if(arr[i][j][0] ==='lastName'){
              name += ` ${arr[i][j][1]}`
            }
            
            if(arr[i][j][0]=== 'age'){
              age = arr[i][j][1];
            }
          }
          result.push([name.trim(), age])
    }
    console.log(result);
   

    result = result.sort(function(a, b){
        var x = a[1], y = b[1];
        return x < y ? -1 : x > y ? 1 : 0;
    });
    result = result.map(e=>e[0]);
    return result;
  }
  
  let list = [
    [
      ['firstName', 'Joe'],
      ['age', 42],
      ['gender', 'male'],
    ],
    [
      ['firstName', 'Mary'],
      ['lastName', 'Jenkins'],
      ['age', 36],
      ['gender', 'female'],
    ],
    [
      ['lastName', 'Kim'],
      ['age', 40],
      ['gender', 'female'],
    ],
  ];
  
  let output = test5(list);
  console.log(output); // --> ['Mary Jenkins', 'Kim', 'Joe'];