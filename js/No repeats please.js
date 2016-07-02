function permAlone(str) {
  var result = [];
  var originList = str.split('');

  transform('',originList);

  return result.filter(function(string) {
    return !string.match(/(.)\1+/g);
  }).length;

  // 迭代;
  function transform(ori,list){
    for(var i=0; i<list.length; i++){
      if(ori.length + 1 === originList.length){
        result.push(ori + list[i]);
      }else{
        transform(ori + list[i],splice(list,i));
      }
    }
  }

  // 复制数组;
  function splice(list , index){
    var record = list.join('').split('');
    record.splice(index,1);
    return record;
  }

}

permAlone('aab');

