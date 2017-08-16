let mult = function(){
    let arr = [];
    for(let i = 0; i < 11; i++){
      arr.push([]);
      for(let j = 1; j < 11; j++ ){
        arr[i].push(j * i);
      }
    }
    results = arr.splice(1,10);
    
    return results;
  };

mult();

module.exports = mult;