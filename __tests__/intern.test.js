const {Employee, Manager, Engineer, Intern} = require('../employee');

describe('Intern', () => {
    it('should create an object with a name, id, email, school, and role', () => {
        const intern = new Intern('Jen', 4, 'jen@gmail.com', 'MSU', 'intern');

        expect(intern.getName()).toEqual('Jen');
        expect(intern.getId()).toEqual(4);
        expect(intern.getEmail()).toEqual('jen@gmail.com');
        expect(intern.getSchool()).toEqual('MSU')
        expect(intern.getRole()).toEqual('Intern');
    })

    // it('should throw an error if nothing is entered for their name, email, and role', () => {
    //     const a = new Intern('');
    //     const err = new Error ('Name, email,school, and role need to be provided')

    //     expect(a).toThrowError(err);
    // })

    // it('should throw an error if no number or a negative number is entered for the id', () => {
    //     const b = new Employee('Jen, -4, jen@gmail.com, intern');
    //     const err = new Error ('Positive integer needed for id')

    //     expect(b).toThrowError(err);
    // })
})