function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
//eat(); // undefined


/********************************* Scenario 2 *********************************/
//nemo.eat = eat;
//nemo.eat(); // ? undefined


/********************************* Scenario 3 *********************************/
//nemo.eat = eat;
//eat(); // ? undefined


/********************************* Scenario 4 *********************************/
//nemo.swim(); // ?Nemo


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // ?undefined