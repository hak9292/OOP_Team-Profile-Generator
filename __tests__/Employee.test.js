const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('Can instantiate Employee instance', () => {
            const e = new Employee();
            expect(typeof (e)).toBe('object');
        });
    });
    describe('Setting Values', () => {
        it('Can set the name, id, and email via constructor arguments', () => {
            const name = 'Alex';
            const id = 1;
            const email = 'ak112997@gmail.com';
            const e = new Employee(name, id, email);
            expect(e.name).toBe(name);
            expect(e.id).toBe(id);
            expect(e.email).toBe(email);
        });
    });
    describe('Getting Values', () => {
        it('Can get name, id, email, and role via getName(), getId(), getEmail(), and getRole()', () => {
            const testName = 'Name';
            const testId = 0;
            const testEmail = 'email@email.com';
            const testRole = 'Employee';
            const e = new Employee(testName, testId, testEmail, testRole);
            expect(e.getName()).toBe(testName);
            expect(e.getId()).toBe(testId);
            expect(e.getEmail()).toBe(testEmail);
            expect(e.getRole()).toBe(testRole);
        });
    });
});
