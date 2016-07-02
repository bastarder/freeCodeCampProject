function updateInventory(curItem, newItem) {
    // All inventory must be accounted for or you're fired!
    var newList = []; // 用于存放合并后的数据;
    
    newItem.forEach(function(item){
      var num = item[0];    // 现有数量;
      var type = item[1];   // 种类名称;
      // 此处不使用forEach是为了 能更好的中断操作,也为了更好的添加新产品;
      for(var i=0; i<curItem.length; i++){
        var cItem = curItem[i];
        if(cItem[1] === type){
          cItem[0] = cItem[0] + num;
          return ;
        }
      }
      newList.push([num, type]);
    });

    // 重新排序;
    newList = newList.concat(curItem).sort(function(itemA, itemB){
      return itemA[1] > itemB[1];
    });

    return newList;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])