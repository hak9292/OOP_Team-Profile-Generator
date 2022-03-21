const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        // return 'Manager'
    }
}
module.exports = Employee;