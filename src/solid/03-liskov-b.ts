export abstract class Vehicle {
  
  // getNumberOfSeats(): number{
  //   throw new Error("Method not implemented.");
  // }

  abstract getNumberOfSeats(): number;
 
}


export class Tesla implements Vehicle{
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi implements Vehicle {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota implements Vehicle {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda implements Vehicle {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Volvo implements Vehicle {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
