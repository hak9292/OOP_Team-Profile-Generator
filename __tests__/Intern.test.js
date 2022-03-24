const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Setting School', () => {
        it('Can set school via constructor argument', () => {
            const testSchool = 'School University';
            const e = new Intern('Name', 0, 'email@email.com', testSchool);
            expect(e.school).toBe(testSchool);
        });
    });
    describe('Getting School and Role', () => {
        it('Can get school and role via getSchool() and getRole()', () => {
            const testSchool = 'School'
            const testRole = 'Intern';
            const e = new Intern('Name', 0, 'email@email.com', testSchool, testRole);
            expect(e.getSchool()).toBe(testSchool);
            expect(e.getRole()).toBe(testRole);
        });
    });
});