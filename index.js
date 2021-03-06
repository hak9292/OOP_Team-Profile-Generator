const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
let currentEmployee = 'employee';
const team = [];


let employeeQuestions = [
    {
        name: 'name',
        message: `What is the ${currentEmployee}'s name?`
    },
    {
        name: 'id',
        message: `What is the ${currentEmployee}'s employee ID?`
    },
    {
        name: 'email',
        message: `What is the ${currentEmployee}'s email address?`
    }
]
let managerVariant = [
    {
        name: 'officeNumber',
        message: `What is the ${currentEmployee}'s office number?`
    }
]
let engineerVariant = [
    {
        name: 'github',
        message: `What is the ${currentEmployee}'s github username?`
    }
]
let internVariant = [
    {
        name: 'school',
        message: `What school does the ${currentEmployee} currently attend?`
    }
]
let addEmployeeQuestion = [
    {
        type: 'list',
        name: 'add',
        message: 'Would you like to add an engineer or intern?',
        choices: [
            'engineer',
            'intern',
            new inquirer.Separator(),
            'finished building my team'
        ]
    }
]
let managerQuestions = employeeQuestions.concat(managerVariant);
let engineerQuestions = employeeQuestions.concat(engineerVariant);
let internQuestions = employeeQuestions.concat(internVariant);

function init() {
    currentEmployee = 'Manager';
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            writeToFile('index.html', createHTML());
            addEmployees();
        })
}

function createHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./reset.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    <header>
        <h1>My Team</h1>
    </header>
    <body>
        <div class="card-group">

    `;
}

function addManagerCard(data) {
    return`
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">${data[0].name}</h5>
            <div class="card-subtitle mb-2 text-muted">${data[0].constructor.name}</div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[0].id}</li>
            <li class="list-group-item">Email: ${data[0].email}</li>
            <li class="list-group-item">Office number: ${data[0].officeNumber}</li>
        </ul>
    </div>
</div >
</body >
</html >
`;
}

function addEngineerCard(data, i) {
    return `
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">${data[i].name}</h5>
            <div class="card-subtitle mb-2 text-muted">${data[i].constructor.name}</div>
        </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data[i].id}</li>
        <li class="list-group-item">Email: ${data[i].email}</li>
        <li class="list-group-item">GitHub: ${data[i].github}</li>
    </ul>
    </div>
    `;
}

function addInternCard(data, i) {
    return `
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">${data[i].name}</h5>
            <div class="card-subtitle mb-2 text-muted">${data[i].constructor.name}</div>
        </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data[i].id}</li>
        <li class="list-group-item">Email: ${data[i].email}</li>
        <li class="list-group-item">School: ${data[i].school}</li>
    </ul>
    </div>
    `;
}

function addEmployees() {
    inquirer
        .prompt(addEmployeeQuestion)
        .then((answers) => {
            switch (answers.add) {
                case 'engineer':
                    addEngineer();
                    break;
                case 'intern':
                    addIntern();
                    break;
                default:
                    // createHTML('index.html', generateHTML());
                    for (i = 1; i < team.length; i++) {
                        if (team[i].constructor.name === 'Engineer') {
                            appendToFile('index.html', addEngineerCard(team, i));
                        }
                        if (team[i].constructor.name === 'Intern') {
                            appendToFile('index.html', addInternCard(team, i));
                        }
                    }
                    appendToFile('index.html', addManagerCard(team));
            }
        })
}

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            addEmployees();
        })
}

function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            addEmployees();
        })
}

function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

function appendToFile(fileName, data) {
    fs.appendFile(`./dist/${fileName}`, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}
// function createHTML(fileName, data) {
//     fs.writeFile(`./dist/${fileName}`, data, (err) =>
//         err ? console.error(err) : console.log('Success!')
//     );
//     console.log('Your generated file for your team is in "./dist/"!');
// }

init();
