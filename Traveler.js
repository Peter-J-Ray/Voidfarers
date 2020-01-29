class Traveler {
  constructor(innerObject, startingPosition, endingPosition){
    this.innerObject = innerObject;
    this.startingPosition = startingPosition;
    this.endingPosition = endingPosition;
    this.direction = startingPosition.subtract(endingPosition));
    this.distanceTraveled = 0;
    this.acceleration = 0;
    this.velocity = 0;

    this.travelDistance = math.sqrt(startingPosition);
  }

  getPosition(){
    var currentPosition;
    currentPosition = this.startingPosition + this.endingPosition.multiply(this.fractionTraveled)
    return currentPosition;
  }

  getFractionTraveled(){
    return this.distanceTraveled/this.travelDistance;
  }
}
