const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Setting GitHub', () => {
        it('Can set GitHub via constructor argument', () => {
            const testGithub = 'GitHub';
            const e = new Engineer('Name', 0, 'email@email.com', testGithub);
            expect(e.github).toBe(testGithub);
        });
    });
    describe('Getting Github and Role', () => {
        it('Can get GitHub and role via getGithub() and getRole()', () => {
            const testGithub = 'GitHub'
            const testRole = 'Engineer';
            const e = new Engineer('Name', 0, 'email@email.com', testGithub, testRole);
            expect(e.getGithub()).toBe(testGithub);
            expect(e.getRole()).toBe(testRole);
        });
    });
});