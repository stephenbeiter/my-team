const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.roleInfo = `GitHub:<a href="https://github.com/${github}"> ${github}</a>`;
    this.icon = '<i class="fas fa-glasses"></i>';
  };
  getGithub() {
    return this.github;
  };
};

module.exports = Engineer;