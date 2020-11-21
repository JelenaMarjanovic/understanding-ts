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
