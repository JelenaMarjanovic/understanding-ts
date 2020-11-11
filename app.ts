class Department {
  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];

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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }

    this.addReport(value);
  }

  // constructor(id: string, reports: string[]) {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');

    // this.reports = reports;
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);

    this.lastReport = text;
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

// console.log(accounting.mostRecentReport);

// accounting.mostRecentReport = '';

accounting.addEmployee('Max');

accounting.addEmployee('Henry');

accounting.addReport('Something went wrong...');

accounting.printReports();

accounting.printEmployeeInformation();

accounting.mostRecentReport = 'Year End Report';

console.log('Last report: ', accounting.mostRecentReport);

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
