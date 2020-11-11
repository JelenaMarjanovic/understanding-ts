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

class ITDepartment extends Department {
  // admins: string[];

  // constructor(id: string, admins: string[]) {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');

    // this.admins =  admins;
  }
}

class AccountingDepartment extends Department {
  // private reports: string[];

  // constructor(id: string, reports: string[]) {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports(this: AccountingDepartment) {
    console.log(this.reports);
  }
}

// const department = new Department('d1', 'Accounting');

const it = new ITDepartment('d3', ['Max']);

const newEmployees = ['Max', 'Manuel', 'Anna'];
newEmployees.forEach((employee) => it.addEmployee(employee));
// it.employees[2] = 'Anna'; // BAD PRACTICE, avoiding with using private access modifier

it.describe();

it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d4', []);

accounting.addEmployee('Henry');

accounting.addReport('Something went wrong...');

accounting.printReports();

console.log(accounting);

// const accountingCopy = {
//   id: 'd2',
//   name: 'DUMMY',
//   employees: [],
//   describe: department.describe,
//   addEmployee: department.addEmployee,
//   printEmployeeInformation: department.printEmployeeInformation
// };

// accountingCopy.describe();
