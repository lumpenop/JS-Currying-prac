function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    if(giftBox.length === 0 || wish.length ===0){
      return false;
    }
    
    let a = giftBox.pop();
    if(a===wish){
        return true;
    }else if(typeof a != 'string'){
        return unpackGiftbox(giftBox.concat(a), wish);
    }

    return unpackGiftbox(giftBox, wish);
    
  }

console.log(unpackGiftbox(['macbook', ['eyephone', [], ['postcard']], 'money'], 'iphone'));
