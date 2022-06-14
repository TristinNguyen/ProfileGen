const {Employee, Manager, Engineer, Intern}= require('../employee');
describe('Manager', () => {
    it('should create an object with a name, id, email, github, and role', () => {
        const manager = new Manager('Liv', 3, 'liv@gmail.com', 18);

        expect(manager.getName()).toEqual('Liv');
        expect(manager.getId()).toEqual(3);
        expect(manager.getEmail()).toEqual('liv@gmail.com');
        expect(manager.getOfficeNumber()).toEqual(18)
        expect(manager.getRole()).toEqual('Manager');
    })

    // it('should throw an error if nothing is entered for their name, email, and role', () => {
    //     const a = new Engineer('');
    //     const err = new Error ('Name, email, and role need to be provided')

    //     expect(a).toThrowError(err);
    // })

    // it('should throw an error if no number or a negative number is entered for the id', () => {
    //     const b = new Employee('Leo,-1,leo@gmail.com,manager');
    //     const err = new Error ('Positive integer needed for id')

    //     expect(b).toThrowError(err);
    // })
})