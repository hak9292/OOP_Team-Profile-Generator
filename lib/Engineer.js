const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {

    }
    getRole() {
        // return 'Engineer'
    }
}
module.exports = Employee;