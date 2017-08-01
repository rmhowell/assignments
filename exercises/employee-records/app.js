function Employee (name, title, salary, stat) {
  this.name = name;
  this.title = title;
  this.salary = salary;
  this.stat = stat || 'full time';
  this.print = function () {
    console.log("name: " + this.name + ", title: " + this.title + ", salary: " + this.salary + ", status: " + this.stat);
  };
}

var employees = [];

var firstEmployee = new Employee("Robert", "CEO", "$10,000");  
var secondEmployee = new Employee("Deborah", "Accountant", "$8,000");
var thirdEmployee = new Employee("Jonathon", "Secretary", "2,000", "Part time");
  
employees.push(firstEmployee, secondEmployee, thirdEmployee);

console.log(employees)

firstEmployee.print()
secondEmployee.print()
thirdEmployee.print()