function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class DecoratedPerson {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

// const p = new DecoratedPerson();

// console.log(p);
