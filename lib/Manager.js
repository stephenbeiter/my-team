const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber
    this.roleInfo = `Office Number: ${officeNumber}`;
    this.icon = '<i class="fas fa-mug-hot"></i>';
  };
  getNumber() {
    return this.officeNumber;
  };
};

module.exports = Manager;