function findTravelerPosition(traveler){
  var travelerPosition = [3];
  travelerPosition = traveler.startingPosition.map((x, i) => x + traveler.precentTraveled * traveler.direction[i]);
  return travelerPosition;
}

function incrementDistanceTraveled(traveler, deltaTime){
  traveler.distanceTraveled += calculateNewDistanceTraveled(traveler.velocity, traveler.acceleration, deltaTime);
}

function calculateNewDistanceTraveled(velocity, acceleration, deltaTime){
  var newDistanceTraveled = 0;
  // Naive approach, correct formula only if acceleration doesn't change
  newDistanceTraveled = velocity * deltaTime + .5 * acceleration * deltaTime;
  return newDistanceTraveled;
}
