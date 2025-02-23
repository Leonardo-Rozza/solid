type Size = "S" | "M" | "L";

class Product {
  constructor(public name: string, public price: number, public size: Size) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (this[key].length <= 0) throw Error(`${key} is empty`);
          break;
        case "number":
          if (this[key] <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }
    return true;
  }

  toString() {
    if (!this.isProductReady()) return;

    return `${this.name} - (${this.price}) - ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue Large Pants", 10, "M");

  console.log(bluePants.toString());
})();
