const inquirer = require('inquirer');
const fs = require('fs');
const {Employee, Manager, Engineer, Intern} = require('./Employee');
const generateHTML = require('./src_templateHelperCode/generateHTML');
const team = [];



const menu =   {
    type: "list",
    choices: ["Engineer", "Intern","Cancel"],
    name: "menu",
    message: "What position do you want to add?",

}

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
     },
     {
         type: 'input',
         name: 'id',
         message: "What is the engineer's id?"
     },
     {
         type: 'input',
         name: 'email',
         message: " What is the engineer's email?"
     },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
    },
]

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
     },
     {
         type: 'input',
         name: 'id',
         message: "What is the manager's id?"
     },
     {
         type: 'input',
         name: 'email',
         message: " What is the manager's email?"
     },
     {
         type: 'input',
         name: 'officeNumber',
         message: "What is the manager's office number?"
     }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
     },
     {
         type: 'input',
         name: 'id',
         message: "What is the intern's id?"
     },
     {
         type: 'input',
         name: 'email',
         message: " What is the intern's email?"
     },
     {
         type: 'input',
         name: 'school',
         message: "What school is the intern enrolled in?"
     }
]


function createTeam() {
    // inquirer prompt for menu questions choices= engineer, intern, or done
    inquirer.prompt(menu)
    // .then(choice) 
    .then(answers => {
        console.log(answers)
        let info = ''
        switch(answers.menu) {
            case 'Engineer':
             createEngineer()
            break;

            case 'Intern':
                createIntern()
            break;

            case 'Cancel':
                writeToFile(team)
            break;
    
        }
    })
    // switch case key= answers.choice value= engineer
}

function createManager() {
    inquirer.prompt(managerQuestions)
    .then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(manager)
        createTeam()
    })
}

function createEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(engineer)
        createTeam()
    })
}

function createIntern() {
    inquirer.prompt(internQuestions)
    .then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(intern)
        createTeam()
    })
}

// TODO: Create a function to initialize app
function init() {
  createManager() 
    // inquirer.prompt(questions)
    //     .then(data => {
    //         console.log(data);
    //         writeToFile('Team Profile Generator', data)
    //     });

}

function writeToFile(data) {
    console.log(data);
    fs.writeFile('Sample-team.html', generateHTML(data), err =>
        err ? console.log(err) : console.log('Success!')
    );
}

// Function call to initialize app
init();
