// Create an FIFO animal shelter with operations such a enqueue, dequeueAny, dequeueDog, and dequeueCat
class AnimalShelter() {
  constructor() {
    this.dogs = {};
    this.cats = {};
    this.frontD = 0;
    this.backD = 0;
    this.frontC = 0;
    this.backC = 0;
  }
  // assume animal has property type and name
  enqueue(animal) {
    if (animal.type === 'dog') {
      this.dogs[++this.backD] = {
        name: animal.name,
        time: new Date();
      }
    } else {
      this.cats[++this.backC] = {
        name: animal.name,
        time: new Date();
      }
    }
  }

  dequeueDog() {
    let chosen = this.dogs[this.frontD];
    delete this.dogs[this.frontD];
    this.frontD++;
    return chosen;
  }

  dequeueCat() {
    let chosen = this.cats[this.frontC];
    delete this.cats[this.frontC];
    this.frontC++;
    return chosen;
  }

  dequeueAny() {
    if (this.dogs[this.frontD].time > this.cats[this.frontC].time) {
      return this.dequeueDog();

    } else {
      return this.dequeueCat();
    }
  }

}
