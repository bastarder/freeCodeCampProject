  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  function getDay(val) {
    var value = parseInt(val);
    switch (value) {
      case 1:
      case 21:
      case 31:
        return value + 'st';
      case 2:
      case 22:
        return value + 'nd';
      case 3:
      case 23:
        return value + 'rd';
      default:
        return value + 'th';
    }
  }

  function makeFriendlyDates(str){
    var curYear = new Date().getFullYear();
    var start = new Date(str[0]);
    var end = new Date(str[1]);
    var oneYear = 31536000000;

    if(end.getTime() === start.getTime()){
      return [months[start.getMonth()] + ' ' + getDay(start.getDate()) + ', ' + start.getFullYear()];
    }
    // 有点绕...........
    if(end.getTime() - start.getTime() < oneYear){
      // 1年内;
      if(start.getMonth() === end.getMonth()){
      // 同一月份;
        if(start.getFullYear() === curYear){
          return [
            months[start.getMonth()] + ' ' + getDay(start.getDate()), 
            getDay(end.getDate())
          ]; //  ['m d','d']; 
        }
        return [
          months[start.getMonth()] + ' ' + getDay(start.getDate()) + ', ' + start.getFullYear(), 
          months[end.getMonth()] + ' ' + getDay(end.getDate())
        ];
        // return ['m d y','m d']
      }
      if(start.getFullYear() === curYear){
        return [
          months[start.getMonth()] + ' ' + getDay(start.getDate()), 
          months[end.getMonth()] + ' ' + getDay(end.getDate())
        ];
        // return ['m d','m d'];
      }
      return [
        months[start.getMonth()] + ' ' + getDay(start.getDate()) + ', ' + start.getFullYear(), 
        months[end.getMonth()] + ' ' + getDay(end.getDate())
      ];
      // return ['m d y','m d'];
    }
    return [
      months[start.getMonth()] + ' ' + getDay(start.getDate()) + ', ' + start.getFullYear(), 
      months[end.getMonth()] + ' ' + getDay(end.getDate()) + ', ' + end.getFullYear()
    ];
    // return ['m d y','m d y'];

  }

  

  console.log(makeFriendlyDates(["2022-09-05", "2023-09-04"]));