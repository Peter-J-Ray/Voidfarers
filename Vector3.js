class vector3(){
  constructor(x, y, z){
    this.array = [x, y, z];
  }

  x(){
    this.array[0];
  }

  y(){
    this.array[1];
  }

  z(){
    this.array[2];
  }

  add(otherVector){
    return this.array.map((x, i) => x + otherVector[i]);
  }

  subtract(otherVector){
    return this.array.map((x, i) => x - otherVector[i]);
  }

  multiply(number){
    return this.array.map(x => x * number)
  }
}
