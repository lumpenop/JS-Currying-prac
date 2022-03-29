function printRole(user) {
    // Joe Blow를 클릭하면 clerk 이
    // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
    // 이 함수는 수정하지 마십시오.
    console.log(user);
    console.log(user.role);
    
  }
  
  function test4(arr) {
    // TODO: 여기에 코드를 작성합니다.
    const ul = document.querySelector('#container');
    ul.addEventListener('click', function(e){
      if(e.target.tagName == 'a'){
        for(var i=0; i<arr.length;i++){
          if(`${arr[i].firstName} ${arr[i].lastName}` == e.target.innerText){
            printRole(arr[i]);
          }
        }
      }
    })
    
    for(var i=0; i<arr.length;i++){
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.classList.add('name');
      a.textContent = `${arr[i].firstName} ${arr[i].lastName}`;
      
      const div = document.createElement('div');
      div.classList.add('age');
      div.textContent = arr[i].age;
      li.appendChild(a);
      li.appendChild(div);
      ul.appendChild(li);
    }
  }

  let list = [
    { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
    { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
  ];

  test4(list);
  