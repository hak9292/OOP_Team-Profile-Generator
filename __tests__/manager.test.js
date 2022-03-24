const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Setting Office Number', () => {
        it('Can set office number via constructor argument', () => {
            const testOfficeNumber = 44;
            const e = new Manager('Name', 0, 'email@email.com', testOfficeNumber);
            expect(e.officeNumber).toBe(testOfficeNumber);
        });
    });
    describe('Getting Role', () => {
        it('Can get role via getRole()', () => {
            const testRole = 'Manager';
            const e = new Manager('Name', 0, 'email@email.com', testRole);
            expect(e.getRole()).toBe(testRole);
        });
    });
});