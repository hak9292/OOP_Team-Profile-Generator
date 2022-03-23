const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const employeeQuestions = [
    {
        name: 'name',
        message: "What is the employee's name?"
    },
    {
        name: 'id',
        message: "What is the employee's employee ID?"
    },
    {
        name: 'email',
        message: "What is the employee's email address?"
    }
]
const managerVariant = [
    {
        name: 'officeNumber',
        message: "What is the employee's office number?"
    }
]
const engineerVariant = [
    {
        name: 'github',
        message: "What is the employee's github username?"
    }
]
const internVariant = [
    {
        name: 'school',
        message: "What school does the employee currently attend?"
    }
]
const addEmployeeQuestion = [
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
const managerQuestions = employeeQuestions.concat(managerVariant);
const engineerQuestions = employeeQuestions.concat(engineerVariant);
const internQuestions = employeeQuestions.concat(internVariant);

function init(role) {
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
            <div class="card-subtitle mb-2 text-muted">${data[0].role}</div>
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
            <div class="card-subtitle mb-2 text-muted">${data[i].role}</div>
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
            <div class="card-subtitle mb-2 text-muted">${data[0].role}</div>
        </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data[0].id}</li>
        <li class="list-group-item">Email: ${data[0].email}</li>
        <li class="list-group-item">School: ${data[0].school}</li>
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
                        if (team[i].role === 'engineer') {
                            appendToFile('index.html', addEngineerCard(team, i));
                        }
                        if (team[i].role === 'intern') {
                            appendToFile('index.html', addInternCard(team, i));
                        }
                    }
                    appendToFile('index.html', addManagerCard(team));
            }
        })
}

// function generateHTML(data) {
//     return `
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="./reset.css">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
//     <link rel="stylesheet" href="./style.css">
//     <title>Team Generator</title>
// </head>

// <body>
//     <div class="card-group">
//     </div>
// </body>

// </html>
//     `;
// }
function addEngineer(currentEmployee) {
    currentEmployee = 'engineer';
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            addEmployees();
        })
}

function addIntern() {
    currentEmployee = 'intern';
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
