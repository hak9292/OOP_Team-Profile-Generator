const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {

    }
    getRole() {
        // return 'Manager'
    }
}
module.exports = Employee;