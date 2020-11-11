type Combinable = number | string;

type ConversionDescriptor = 'as-number' | 'as-text';

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result: Combinable;

  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;

  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
};

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

type User = {
  name: string;
  age: number;
};

let u1: User;
u1 = {
  name: 'Max',
  age: 30
};

const greet = (user: User) => console.log('Hi, I am ' + user.name);

const isOlder = (user: User, checkAge: number) => checkAge > user.age;

greet(u1);

const checkIfOlder = isOlder(u1, 36);
console.log('Is older?', checkIfOlder);
