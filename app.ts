class Department {
  // private readonly id: string;
  // name: string;
  private employees: string[] = [];

  // constructor(id: string, n: string) {
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

const newEmployees = ['Max', 'Manuel', 'Anna'];
newEmployees.forEach((employee) => accounting.addEmployee(employee));
// accounting.employees[2] = 'Anna'; // BAD PRACTICE, avoiding with using private access modifier

accounting.describe();

accounting.printEmployeeInformation();

// const accountingCopy = {
//   id: 'd2',
//   name: 'DUMMY',
//   employees: [],
//   describe: accounting.describe,
//   addEmployee: accounting.addEmployee,
//   printEmployeeInformation: accounting.printEmployeeInformation
// };

// accountingCopy.describe();
