var priceInfo = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
};

function checkCashRegister(price, cash, cid){
  var _change = cash - price;  // 要找的钱;

  var _left_total = 0;

  var _give_List = [];

  // 计算柜子剩余总金额;
  cid.forEach(function(item){
    _left_total +=item[1];
  });

  if(_left_total < _change){
    // 不够找零;
    return 'Insufficient Funds';
  }else if(_left_total === _change){
    // 正好找零;
    return 'Closed';
  }

  // 计算找零;
  cid = cid.reverse();  // 从大金额金币 开始计算;
  cid.forEach(function(item){
    var type = item[0];          // 金钱种类;
    var once = priceInfo[type];  // 单张金额;
    var num = Math.ceil(item[1] / once);    // 剩余张数;
    var minusTotal = 0;
    // 之所以加0.000001 是因为在 小数的计算有不精确的问题,导致0.01元的某种情况会少算一张;
    while(num > 0 && _change - once + 0.000001 > 0){
      _change -= once;
      minusTotal += once;
      num--;
    }
    if(minusTotal > 0){
      _give_List.push([type,minusTotal])
    }
  });

  // 无法正好找零;
  if(_change > 0){
    return 'Insufficient Funds';
  }

  // 返回正确找零;
  return _give_List;
}

/////TEST
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
