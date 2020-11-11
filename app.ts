class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

const newEmployees = ['Max', 'Manuel', 'Anna'];
newEmployees.forEach((employee) => accounting.addEmployee(employee));
// accounting.employees[2] = 'Anna'; // BAD PRACTICE, avoiding with using private access modifier

accounting.describe();

accounting.printEmployeeInformation();

// const accountingCopy = {
//   name: 'DUMMY',
//   employees: [],
//   describe: accounting.describe,
//   addEmployee: accounting.addEmployee,
//   printEmployeeInformation: accounting.printEmployeeInformation
// };

// accountingCopy.describe();
