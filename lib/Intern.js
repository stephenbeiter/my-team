const Employee = require('../lib/Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.roleInfo = `School: ${school}`;
    this.icon = '<i class="fas fa-graduation-cap"></i>';
  };
  getSchool() {
    return this.school;
  };
};

module.exports = Intern;