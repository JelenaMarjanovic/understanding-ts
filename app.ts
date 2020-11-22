// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// @Logger
@Logger('LOGGING - PERSON')
class DecoratedPerson {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

// const p = new DecoratedPerson();

// console.log(p);
