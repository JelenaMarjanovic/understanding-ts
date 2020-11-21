// // const names: string[] = [];
// const names: Array<string> = ['Max', 'Manuel'];
// names.map((name) => console.log(name));

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then((data) => {
//   const words = data.split(' ');
//   console.log(words);
// });

interface Object {
  name: string;
  age: number;
  assign: (a: object, b: object) => object;
}

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj = merge({ name: 'Max' }, 30);
const mergedObj = merge({ name: 'Max' }, { age: 30 });

console.log(mergedObj);
console.log('Name: ' + mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';

  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }

  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

// console.log(extractAndConvert({}, 'name'));
console.log(extractAndConvert({ name: 'Max' }, 'name'));
