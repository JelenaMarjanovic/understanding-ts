const add = (n1: number, n2: number) => n1 + n2;

const printResult = (num: number) => console.log('Result: ' + num);

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;

  cb(result);
};

printResult(add(5, 8));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 9));

addAndHandle(3, 4, (result) => console.log('Callback: ', result));
