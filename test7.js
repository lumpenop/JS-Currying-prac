function test7(arr, id) {
    // TODO: 여기에 코드를 작성합니다.
    
    // if(arr.id==='undifined'){
    //   console.log('un');
    //   return null;
    // }
    
    if(typeof arr !== 'object'){
      console.log('ob', arr);
      return null;
    }

    if(Array.isArray(arr)){
        
        for(var i=0; i<arr.length; i++){
            
            if(arr[i].id === id){

                return arr[i];
            }
            if(Array.isArray(arr[i].children)){
                return test7(arr[i].children, id);
            }
        }
    }


  }


  let input = [
    {
      id: 1,
      name: 'johnny',
    },
    {
      id: 2,
      name: 'ingi',
      children: [
        {
          id: 3,
          name: 'johnson',
        },
        {
          id: 5,
          name: 'steve',
          children: [
            {
              id: 6,
              name: 'lisa',
            },
          ],
        },
        {
          id: 11,
        },
      ],
    },
    {
      id: '13',
    },
  ];
  
//   let output = test7(input, 1);
//   console.log(output); // --> { id: 1, name: 'johnny' }
  
  output = test7(input, 5);
  console.log(output); // --> { id: 5, name: 'steve', children: [{ id: 6, name: 'lisa' }] }
  
//   output = test7(input, 99);
//   console.log(output); // --> null