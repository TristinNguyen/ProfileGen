const {Employee, Manager, Engineer, Intern} = require('../Employee');

describe('Engineer', () => {
    it('should create an object with a name, id, email, github, and role', () => {
        const engineer = new Engineer('Ryan', 2, 'ryan@gmail.com', 'yeeyee18', 'Engineer');

        expect(engineer.getName()).toEqual('Ryan');
        expect(engineer.getId()).toEqual(2);
        expect(engineer.getEmail()).toEqual('ryan@gmail.com');
        expect(engineer.getGithub()).toEqual('yeeyee18')
        expect(engineer.getRole()).toEqual('Engineer');
    })

    // it('should throw an error if nothing is entered for their name, email, github, and role', () => {
    //     const a = new Engineer('');
    //     const err = new Error ('Name, email, github, and role need to be provided')

    //     expect(a).toThrowError(err);
    // })

    // it('should throw an error if no number or a negative number is entered for the id', () => {
    //     const b = new Employee('Leo,-1,leo@gmail.com,manager');
    //     const err = new Error ('Positive integer needed for id')

    //     expect(b).toThrowError(err);
    // })
})