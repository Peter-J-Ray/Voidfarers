//Travel Script
class Traveler {
  constructor(innerObject, startingPosition, endingPosition, acceleration){
    this.innerObject = innerObject;
    this.startingPosition = startingPosition;
    this.endingPosition = endingPosition;
    this.acceleration = acceleration;
    this.direction = endingPosition - startingPosition;
    this.elaspedTime = math.sqrt((2*direction)/acceleration);
    this.velocity = acceleration * elaspedTime;

    this.travelDistance = math.sqrt(startingPosition);
  }

  getPosition(){
    var currentPosition;
    currentPosition = this.startingPosition + (this.velocity/this.elaspedTime);
    return currentPosition;
      
  }
  
  getDistanceTraveled() {
    var distanceTraveled;
    distanceTraveled = this.velocity/this.elaspedTime;
    return distanceTraveled;
  }
    
}

var player = new Traveler(null, 0, 1, 10);
var d = player.getDistanceTraveled();

console.log(player);
console.log(d);
