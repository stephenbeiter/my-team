const employee = require("./lib/Employee.js")
const employee1 = new Employee("Tester", 324, "tester@email.com");

console.log(employee1.constructor.name);