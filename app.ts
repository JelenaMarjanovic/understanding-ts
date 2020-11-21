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

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string | number | boolean>();
textStorage.addItem('Max');
textStorage.addItem('Manuel');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(30);
numberStorage.addItem(13);
numberStorage.removeItem(30);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' };
// // Because objects are the reference type, it won't work like this:
// // objStorage.addItem({ name: 'Max });
// // objStorage.removeItem({ name: 'Max' });
// // because these two are completely different objects with the same key:value pair
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'Manuel' });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // return { title: title, description: description, completeUntil: date };
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manuel');
// names.pop();
