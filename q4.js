function findMatryoshka(matryoshka, size) {
    // TODO: 여기에 코드를 작성합니다.
    if(Object.keys(matryoshka).length===0){
      return false;
    }
  
    if(matryoshka.size < size){
      return false;
    }
  
  
    if(matryoshka.size === size){
      return true;
    }
  
    if(matryoshka.matryoshka === null){
      return false;
    }
  
    console.log(matryoshka.matryoshka);
    console.log(matryoshka.size, si);
    return findMatryoshka(matryoshka.matryoshka); 
  }

  console.log(findMatryoshka({ size: 10, matryoshka: { size: 3, matryoshka: null }}, 3));

  