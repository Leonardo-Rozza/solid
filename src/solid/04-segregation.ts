// De esta forma, separamos las interfaces de los métodos que no son comunes entre las clases.Respetando asi el principio de segregacion de interfaces.

interface Bird {
  eat(): void;
  walk(): void;
}

interface FlyingBird {
  fly(): void;
}

interface SwimmingBird {
  swim(): void;
}

interface RunningBird {
  run(): void;
}


class Tucan implements Bird, FlyingBird {
  public fly(){}
  public eat(){}
  public walk() {}
}

class Hummingbird implements Bird, FlyingBird {
  public fly(){}
  public eat() { }
  public walk() {}
}

class Ostrich implements Bird, RunningBird {
  // fly(): void {
  //   throw new Error("El avetruz no puede volar.");
  // }
  eat(): void { }
  walk(): void {}
  run(): void {}
}


class Penguin implements Bird, SwimmingBird {
  // fly(): void {
  //   throw new Error("El pinguino no puede volar.");
  // }
  eat(): void {}
  walk(): void { }
  swim(): void {}
}
