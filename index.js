const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { genPage, genCard } = require('./src/page-template');

const employees = [];
let myTeam = ``;

// Inquirer Questions
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter a name.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the employee's ID number?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter the ID number.')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the employee's email address?",
    default: () => { },
    validate: function (email) {

      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

      if (valid) {
        return true;
      } else {
        console.log("Please enter a valid email address.");
        return false;
      }
    }
  }
];

const mgrQuestions = questions.concat({
  type: 'input',
  name: 'officeNumber',
  message: "What is the employee's office number?",
  validate: input => {
    if (input) {
      return true;
    } else {
      console.log('Please enter the office number.')
      return false;
    }
  }
});

const engQuestions = questions.concat({
  type: 'input',
  name: 'github',
  message: "What is the employee's github username?",
  validate: input => {
    if (input) {
      return true;
    } else {
      console.log('Please enter the github username.')
      return false;
    }
  }
});

const intQuestions = questions.concat({
  type: 'input',
  name: 'school',
  message: "What is the name of the employee's school?",
  validate: input => {
    if (input) {
      return true;
    } else {
      console.log('Please enter the name of the school.');
      return false;
    }
  }
});

// Functions to write HTML
function createPage() {
  employees.forEach(emp => {
    let empCard = genCard(emp);
    myTeam = myTeam + empCard;
  });
  fs.writeFile('./dist/index.html', genPage(myTeam), err => { if (err) throw err; console.log('Your team page was created successfully! Open dist/index.html to view your new team page!') });
};

// Inquirer functions
function addManager() {
  return inquirer.prompt(mgrQuestions)
    .then(answers => {
      let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      employees.push(manager);
    })
    .then(initPrompt);
};

function addEngineer() {
  return inquirer.prompt(engQuestions)
    .then(answers => {
      let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      employees.push(engineer);
    })
    .then(initPrompt);
};

function addIntern() {
  return inquirer.prompt(intQuestions)
    .then(answers => {
      let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      employees.push(intern);
    })
    .then(initPrompt);
};

const initPrompt = () => {
  return inquirer.prompt([{
    type: 'list',
    name: 'role',
    message: 'Please choose the role of the employee you wish to add or select Finish to create your team contact page:',
    choices: ['Manager', 'Engineer', 'Intern', 'Finish']
  }])
    .then(answer => {
      if (answer.role === 'Manager') {
        return addManager();
      } else if (answer.role === 'Engineer') {
        return addEngineer();
      } else if (answer.role === 'Intern') {
        return addIntern();
      } else if (answer.role === 'Finish') {
        return createPage(employees);
      }
    });
};

// Initialize prompts
initPrompt();