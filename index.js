function produceDrivingRange(limit){
  return function(start, end){
    let distance = parseInt(end) - parseInt(start);
    let difference = distance - limit;
    if (difference > 0) {
      return `${Math.abs(difference)} blocks out of range`
    } else {
      return `within range by ${Math.abs(difference)}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(mealCost){
    return mealCost * percentage;
  }
}

function createDriver(){
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}